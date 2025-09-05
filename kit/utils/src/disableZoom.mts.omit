/**
 * DisableZoom - Prevents zoom gestures on mobile Safari
 *
 * A lightweight utility class that disables pinch-to-zoom and double-tap-to-zoom
 * on mobile devices, particularly Safari on iOS.
 */
export interface DisableZoomOptions {
  autoInit?: boolean;
  target?: Document | HTMLElement;
}

export type TouchEventHandler = (event: TouchEvent) => void;

export interface BoundHandlers {
  touchstart?: TouchEventHandler;
  touchend?: TouchEventHandler;
}

export class DisableZoom {
  private options: Required<DisableZoomOptions>;
  private lastTouchEnd: number = 0;
  private isEnabled: boolean = false;
  private boundHandlers: BoundHandlers = {};

  constructor(options: DisableZoomOptions = {}) {
    this.options = {
      autoInit: true,
      target: document,
      ...options,
    };

    if (this.options.autoInit) {
      this.enable();
    }
  }

  private handleTouchStart(event: TouchEvent): void {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }

  private handleTouchEnd(event: TouchEvent): void {
    const now = Date.now();
    if (now - this.lastTouchEnd <= 300) {
      event.preventDefault();
    }
    this.lastTouchEnd = now;
  }

  public enable(): DisableZoom {
    if (this.isEnabled) {
      console.warn("DisableZoom is already enabled");
      return this;
    }

    this.boundHandlers = {
      touchstart: this.handleTouchStart.bind(this),
      touchend: this.handleTouchEnd.bind(this),
    };

    if (this.boundHandlers.touchstart) {
      this.options.target.addEventListener(
        "touchstart",
        this.boundHandlers.touchstart as EventListener,
        {
          passive: false,
        },
      );
    }

    if (this.boundHandlers.touchend) {
      this.options.target.addEventListener(
        "touchend",
        this.boundHandlers.touchend as EventListener,
        {
          passive: false,
        },
      );
    }

    this.isEnabled = true;
    return this;
  }

  public disable(): DisableZoom {
    if (!this.isEnabled) {
      console.warn("DisableZoom is already disabled");
      return this;
    }

    if (this.boundHandlers.touchstart) {
      this.options.target.removeEventListener(
        "touchstart",
        this.boundHandlers.touchstart as EventListener,
      );
    }

    if (this.boundHandlers.touchend) {
      this.options.target.removeEventListener(
        "touchend",
        this.boundHandlers.touchend as EventListener,
      );
    }

    this.boundHandlers = {};
    this.isEnabled = false;
    return this;
  }

  public toggle(): DisableZoom {
    return this.isEnabled ? this.disable() : this.enable();
  }

  public get enabled(): boolean {
    return this.isEnabled;
  }

  public destroy(): void {
    this.disable();
    this.boundHandlers = {};
    this.lastTouchEnd = 0;
  }

  public static disableZoom(options: DisableZoomOptions = {}): DisableZoom {
    return new DisableZoom(options);
  }

  public static isMobileDevice(): boolean {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
}
