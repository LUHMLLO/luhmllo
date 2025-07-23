// @ts-check

/**
 * Configuration options for the Drifter class
 * @typedef {Object} DrifterOptions
 * @property {number} dragSpeed - Multiplier for drag sensitivity (1 = normal speed)
 * @property {'bounded' | 'free'} mode - Movement constraint mode
 * @property {DrifterZoomOptions} zoom - Zoom configuration options
 * @property {number} inertiaDamping - (optional) friction multiplier (0.9–0.99)
 * @property {number} inertiaThreshold - (optional) min velocity threshold
 */

/**
 * Zoom configuration options
 * @typedef {Object} DrifterZoomOptions
 * @property {boolean} enabled - Whether zooming is enabled
 * @property {number} initial - Starting zoom level (1 = 100%)
 * @property {number} min - Minimum allowed zoom level
 * @property {number} max - Maximum allowed zoom level
 * @property {number} smoothing - Smoothing factor for zoom transitions (0-1, lower = smoother)
 * @property {'cursor' | 'center'} zoomTo - Whether to zoom toward cursor position
 */

/**
 * Internal state object for tracking interaction state
 * @typedef {Object} DrifterState
 * @property {number} primaryPointerId - ID of the primary pointer for dragging
 * @property {DrifterBoundaryConstraints} constraints - Boundary constraint values
 * @property {boolean} isDragging - Whether user is currently dragging
 * @property {boolean} isPinching - Whether user is currently pinching
 * @property {DrifterMovementState} movement - Position and drag tracking
 * @property {number} zoom - Current zoom level (1 = 100%)
 */

/**
 * Boundary constraint values
 * @typedef {Object} DrifterBoundaryConstraints
 * @property {number} boundingX - Constrained X position
 * @property {number} boundingY - Constrained Y position
 * @property {number} minX
 * @property {number} maxX
 * @property {number} minY
 * @property {number} maxY
 */

/**
 * Movement and position tracking state
 * @typedef {Object} DrifterMovementState
 * @property {number} offsetX - Current horizontal offset in pixels
 * @property {number} offsetY - Current vertical offset in pixels
 * @property {number} startX - X coordinate where current drag started
 * @property {number} startY - Y coordinate where current drag started
 * @property {number} velocityX
 * @property {number} velocityY
 * @property {number} lastTime
 */

/**
 * Pointer tracking data
 * @typedef {Object} DrifterPointerData
 * @property {number} x - X coordinate
 * @property {number} y - Y coordinate
 * @property {number} timestamp - When pointer was recorded
 */

/**
 * Pinch gesture state
 * @typedef {Object} DrifterPinchState
 * @property {number} initialDistance - Starting distance between pointers
 * @property {number} initialZoom - Zoom level when pinch started
 * @property {Object} initialCenter - Starting center point of pinch
 * @property {number} initialCenter.x - X coordinate of initial center
 * @property {number} initialCenter.y - Y coordinate of initial center
 * @property {number} initialOffsetX - X offset when pinch started
 * @property {number} initialOffsetY - Y offset when pinch started
 * @property {number} contentPointX - Content point under initial pinch center
 * @property {number} contentPointY - Content point under initial pinch center
 */

/**
 * A reusable class for creating interactive pan and zoom functionality on DOM elements.
 * Supports mouse, touch, and pen input with configurable boundaries and zoom behavior.
 * Uses pointer events exclusively for consistent cross-device behavior.
 *
 * @example
 * // Basic usage
 * const drifter = new Drifter('#canvas', '#viewport');
 *
 * @example
 * // With custom options
 * const drifter = new Drifter(canvasElement, viewportElement, {
 *   dragSpeed: 1.5,
 *   mode: 'free',
 *   zoom: {
 *     min: 0.5,
 *     max: 3,
 *     smoothing: 0.2
 *   }
 * });
 */
export class Drifter {
  /**
   * Creates a new Drifter instance
   * @param {string|HTMLElement} targetSelector - The element to be manipulated (ID string or element)
   * @param {string|HTMLElement} boundarySelector - The container element that defines boundaries (ID string or element)
   * @param {DrifterOptions} [options] - Configuration options
   * @throws {Error} When target or boundary elements cannot be found
   */
  constructor (targetSelector, boundarySelector, options) {
    // Resolve target element
    this.target =
      typeof targetSelector === 'string'
        ? document.getElementById(targetSelector)
        : targetSelector

    if (!this.target || !(this.target instanceof HTMLElement)) {
      throw new Error(`Target element not found or invalid: ${ targetSelector }`)
    }

    // Resolve boundary element
    this.boundary =
      typeof boundarySelector === 'string'
        ? document.getElementById(boundarySelector)
        : boundarySelector

    if (!this.boundary || !(this.boundary instanceof HTMLElement)) {
      throw new Error(
        `Boundary element not found or invalid: ${ boundarySelector }`
      )
    }

    /** @type {DrifterOptions} Merged configuration options */
    this.options = {
      dragSpeed: 1.25,
      inertiaDamping: 0.92,        // Slightly less aggressive
      inertiaThreshold: 1.0,       // Higher threshold to prevent micro-movements
      mode: 'bounded',
      ...options,
      zoom: {
        enabled: true,
        initial: 1,
        min: 0.5,
        max: 1.5,
        smoothing: 0.75,
        zoomTo: 'cursor',
        ...options?.zoom,
      },
    }

    /** @type {DrifterState} Current interaction state */
    this.state = {
      primaryPointerId: -1,
      constraints: {
        boundingX: 0,
        boundingY: 0,
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
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
      zoom: this.options.zoom.initial,
    }

    /** @type {Map<number, DrifterPointerData>} Active pointers tracking */
    this.activePointers = new Map()

    /** @type {DrifterPinchState|null} Pinch gesture state */
    this.pinchState = null

    /** @type {number|null} Animation frame ID for performance optimization */
    this.animationFrameId = null

    // Add inertia tracking
    /** @type {number|null} Inertia animation frame ID */
    this.inertiaFrameId = null

    // Bind event handlers to preserve 'this' context
    this._handlePointerDown = this._handlePointerDown.bind(this)
    this._handlePointerMove = this._handlePointerMove.bind(this)
    this._handlePointerUp = this._handlePointerUp.bind(this)
    this._handlePointerCancel = this._handlePointerCancel.bind(this)
    this._handlePointerLeave = this._handlePointerLeave.bind(this)
    this._handleWindowBlur = this._handleWindowBlur.bind(this)
    this._handleWheel = this._handleWheel.bind(this)

    this.initialize()
  }

  /**
   * Initialize the drifter by setting up event listeners and initial state
   * @private
   */
  initialize() {
    // Set up pointer event listeners
    this.boundary.addEventListener('pointerdown', this._handlePointerDown)
    this.boundary.addEventListener('pointermove', this._handlePointerMove)
    this.boundary.addEventListener('pointerup', this._handlePointerUp)
    this.boundary.addEventListener('pointercancel', this._handlePointerCancel)
    this.boundary.addEventListener('pointerleave', this._handlePointerLeave)
    globalThis.addEventListener('blur', this._handleWindowBlur)
    globalThis.addEventListener('visibilitychange', this._handleWindowBlur)

    // Set up wheel events for desktop zoom
    if (this.options.zoom.enabled) {
      this.boundary.addEventListener('wheel', this._handleWheel, { passive: false })
    }

    // Configure boundary element - disable browser touch behaviors
    this.boundary.style.touchAction = 'none'
    this.boundary.style.userSelect = 'none'

    // Apply initial transform
    this._updateTransform()
  }

  /**
   * Updates the target element's CSS transform based on current state
   * Uses CSS custom properties for hardware-accelerated transforms
   * @private
   */
  _updateTransform() {
    // Cancel any pending animation frame to prevent duplicate updates
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }

    this.animationFrameId = requestAnimationFrame(() => {
      this.target.style.setProperty('--translate-x', `${ this.state.movement.offsetX }px`)
      this.target.style.setProperty('--translate-y', `${ this.state.movement.offsetY }px`)
      this.target.style.setProperty('--translate-z', '0px')
      this.target.style.setProperty('--scale', `${ this.state.zoom }`)
      this.animationFrameId = null
    })
  }

  _startInertia() {
    // Don't start inertia if we're still dragging or pinching
    if (this.state.isDragging || this.state.isPinching) {
      return
    }

    const damping = this.options.inertiaDamping ?? 0.92
    const minVelocity = this.options.inertiaThreshold ?? 1.0

    // Cap initial velocity to prevent launching
    const maxInitialVelocity = 2000
    this.state.movement.velocityX = Math.max(-maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityX))
    this.state.movement.velocityY = Math.max(-maxInitialVelocity,
      Math.min(maxInitialVelocity, this.state.movement.velocityY))

    let lastTime = performance.now()

    const step = (/** @type {number} */ now) => {
      // Check if inertia was cancelled
      if (!this.inertiaFrameId) return

      const dt = (now - lastTime) / 1000
      lastTime = now

      // Apply damping - frame rate independent
      this.state.movement.velocityX *= Math.pow(damping, dt * 60)
      this.state.movement.velocityY *= Math.pow(damping, dt * 60)

      const vx = this.state.movement.velocityX
      const vy = this.state.movement.velocityY

      // Check if still moving
      const speed = Math.sqrt(vx * vx + vy * vy)
      if (speed < minVelocity) {
        this._stopInertia() // Clean stop
        return
      }

      // Calculate movement for this frame
      const moveX = vx * dt
      const moveY = vy * dt

      let newX = this.state.movement.offsetX + moveX
      let newY = this.state.movement.offsetY + moveY

      if (this.options.mode === 'bounded') {
        this._applyBoundaryConstraints(newX, newY, false)
        newX = this.state.constraints.boundingX
        newY = this.state.constraints.boundingY

        // Apply boundary bounce/stop behavior
        if (newX !== this.state.movement.offsetX + moveX) {
          this.state.movement.velocityX *= -0.3
        }
        if (newY !== this.state.movement.offsetY + moveY) {
          this.state.movement.velocityY *= -0.3
        }
      }

      this.state.movement.offsetX = newX
      this.state.movement.offsetY = newY
      this._updateTransform()

      this.inertiaFrameId = requestAnimationFrame(step)
    }

    this.inertiaFrameId = requestAnimationFrame(step)
  }

  /**
 * Stops any ongoing inertia animation immediately
 * @private
 */
  _stopInertia() {
    if (this.inertiaFrameId) {
      cancelAnimationFrame(this.inertiaFrameId)
      this.inertiaFrameId = null
    }

    // Reset velocity to prevent carryover
    this.state.movement.velocityX = 0
    this.state.movement.velocityY = 0
  }

  /**
   * Calculates and applies boundary constraints to prevent element from drifting out of view
   * @param {number} x - Proposed X position
   * @param {number} y - Proposed Y position
 * @param {boolean} [elastic=true]
   * @private
   */
  _applyBoundaryConstraints(x, y, elastic = true) {
    // Get scaled target dimensions
    const targetWidth = this.target.clientWidth * this.state.zoom
    const targetHeight = this.target.clientHeight * this.state.zoom

    // Calculate usable boundary dimensions (excluding padding)
    const boundaryStyles = getComputedStyle(this.boundary)
    const padding = {
      left: parseFloat(boundaryStyles.paddingLeft),
      right: parseFloat(boundaryStyles.paddingRight),
      top: parseFloat(boundaryStyles.paddingTop),
      bottom: parseFloat(boundaryStyles.paddingBottom),
    }

    const boundaryWidth =
      this.boundary.clientWidth - padding.left - padding.right
    const boundaryHeight =
      this.boundary.clientHeight - padding.top - padding.bottom

    // Calculate boundary limits
    const halfW = boundaryWidth / 2
    const halfH = boundaryHeight / 2

    // Horizontal boundaries
    const maxRight = (targetWidth - boundaryWidth) / 2 + halfW
    const maxLeft = -maxRight

    // Vertical boundaries
    const maxDown = (targetHeight - boundaryHeight) / 2 + halfH
    const maxUp = -maxDown

    // Save them to state so other functions can use them
    this.state.constraints.minX = maxLeft
    this.state.constraints.maxX = maxRight
    this.state.constraints.minY = maxUp
    this.state.constraints.maxY = maxDown

    const tension = 0.25 // spring pull strength

    /**
     * @param {number} val
     * @param {number} min
     * @param {number} max
     */
    function applyElastic(val, min, max) {
      if (val < min) return elastic ? min + (val - min) * tension : min
      if (val > max) return elastic ? max + (val - max) * tension : max
      return val
    }

    // Apply constraints
    // this.state.constraints.boundingX = Math.max(maxLeft, Math.min(maxRight, x))
    // this.state.constraints.boundingY = Math.max(maxUp, Math.min(maxDown, y))
    this.state.constraints.boundingX = applyElastic(x, maxLeft, maxRight)
    this.state.constraints.boundingY = applyElastic(y, maxUp, maxDown)
  }

  _bounceBackToBounds() {
    const { offsetX: startX, offsetY: startY } = this.state.movement
    const { minX, maxX, minY, maxY } = this.state.constraints

    const targetX = Math.max(minX, Math.min(maxX, startX))
    const targetY = Math.max(minY, Math.min(maxY, startY))

    const startTime = performance.now()
    const duration = 250

    const animate = (/** @type {number} */ now) => {
      const t = Math.min(1, (now - startTime) / duration)
      const eased = t * (2 - t) // easeOutQuad

      this.state.movement.offsetX = startX + (targetX - startX) * eased
      this.state.movement.offsetY = startY + (targetY - startY) * eased
      this._updateTransform()

      if (t < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }



  /**
   * Calculates distance between two pointer positions
   * @param {DrifterPointerData} pointer1 - First pointer data
   * @param {DrifterPointerData} pointer2 - Second pointer data
   * @returns {number} Distance between pointers
   * @private
   */
  _getPointerDistance(pointer1, pointer2) {
    const dx = pointer1.x - pointer2.x
    const dy = pointer1.y - pointer2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  /**
   * Calculates center point between two pointers
   * @param {DrifterPointerData} pointer1 - First pointer data
   * @param {DrifterPointerData} pointer2 - Second pointer data
   * @returns {{x: number, y: number}} Center point relative to boundary
   * @private
   */
  _getPointerCenter(pointer1, pointer2) {
    const boundaryRect = this.boundary.getBoundingClientRect()
    return {
      x: (pointer1.x + pointer2.x) / 2 - boundaryRect.left,
      y: (pointer1.y + pointer2.y) / 2 - boundaryRect.top,
    }
  }

  /**
   * Initiates a drag operation
   * @param {number} x - Starting X coordinate
   * @param {number} y - Starting Y coordinate
   * @param {number} pointerId - Pointer identifier
   * @private
   */
  _beginDrag(x, y, pointerId) {
    // CRITICAL: Stop any ongoing inertia before starting new drag
    this._stopInertia()

    this.state.isDragging = true
    this.state.movement.startX = x
    this.state.movement.startY = y
    this.state.primaryPointerId = pointerId

    // Reset velocity tracking for clean start
    this.state.movement.velocityX = 0
    this.state.movement.velocityY = 0
    this.state.movement.lastTime = performance.now()

    // Capture pointer to ensure we receive all subsequent events
    this.boundary.setPointerCapture(pointerId)
  }

  /**
   * Initiates a pinch operation with proper state tracking
   * @private
   */
  _beginPinch() {
    const pointers = Array.from(this.activePointers.values())
    if (pointers.length !== 2) return

    // Stop any ongoing inertia
    this._stopInertia()

    this.state.isPinching = true
    this.state.isDragging = false // Stop any drag operation

    const [ pointer1, pointer2 ] = pointers
    const initialCenter = this._getPointerCenter(pointer1, pointer2)

    // Calculate the point on the content that's under the initial pinch center
    // This point should remain stationary relative to the pinch center throughout the gesture
    const contentPointX = (initialCenter.x - this.boundary.clientWidth / 2 - this.state.movement.offsetX) / this.state.zoom
    const contentPointY = (initialCenter.y - this.boundary.clientHeight / 2 - this.state.movement.offsetY) / this.state.zoom

    this.pinchState = {
      initialDistance: this._getPointerDistance(pointer1, pointer2),
      initialZoom: this.state.zoom,
      initialCenter,
      initialOffsetX: this.state.movement.offsetX,
      initialOffsetY: this.state.movement.offsetY,
      contentPointX,
      contentPointY,
    }

    // Capture both pointers
    const pointerIds = Array.from(this.activePointers.keys())
    pointerIds.forEach((id) => {
      this.boundary.setPointerCapture(id)
    })
  }

  /**
   * Ends the current drag operation
   * @param {number} pointerId - Pointer identifier
   * @private
   */
  _endDrag(pointerId) {
    if (this.state.primaryPointerId !== pointerId) return

    const now = performance.now()
    const dt = now - this.state.movement.lastTime

    // If there's been a significant delay, don't apply inertia
    if (dt > 150) { // 150ms threshold
      this.state.movement.velocityX = 0
      this.state.movement.velocityY = 0

      if (this.options.mode === 'bounded') {
        this._bounceBackToBounds()
      }

      return
    }
    // If very small time gap, velocity might be unreliable - cap it
    else if (dt < 5) {
      this.state.movement.velocityX *= 0.5
      this.state.movement.velocityY *= 0.5
    }

    this.state.isDragging = false
    this.state.primaryPointerId = -1

    // Only start inertia if we have meaningful velocity
    const speed = Math.sqrt(
      this.state.movement.velocityX ** 2 +
      this.state.movement.velocityY ** 2
    )

    if (speed > this.options.inertiaThreshold || 0.5) {
      this._startInertia()
    }

    if (this.boundary.hasPointerCapture(pointerId)) {
      this.boundary.releasePointerCapture(pointerId)
    }

    if (this.options.mode === 'bounded') {
      const { offsetX, offsetY } = this.state.movement
      const { minX, maxX, minY, maxY } = this.state.constraints

      const outOfBoundsX = offsetX < minX || offsetX > maxX
      const outOfBoundsY = offsetY < minY || offsetY > maxY

      if (outOfBoundsX || outOfBoundsY) {
        this._bounceBackToBounds()
      }
    }
  }

  /**
   * Ends the current pinch operation
   * @private
   */
  _endPinch() {
    this.state.isPinching = false
    this.pinchState = null

    // Release capture for all remaining pointers
    this.activePointers.forEach((_, pointerId) => {
      if (this.boundary.hasPointerCapture(pointerId)) {
        this.boundary.releasePointerCapture(pointerId)
      }
    })

    if (this.options.mode === 'bounded') {
      const { offsetX, offsetY } = this.state.movement
      const { minX, maxX, minY, maxY } = this.state.constraints

      const outOfBoundsX = offsetX < minX || offsetX > maxX
      const outOfBoundsY = offsetY < minY || offsetY > maxY

      if (outOfBoundsX || outOfBoundsY) {
        this._bounceBackToBounds()
      }
    }
  }

  /**
   * Handles pointer down events to start dragging or pinching
   * @param {PointerEvent} event - The pointer event
   * @private
   */
  _handlePointerDown(event) {
    // Ensure we have a valid HTMLElement target
    if (!(event.target instanceof HTMLElement)) return

    // Only respond to clicks on boundary or target elements
    // might update this later to allow conditional boundary drag detection or target only
    if (![ this.boundary, this.target ].includes(event.target)) return

    // Add pointer to active tracking
    this.activePointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now(),
    })

    // Determine gesture type based on active pointer count
    if (this.activePointers.size === 1) {
      // Single pointer - start drag
      this._beginDrag(event.clientX, event.clientY, event.pointerId)
    } else if (this.activePointers.size === 2 && this.options.zoom.enabled) {
      // Two pointers - start pinch
      this._beginPinch()
    }

    event.preventDefault()
  }

  /**
   * Handles pointer move events for dragging and pinching
   * @param {PointerEvent} event - The pointer event
   * @private
   */
  _handlePointerMove(event) {
    // Update pointer position in our tracking
    if (this.activePointers.has(event.pointerId)) {
      this.activePointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now(),
      })
    }

    // Handle drag movement
    if (
      this.state.isDragging &&
      this.state.primaryPointerId === event.pointerId
    ) {
      this._processDragMovement(event.clientX, event.clientY)
    }

    // Handle pinch movement
    if (this.state.isPinching && this.activePointers.size === 2) {
      this._processPinchMovement()
    }
  }

  /**
   * Improved velocity tracking for more consistent inertia
   * Replace the existing _processDragMovement method with this version
    * Processes drag movement calculations and boundary application
    * @param {number} clientX - Current X coordinate
    * @param {number} clientY - Current Y coordinate
    * @private
    */

  _processDragMovement(clientX, clientY) {
    const now = performance.now()

    // Calculate movement delta since last drag update
    const deltaX = (clientX - this.state.movement.startX) * this.options.dragSpeed
    const deltaY = (clientY - this.state.movement.startY) * this.options.dragSpeed

    // Store previous position for velocity calculation
    const prevX = this.state.movement.offsetX
    const prevY = this.state.movement.offsetY

    // Apply movement based on mode
    if (this.options.mode === 'bounded') {
      this._applyBoundaryConstraints(
        this.state.movement.offsetX + deltaX,
        this.state.movement.offsetY + deltaY,
        true
      )
      this.state.movement.offsetX = this.state.constraints.boundingX
      this.state.movement.offsetY = this.state.constraints.boundingY
    } else {
      this.state.movement.offsetX += deltaX
      this.state.movement.offsetY += deltaY
    }

    // Calculate velocity based on ACTUAL position change, not input delta
    const dt = now - this.state.movement.lastTime
    if (dt > 5 && dt < 100) { // Reasonable time gap
      const actualDeltaX = this.state.movement.offsetX - prevX
      const actualDeltaY = this.state.movement.offsetY - prevY

      this.state.movement.velocityX = (actualDeltaX / dt) * 1000 // pixels/second
      this.state.movement.velocityY = (actualDeltaY / dt) * 1000
    }

    // Update tracking values
    this.state.movement.startX = clientX
    this.state.movement.startY = clientY
    this.state.movement.lastTime = now

    this._updateTransform()
  }


  /**
   * Processes pinch movement for zoom and pan - fixed version
   * Eliminates jitter by using a stable reference point calculation
   * @private
   */
  _processPinchMovement() {
    if (!this.pinchState || this.activePointers.size !== 2) return

    const pointers = Array.from(this.activePointers.values())
    const [ pointer1, pointer2 ] = pointers

    // Calculate current distance and zoom scale
    const currentDistance = this._getPointerDistance(pointer1, pointer2)
    const scale = currentDistance / this.pinchState.initialDistance

    // Calculate new zoom level within constraints
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.pinchState.initialZoom * scale)
    )

    // Get current center of pinch gesture
    const currentCenter = this._getPointerCenter(pointer1, pointer2)

    // Calculate new position to keep the content point stationary under the pinch center
    // The content point (in content coordinates) should appear at the current center
    const newOffsetX = currentCenter.x - this.boundary.clientWidth / 2 - this.pinchState.contentPointX * newZoom
    const newOffsetY = currentCenter.y - this.boundary.clientHeight / 2 - this.pinchState.contentPointY * newZoom

    // Apply changes directly - no smoothing during active pinch for responsiveness
    this.state.zoom = newZoom
    this.state.movement.offsetX = newOffsetX
    this.state.movement.offsetY = newOffsetY

    this._updateTransform()
  }

  /**
   * Handles pointer up events to end dragging or pinching
   * @param {PointerEvent} event - The pointer event
   * @private
   */
  _handlePointerUp(event) {
    // Remove pointer from active tracking
    this.activePointers.delete(event.pointerId)

    // Handle state transitions based on remaining pointers
    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch()

      // If one pointer remains, potentially start dragging
      if (this.activePointers.size === 1) {
        const [ remainingPointerId ] = this.activePointers.keys()
        const remainingPointer = this.activePointers.get(remainingPointerId)
        if (remainingPointer) {
          this._beginDrag(
            remainingPointer.x,
            remainingPointer.y,
            remainingPointerId
          )
        }
      }
    } else if (this.state.isDragging) {
      this._endDrag(event.pointerId)
    }
  }

  /**
   * Handles pointer cancel events (system interruption)
   * @param {PointerEvent} event - The pointer event
   * @private
   */
  _handlePointerCancel(event) {
    // Remove pointer and clean up state
    this.activePointers.delete(event.pointerId)

    if (this.state.isPinching) {
      this._endPinch()
    }

    if (this.state.isDragging) {
      this._endDrag(event.pointerId)
    }
  }

  /**
   * Handles pointer leave events (when pointer exits the boundary)
   * @param {PointerEvent} event - The pointer event
   * @private
   */
  _handlePointerLeave(event) {
    // If this is our primary dragging pointer, end the drag
    if (this.state.isDragging && this.state.primaryPointerId === event.pointerId) {
      this._endDrag(event.pointerId)
    }

    // Remove from active tracking
    this.activePointers.delete(event.pointerId)

    // If we were pinching and lost a pointer, end pinch
    if (this.state.isPinching && this.activePointers.size < 2) {
      this._endPinch()
    }
  }

  /**
 * Handles window blur events (when window loses focus)
 * @private
 */
  _handleWindowBlur() {
    // End all active interactions when window loses focus
    if (this.state.isDragging) {
      this._endDrag(this.state.primaryPointerId)
    }

    if (this.state.isPinching) {
      this._endPinch()
    }

    // Clear all active pointers
    this.activePointers.clear()
  }

  /**
   * Handles wheel events for zooming functionality
   * @param {WheelEvent} event - The wheel event
   * @private
   */
  _handleWheel(event) {
    event.preventDefault()

    // Normalize wheel delta across different browsers and devices
    const delta = -event.deltaY / 1000
    const zoomFactor = 1 + delta

    // Calculate new zoom level within bounds
    const newZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, this.state.zoom * zoomFactor)
    )

    // Only proceed if zoom actually changed
    if (Math.abs(newZoom - this.state.zoom) < 0.001) return

    const boundaryRect = this.boundary.getBoundingClientRect()
    let x, y

    if (this.options.zoom.zoomTo === 'cursor') {
      x = event.clientX - boundaryRect.left
      y = event.clientY - boundaryRect.top
    } else {
      x = this.boundary.clientWidth / 2
      y = this.boundary.clientHeight / 2
    }

    // Calculate the point on the content under the zoom point
    const contentPointX = (x - this.boundary.clientWidth / 2 - this.state.movement.offsetX) / this.state.zoom
    const contentPointY = (y - this.boundary.clientHeight / 2 - this.state.movement.offsetY) / this.state.zoom

    // Calculate new position to keep content point under zoom point
    const newOffsetX = x - this.boundary.clientWidth / 2 - contentPointX * newZoom
    const newOffsetY = y - this.boundary.clientHeight / 2 - contentPointY * newZoom

    // Apply smoothing for wheel zoom
    const smoothingFactor = this.options.zoom.smoothing

    this.state.zoom += (newZoom - this.state.zoom) * smoothingFactor
    this.state.movement.offsetX += (newOffsetX - this.state.movement.offsetX) * smoothingFactor
    this.state.movement.offsetY += (newOffsetY - this.state.movement.offsetY) * smoothingFactor

    this._updateTransform()
  }

  // ===== PUBLIC API METHODS =====

  /**
   * Gets the current position of the target element
   * @returns {{x: number, y: number}} Current offset position
   */
  getPosition() {
    return {
      x: this.state.movement.offsetX,
      y: this.state.movement.offsetY,
    }
  }

  /**
   * Sets the position of the target element
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {boolean} [respectBoundaries=true] - Whether to apply boundary constraints
   */
  setPosition(x, y, respectBoundaries = true) {
    if (respectBoundaries && this.options.mode === 'bounded') {
      this._applyBoundaryConstraints(x, y)
      this.state.movement.offsetX = this.state.constraints.boundingX
      this.state.movement.offsetY = this.state.constraints.boundingY
    } else {
      this.state.movement.offsetX = x
      this.state.movement.offsetY = y
    }
    this._updateTransform()
  }

  /**
   * Gets the current zoom level
   * @returns {number} Current zoom level
   */
  getZoom() {
    return this.state.zoom
  }

  /**
   * Sets the zoom level
   * @param {number} zoom - Target zoom level
   * @param {boolean} [smooth=true] - Whether to apply smoothing
   */
  setZoom(zoom, smooth = true) {
    const constrainedZoom = Math.max(
      this.options.zoom.min,
      Math.min(this.options.zoom.max, zoom)
    )

    if (smooth) {
      const zoomDiff = constrainedZoom - this.state.zoom
      this.state.zoom += zoomDiff * this.options.zoom.smoothing
    } else {
      this.state.zoom = constrainedZoom
    }

    this._updateTransform()
  }

  /**
   * Resets position and zoom to initial values
   */
  reset() {
    this.state.movement.offsetX = 0
    this.state.movement.offsetY = 0
    this.state.zoom = this.options.zoom.initial
    this._updateTransform()
  }

  /**
   * Updates configuration options at runtime
   * @param {Partial<DrifterOptions>} newOptions - Options to update
   */
  updateOptions(newOptions) {
    this.options = {
      ...this.options,
      ...newOptions,
      zoom: {
        ...this.options.zoom,
        ...newOptions.zoom,
      },
    }

    // Apply zoom constraints if current zoom is outside new bounds
    if (
      this.state.zoom < this.options.zoom.min ||
      this.state.zoom > this.options.zoom.max
    ) {
      this.setZoom(
        Math.max(
          this.options.zoom.min,
          Math.min(this.options.zoom.max, this.state.zoom)
        )
      )
    }
  }

  /**
   * Checks if the drifter is currently being dragged
   * @returns {boolean} True if currently dragging
   */
  isDragging() {
    return this.state.isDragging
  }

  /**
   * Checks if the drifter is currently being pinched
   * @returns {boolean} True if currently pinching
   */
  isPinching() {
    return this.state.isPinching
  }

  /**
   * Gets the number of active pointers
   * @returns {number} Number of active pointers
   */
  getActivePointerCount() {
    return this.activePointers.size
  }

  /**
   * Removes all event listeners and cleans up the instance
   * Call this when you no longer need the drifter to prevent memory leaks
   */
  destroy() {
    // Stop inertia first
    this._stopInertia()

    // Cancel any pending animation frames
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }

    // Clean up pointer tracking
    this.activePointers.clear()
    this.pinchState = null

    // Remove event listeners
    this.boundary.removeEventListener('pointerdown', this._handlePointerDown)
    this.boundary.removeEventListener('pointermove', this._handlePointerMove)
    this.boundary.removeEventListener('pointerup', this._handlePointerUp)
    this.boundary.removeEventListener('pointercancel', this._handlePointerCancel)
    this.boundary.removeEventListener('pointerleave', this._handlePointerLeave)
    this.boundary.removeEventListener('wheel', this._handleWheel)
    globalThis.removeEventListener('blur', this._handleWindowBlur)
    globalThis.removeEventListener('visibilitychange', this._handleWindowBlur)

    // Reset styles we modified
    this.boundary.style.touchAction = ''
    this.boundary.style.userSelect = ''
  }
}