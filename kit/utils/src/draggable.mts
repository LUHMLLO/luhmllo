interface Options {
  dragSpeed: number;
  inertia: {
    damping: number;
    threshold: number;
  };
  mode: "bounded" | "free";
  zoom: {
    enabled: boolean;
    initial: number;
    max: number;
    min: number;
    smoothing: number;
    zoomTo: "cursor" | "center";
  };
}

interface State {
  primaryPointerId: number;
  constraints: {
    boundingX: number;
    boundingY: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  isDragging: boolean;
  isPinching: boolean;
  movement: {
    offsetX: number;
    offsetY: number;
    startX: number;
    startY: number;
    velocityX: number;
    velocityY: number;
    lastTime: number;
  };
  zoom: number;
}

interface PointerData {
  x: number;
  y: number;
  timestamp: number;
}

interface PinchState {
  initialDistance: number;
  initialZoom: number;
  initialCenter: {
    x: number;
    y: number;
  };
  initialOffset: {
    x: number;
    y: number;
  };
  contentPoint: {
    x: number;
    y: number;
  };
}

export class Draggable {
  draggableElement: HTMLElement;
  boundaryElement: HTMLElement;
  options: Partial<Options> = {};
  state: Partial<State> = {};
  activePointers: Map<number, PointerData>;
  pinchState: PinchState | null;
  inertiaFrameId: number | null;

  constructor(
    draggableElement: HTMLElement,
    boundaryElement: HTMLElement,
    options: Options,
  ) {
    this.draggableElement = draggableElement;
    this.boundaryElement = boundaryElement;
    this.options = {
      dragSpeed: options.dragSpeed ?? 1.25,
      inertia: {
        damping: options.inertia?.damping ?? 0.92,
        threshold: options.inertia?.threshold ?? 1.0,
      },
      mode: options.mode ?? "bounded",
      zoom: {
        enabled: options.zoom?.enabled ?? true,
        initial: options.zoom?.initial ?? 1,
        min: options.zoom?.min ?? 0.5,
        max: options.zoom?.max ?? 1.5,
        smoothing: options.zoom?.smoothing ?? 0.75,
        zoomTo: options.zoom?.zoomTo ?? "cursor",
      },
    };
    this.state = {
      primaryPointerId: -1,
      constraints: {
        boundingX: 0,
        boundingY: 0,
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
      },
      isDragging: false,
      isPinching: false,
      movement: {
        offsetX: 0,
        offsetY: 0,
        startX: 0,
        startY: 0,
        velocityX: 0,
        velocityY: 0,
        lastTime: 0,
      },
      zoom: this.options.zoom?.initial ?? 1,
    };
    this.activePointers = new Map();
    this.pinchState = null;
    this.inertiaFrameId = null;

    this._handlePointerDown = this._handlePointerDown.bind(this);
    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
    this._handlePointerCancel = this._handlePointerCancel.bind(this);
    this._handlePointerLeave = this._handlePointerLeave.bind(this);
    this._handleWindowBlur = this._handleWindowBlur.bind(this);
    this._handleWheel = this._handleWheel.bind(this);

    this.pre();
  }

  pre() {
    if (!this.draggableElement) {
      throw new Error(
        `Draggable requires a valid HTMLElement, but received: ${
          this.draggableElement === null ? "null" : typeof this.draggableElement
        }`,
      );
    }

    if (this.options.mode === "bounded" && !this.boundaryElement) {
      throw new Error(
        `Boundary requires a valid HTMLElement, but received: ${
          this.boundaryElement === null ? "null" : typeof this.boundaryElement
        }`,
      );
    }
  }

  ini() {
    if (this.options.mode === "bounded") {
      this.boundaryElement.addEventListener(
        "pointerdown",
        this._handlePointerDown,
      );
      this.boundaryElement.addEventListener(
        "pointermove",
        this._handlePointerMove,
      );
      this.boundaryElement.addEventListener(
        "pointerup",
        this._handlePointerUp,
      );
      this.boundaryElement.addEventListener(
        "pointercancel",
        this._handlePointerCancel,
      );
      this.boundaryElement.addEventListener(
        "pointerleave",
        this._handlePointerLeave,
      );
    }
    globalThis.addEventListener("blur", this._handleWindowBlur);
    globalThis.addEventListener("visibilitychange", this._handleWindowBlur);

    // Set up wheel events for desktop zoom
    if (this.options.zoom.enabled) {
      this.boundary.addEventListener("wheel", this._handleWheel, {
        passive: false,
      });
    }

    this._updateTransform();
  }

  _updateTransform() {
  }
}
