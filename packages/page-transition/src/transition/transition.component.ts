import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import 'animate.css';
import {
  Direction,
  SwipeDirection,
  DivStyle,
  EventType,
  MousePosition
} from './../constants/transition.component';
import Style from './transition.component.scss?inline';

@customElement('transition-component')
export class TransitionComponent extends TailwindElement(Style) {
  @property()
  componentArray?: Array<string> = ['slot1', 'slot2', 'slot3'];

  @property()
  disableSwipeNext?: boolean;

  @property()
  disableSwipePrev?: boolean;

  @property()
  animationDuration?: number;

  @property()
  animationDelay?: number;

  @property()
  allowCircularSwipe?: boolean = false;

  @property()
  callbackEvent?: string = null;

  @property()
  scrollDirection?: Direction = Direction.VERTICAL;

  @property()
  backgroundColor?: string = '#ffffff';

  @state()
  slotName: string;

  @state()
  index = 0;

  @state()
  slotClass = '';

  @state()
  mousePosition : MousePosition;

  @state()
  offset = [0, 0];

  @state()
  div : HTMLElement;

  @state()
  hiddenDiv : HTMLElement;

  @state()
  isDown = false;

  @state()
  isScrolled = false;

  @state()
  swipedDirection = '';

  @state()
  divPointer : string;

  protected handleSlot = () => {
    this.div = this.renderRoot.querySelector(`#${this.slotName}`);

    this.animationDuration &&
      (this.div.style.animationDuration = `${this.animationDuration}s`);
    this.animationDelay &&
      (this.div.style.animationDelay = `${this.animationDelay}s`);

    this.div.style.position = DivStyle.Position;
    this.div.style.display = DivStyle.Display;
    this.div.style.overflow = DivStyle.Overflow;
    this.div.style.maxHeight = DivStyle.MaxHeight;
    this.div.style.maxWidth = DivStyle.MaxWidth;

    this.componentArray.map((item) => {
      if (item !== this.slotName) {
        this.hiddenDiv = this.renderRoot.querySelector(`#${item}`);
        this.hiddenDiv.style.display = 'none';
      }
    });

    this.div.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e, EventType.MouseEvent)
    );
    this.div.addEventListener('touchstart', (e) =>
      this.handleMouseDown(e, EventType.TouchEvent)
    );
  };

  protected handleMove = (event, axis: string, eventName: string) => {
    this.slotClass = '';

    axis === 'x'
      ? (this.mousePosition = {
          axis:
            eventName === EventType.TouchEvent
              ? event.touches[0].clientX
              : event.clientX,
        })
      : (this.mousePosition = {
          axis:
            eventName === EventType.TouchEvent
              ? event.touches[0].clientY
              : event.clientY,
        });

    if (eventName === EventType.TouchEvent) {
      this.divPointer =
        this.mousePosition.axis + this.offset[axis === 'x' ? '0' : '1'] > 0
          ? (
              axis === 'x'
                ? this.div.scrollLeft === 0
                : this.div.scrollTop === 0
            )
            ? this.mousePosition.axis +
              this.offset[axis === 'x' ? '0' : '1'] +
              'px'
            : '0px'
          : Math.trunc(
              axis === 'x' ? this.div.scrollLeft : this.div.scrollTop
            ) ===
            Math.trunc(
              (axis === 'x' ? this.div.scrollWidth : this.div.scrollHeight) -
                (axis === 'x' ? this.div.offsetWidth : this.div.offsetHeight)
            )
          ? this.mousePosition.axis +
            this.offset[axis === 'x' ? '0' : '1'] +
            'px'
          : '0px';
      axis === 'x'
        ? (this.div.style.left = this.divPointer)
        : (this.div.style.top = this.divPointer);
    } else {
      this.divPointer =
        this.mousePosition.axis + this.offset[axis === 'x' ? '0' : '1'] + 'px';
      axis === 'x'
        ? (this.div.style.left = this.divPointer)
        : (this.div.style.top = this.divPointer);
    }

    if (
      this.mousePosition.axis + this.offset[axis === 'x' ? '0' : '1'] >
      (axis === 'x' ? 20 : 50)
    ) {
      if (eventName === 'touch') {
        this.swipedDirection =
          axis === 'x' ? SwipeDirection.SwipedRight : SwipeDirection.SwipedDown;

        if (
          axis === 'x' ? this.div.scrollLeft === 0 : this.div.scrollTop === 0
        ) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      } else {
        this.swipedDirection =
          axis === 'x' ? SwipeDirection.SwipedRight : SwipeDirection.SwipedDown;
        this.isScrolled = true;
      }
    } else if (
      this.mousePosition.axis + this.offset[axis === 'x' ? '0' : '1'] <
      (axis === 'x' ? -20 : -50)
    ) {
      if (eventName === EventType.TouchEvent) {
        this.swipedDirection =
          axis === 'x' ? SwipeDirection.SwipedLeft : SwipeDirection.SwipedUP;
        Math.trunc(axis === 'x' ? this.div.scrollLeft : this.div.scrollTop) ===
        Math.trunc(
          axis === 'x'
            ? this.div.scrollWidth - this.div.offsetWidth
            : this.div.scrollHeight - this.div.offsetHeight
        )
          ? (this.isScrolled = true)
          : (this.isScrolled = false);
      } else {
        this.swipedDirection =
          axis === 'x' ? SwipeDirection.SwipedLeft : SwipeDirection.SwipedUP;
        this.isScrolled = true;
      }
    } else {
      this.swipedDirection = SwipeDirection.None;
      this.isScrolled = false;
    }
  };

  protected handleMouseDown = (e, eventName: string) => {
    if (eventName !== EventType.TouchEvent) {
      this.isDown = true;
    }
    this.offset = [
      this.div.offsetLeft -
        (eventName === EventType.TouchEvent ? e.touches[0].clientX : e.clientX),
      this.div.offsetTop -
        (eventName === EventType.TouchEvent ? e.touches[0].clientY : e.clientY),
    ];
  };

  protected handleDecrementIndex = () => {
    if (!this.disableSwipePrev) {
      if (this.index !== 0 || this.allowCircularSwipe) {
        this.scrollDirection === Direction.HORIZONTAL
          ? (this.slotClass = 'animate__animated animate__fadeInLeft')
          : (this.slotClass = 'animate__animated animate__fadeInDown');
      }
      if (this.index > 0) {
        this.index = this.index - 1;
        this.slotName = this.componentArray[this.index];
      } else {
        if (this.allowCircularSwipe) {
          this.index = this.componentArray.length - 1;
          this.slotName = this.componentArray[this.index];
        } else return;
      }
    }
  };

  protected handleIncrementIndex = () => {
    if (!this.disableSwipeNext) {
      if (
        this.index !== this.componentArray.length - 1 ||
        this.allowCircularSwipe
      ) {
        this.scrollDirection === Direction.HORIZONTAL
          ? (this.slotClass = 'animate__animated animate__fadeInRight')
          : (this.slotClass = 'animate__animated animate__fadeInUp');
      }
      if (this.index < this.componentArray.length - 1) {
        this.index = this.index + 1;
        this.slotName = this.componentArray[this.index];
      } else {
        if (this.allowCircularSwipe) {
          this.index = 0;
          this.slotName = this.componentArray[this.index];
        }
      }
    }
  };

  protected handleUp = () => {
    this.isDown = false;
    this.scrollDirection === Direction.HORIZONTAL
      ? (this.div.style.left = '0px')
      : (this.div.style.top = '0px');

    if (this.isScrolled) {
      if (
        this.swipedDirection === SwipeDirection.SwipedUP ||
        this.swipedDirection === SwipeDirection.SwipedLeft
      ) {
        this.handleIncrementIndex();
        if (this.callbackEvent) {
          this.dispatchEvent(new CustomEvent(this.callbackEvent));
        }
      } else {
        this.handleDecrementIndex();
      }
      this.handleSlot();
    }
    this.isScrolled = false;
  };

  firstUpdated() {
    this.slotName = this.componentArray[0];
    this.handleSlot();
    document.addEventListener('touchend', this.handleUp);
    document.addEventListener('mouseup', this.handleUp);
    document.addEventListener('mousemove', (e) => {
      let axis : string;
      this.scrollDirection === Direction.HORIZONTAL
        ? (axis = 'x')
        : (axis = 'y');
      e.preventDefault();
      if (this.isDown) {
        this.handleMove(e, axis, EventType.MouseEvent);
      }
    });

    document.addEventListener('touchmove', (e) => {
      let axis: string;
      this.scrollDirection === Direction.HORIZONTAL
        ? (axis = 'x')
        : (axis = 'y');
      this.handleMove(e, axis, EventType.TouchEvent);
    });
  }

  render() {
    return html`
      <div
        part="flick-to-transition-container"
        style="overflow : hidden ; background : ${this.backgroundColor}"
      >
        ${this.componentArray.map(
          (components) => html` <div
            part="flick-to-transition-${components}"
            id=${components}
            class=${this.slotClass}
          >
            <slot id=${components} name=${components}></slot>
          </div>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'transition-component': TransitionComponent;
  }
}
