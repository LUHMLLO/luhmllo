/**
 * ModalDialog - A reusable modal dialog class with drag-to-dismiss functionality
 *
 * Features:
 * - Touch and mouse drag gestures for dismissal
 * - Event delegation for trigger elements
 * - Proper focus management and accessibility
 * - Framework-agnostic implementation
 *
 * @example
 * ```typescript
 * const modal = new ModalDialog({
 *   targetAttribute: '[data-modal-trigger]',
 *   dragThreshold: 120
 * });
 *
 * // Programmatic control
 * modal.open();
 * modal.close();
 * modal.toggle();
 *
 * // Cleanup when done
 * modal.destroy();
 * ```
 */

interface ModalDialogOptions {
  /** CSS selector for elements that should trigger the modal */
  targetAttribute?: string;
  /** Minimum drag distance (px) to trigger close */
  dragThreshold?: number;
  /** Maximum Y position within dialog where drag can start */
  dragHandleHeight?: number;
  /** Custom close callback */
  onClose?: () => void;
  /** Custom open callback */
  onOpen?: () => void;
}

interface DragState {
  startY: number;
  currentY: number;
  isDragging: boolean;
  pointerId: number | null;
}

export class ModalDialog {
  private dialog: HTMLDialogElement;
  private options: Required<ModalDialogOptions>;
  private dragState: DragState;
  private isOpen: boolean = false;

  // Bound methods to maintain context
  private boundHandlePointerDown = this.handlePointerDown.bind(this);
  private boundHandlePointerMove = this.handlePointerMove.bind(this);
  private boundHandlePointerEnd = this.handlePointerEnd.bind(this);
  private boundHandleClickOutside = this.handleClickOutside.bind(this);
  private boundHandleEscKey = this.handleEscKey.bind(this);
  private boundHandleDelegatedClick = this.handleDelegatedClick.bind(this);

  /**
   * Creates a new ModalDialog instance
   *
   * @param dialog - The HTMLDialogElement to control
   * @param options - Configuration options
   */
  constructor(dialog: HTMLDialogElement, options: ModalDialogOptions = {}) {
    this.dialog = dialog;
    this.options = {
      targetAttribute: options.targetAttribute ?? "[data-toggle-modal]",
      dragThreshold: options.dragThreshold ?? 100,
      dragHandleHeight: options.dragHandleHeight ?? 100,
      onClose: options.onClose ?? (() => {}),
      onOpen: options.onOpen ?? (() => {}),
    };

    this.dragState = {
      startY: 0,
      currentY: 0,
      isDragging: false,
      pointerId: null,
    };

    this.initialize();
  }

  /**
   * Initializes event delegation for trigger elements
   * Sets up the global click listener for modal triggers
   */
  private initialize(): void {
    document.addEventListener("click", this.boundHandleDelegatedClick);
  }

  /**
   * Opens the modal dialog
   * Applies body styles, shows the modal, and sets up event listeners
   */
  public open(): void {
    if (this.isOpen) return;

    this.isOpen = true;

    // Apply body styles for modal state
    document.body.style.opacity = "0.5";
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    this.dialog.showModal();
    this.options.onOpen();

    // Use requestAnimationFrame to ensure modal is rendered before adding listeners
    requestAnimationFrame(() => {
      this.addModalEventListeners();
    });
  }

  /**
   * Closes the modal dialog
   * Removes body styles, closes the modal, and cleans up event listeners
   */
  public close(): void {
    if (!this.isOpen) return;

    this.isOpen = false;

    // Reset body styles
    document.body.removeAttribute("style");

    this.dialog.close();
    this.options.onClose();

    // Clean up modal-specific event listeners
    requestAnimationFrame(() => {
      this.removeModalEventListeners();
    });
  }

  /**
   * Toggles the modal dialog open/closed state
   */
  public toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  /**
   * Handles pointer down events for drag initiation
   * Only starts drag if conditions are met (touch area, not interactive element)
   *
   * @param e - PointerEvent from user interaction
   */
  private handlePointerDown(e: PointerEvent): void {
    if (!(e.target instanceof HTMLElement)) return;

    // Only handle touch and mouse events
    if (e.pointerType !== "touch" && e.pointerType !== "mouse") return;

    // Don't drag if user is interacting with form elements
    if (e.target.closest('button, input, select, textarea, [role="button"]')) {
      return;
    }

    const rect = this.dialog.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;

    // Only allow drag from the top portion of the modal (drag handle area)
    if (relativeY < 0 || relativeY > this.options.dragHandleHeight) return;

    // Initialize drag state
    this.dragState.startY = e.clientY;
    this.dragState.currentY = this.dragState.startY;
    this.dragState.isDragging = true;
    this.dragState.pointerId = e.pointerId;

    // Capture pointer to ensure we get move/end events even if cursor leaves element
    this.dialog.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  /**
   * Handles pointer move events during drag
   * Updates dialog transform to follow drag movement (downward only)
   *
   * @param e - PointerEvent from user interaction
   */
  private handlePointerMove(e: PointerEvent): void {
    if (
      !this.dragState.isDragging || e.pointerId !== this.dragState.pointerId
    ) return;

    this.dragState.currentY = e.clientY;
    const delta = this.dragState.currentY - this.dragState.startY;

    // Only allow downward dragging (positive delta)
    if (delta > 0) {
      requestAnimationFrame(() => {
        if (this.dialog) {
          this.dialog.style.transform = `translateY(${delta}px)`;
        }
      });
    }
  }

  /**
   * Handles pointer end events to complete or cancel drag
   * Closes modal if drag distance exceeds threshold
   */
  private handlePointerEnd(): void {
    if (!this.dragState.isDragging) return;

    const delta = this.dragState.currentY - this.dragState.startY;

    // Reset transform
    this.dialog.style.transform = "";

    // Close modal if drag distance exceeds threshold
    if (delta > this.options.dragThreshold) {
      this.close();
    }

    // Reset drag state
    this.dragState.isDragging = false;
    this.dragState.pointerId = null;
  }

  /**
   * Handles clicks outside the modal to close it
   *
   * @param event - MouseEvent from click interaction
   */
  private handleClickOutside(event: MouseEvent): void {
    if (!this.dialog.contains(event.target as Node)) {
      this.close();
    }
  }

  /**
   * Handles Escape key press to close modal
   *
   * @param event - KeyboardEvent from key interaction
   */
  private handleEscKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.close();
    }
  }

  /**
   * Handles delegated clicks for modal trigger elements
   * Uses event delegation to handle dynamically added trigger elements
   *
   * @param event - MouseEvent from click interaction
   */
  private handleDelegatedClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const toggleElement = target.closest(this.options.targetAttribute);

    if (toggleElement) {
      event.preventDefault();
      this.toggle();
    }
  }

  /**
   * Adds modal-specific event listeners when modal is open
   */
  private addModalEventListeners(): void {
    document.addEventListener("click", this.boundHandleClickOutside);
    document.addEventListener("keydown", this.boundHandleEscKey);
    this.dialog.addEventListener("pointerdown", this.boundHandlePointerDown);
    this.dialog.addEventListener("pointermove", this.boundHandlePointerMove);
    this.dialog.addEventListener("pointerup", this.boundHandlePointerEnd);
    this.dialog.addEventListener("pointercancel", this.boundHandlePointerEnd);
  }

  /**
   * Removes modal-specific event listeners when modal is closed
   */
  private removeModalEventListeners(): void {
    document.removeEventListener("click", this.boundHandleClickOutside);
    document.removeEventListener("keydown", this.boundHandleEscKey);
    this.dialog.removeEventListener("pointerdown", this.boundHandlePointerDown);
    this.dialog.removeEventListener("pointermove", this.boundHandlePointerMove);
    this.dialog.removeEventListener("pointerup", this.boundHandlePointerEnd);
    this.dialog.removeEventListener(
      "pointercancel",
      this.boundHandlePointerEnd,
    );
  }

  /**
   * Destroys the ModalDialog instance
   * Removes all event listeners and cleans up resources
   * Call this when the modal is no longer needed
   */
  public destroy(): void {
    // Close modal if it's open
    if (this.isOpen) {
      this.close();
    }

    // Remove global event delegation
    document.removeEventListener("click", this.boundHandleDelegatedClick);
  }

  /**
   * Gets the current open state of the modal
   */
  public get state(): boolean {
    return this.isOpen;
  }
}
