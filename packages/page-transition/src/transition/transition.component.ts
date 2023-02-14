import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import 'animate.css';
import {
  Direction,
  SwipeDirection,
  DivStyle,
  EventType,
  MousePosition,
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
  mousePosition: MousePosition;

  @state()
  offset = [0, 0];

  @state()
  slotWrapperDiv: HTMLElement;

  @state()
  hideSlotWrapperDiv: HTMLElement;

  @state()
  isDown = false;

  @state()
  isScrolled = false;

  @state()
  swipedDirection = '';

  @state()
  slotWrapperDivPosition: string;

  protected handleSlot = () => {
    this.slotWrapperDiv = this.renderRoot.querySelector(`#${this.slotName}`);

    this.animationDuration &&
      (this.slotWrapperDiv.style.animationDuration = `${this.animationDuration}s`);
    this.animationDelay &&
      (this.slotWrapperDiv.style.animationDelay = `${this.animationDelay}s`);

    this.slotWrapperDiv.style.position = DivStyle.Position;
    this.slotWrapperDiv.style.display = DivStyle.Display;
    this.slotWrapperDiv.style.overflow = DivStyle.Overflow;
    this.slotWrapperDiv.style.maxHeight = DivStyle.MaxHeight;
    this.slotWrapperDiv.style.maxWidth = DivStyle.MaxWidth;

    this.componentArray.map((item) => {
      if (item !== this.slotName) {
        this.hideSlotWrapperDiv = this.renderRoot.querySelector(`#${item}`);
        this.hideSlotWrapperDiv.style.display = 'none';
      }
    });

    this.slotWrapperDiv.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e, EventType.MouseEvent)
    );
    this.slotWrapperDiv.addEventListener('touchstart', (e) =>
      this.handleMouseDown(e, EventType.TouchEvent)
    );
  };

  protected handleMove = (event, axis: string, eventName: string) => {
    this.slotClass = '';
    const isAxis = axis === 'x';
    const isTouchEvent = eventName === EventType.TouchEvent;

    isAxis
      ? (this.mousePosition = {
          axis: isTouchEvent ? event.touches[0].clientX : event.clientX,
        })
      : (this.mousePosition = {
          axis: isTouchEvent ? event.touches[0].clientY : event.clientY,
        });

    //to check if the component within slotWrapperDiv is not scrolled and scrollTop & scrollLeft position is still 0
    const handleScrollTopOrLeft = () => {
      return isAxis
        ? this.slotWrapperDiv.scrollLeft === 0
        : this.slotWrapperDiv.scrollTop === 0;
    };

    //to check if the user has scrolled to the bottom or to the extreme right when slotWrapperDiv is scrollable
    const handleScrollBottomOrRight = () => {
      return (
        Math.trunc(
          isAxis
            ? this.slotWrapperDiv.scrollLeft
            : this.slotWrapperDiv.scrollTop
        ) ===
        Math.trunc(
          (isAxis
            ? this.slotWrapperDiv.scrollWidth
            : this.slotWrapperDiv.scrollHeight) -
            (isAxis
              ? this.slotWrapperDiv.offsetWidth
              : this.slotWrapperDiv.offsetHeight)
        )
      );
    };

    if (isTouchEvent) {
      this.slotWrapperDivPosition =
        this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] > 0
          ? handleScrollTopOrLeft()
            ? this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] + 'px'
            : '0px'
          : handleScrollBottomOrRight()
          ? this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] + 'px'
          : '0px';
    } else {
      this.slotWrapperDivPosition =
        this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] + 'px';
    }

    //move the position of the slotWrapperDiv based on the swipe direction
    isAxis
      ? (this.slotWrapperDiv.style.left = this.slotWrapperDivPosition)
      : (this.slotWrapperDiv.style.top = this.slotWrapperDivPosition);

    //to check if the user has swiped right|down or up|left
    if (
      this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] >
      (isAxis ? 20 : 50)
    ) {
      this.swipedDirection = isAxis
        ? SwipeDirection.SwipedRight
        : SwipeDirection.SwipedDown;
      this.isScrolled = isTouchEvent ? handleScrollTopOrLeft() : true;
    } else if (
      this.mousePosition.axis + this.offset[isAxis ? '0' : '1'] <
      (isAxis ? -20 : -50)
    ) {
      this.swipedDirection = isAxis
        ? SwipeDirection.SwipedLeft
        : SwipeDirection.SwipedUP;
      this.isScrolled = isTouchEvent ? handleScrollBottomOrRight() : true;
    } else {
      this.swipedDirection = SwipeDirection.None;
      this.isScrolled = false;
    }
  };

  protected handleMouseDown = (e, eventName: string) => {
    const isTouchEvent = eventName === EventType.TouchEvent;
    if (eventName === EventType.MouseEvent) {
      this.isDown = true;
    }
    this.offset = [
      this.slotWrapperDiv.offsetLeft -
        (isTouchEvent ? e.touches[0].clientX : e.clientX),
      this.slotWrapperDiv.offsetTop -
        (isTouchEvent ? e.touches[0].clientY : e.clientY),
    ];
  };

  protected handleDecrementIndex = () => {
    if (!this.disableSwipePrev) {
      if (this.index !== 0 || this.allowCircularSwipe) {
        this.slotClass = `animate__animated ${
          this.scrollDirection === Direction.HORIZONTAL
            ? 'animate__fadeInLeft'
            : 'animate__fadeInDown'
        }`;
      }
      if (this.index > 0) {
        this.index = this.index - 1;
        this.slotName = this.componentArray[this.index];
      } else {
        if (this.allowCircularSwipe) {
          this.index = this.componentArray.length - 1;
          this.slotName = this.componentArray[this.index];
        };
      }
    }
  };

  protected handleIncrementIndex = () => {
    if (!this.disableSwipeNext) {
      if (
        this.index !== this.componentArray.length - 1 ||
        this.allowCircularSwipe
      ) {
        this.slotClass = `animate__animated ${
          this.scrollDirection === Direction.HORIZONTAL
            ? 'animate__fadeInRight'
            : 'animate__fadeInUp'
        }`;
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
      ? (this.slotWrapperDiv.style.left = '0px')
      : (this.slotWrapperDiv.style.top = '0px');

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
      let axis = '';
      axis = this.scrollDirection === Direction.HORIZONTAL ? 'x' : 'y';
      e.preventDefault();
      if (this.isDown) {
        this.handleMove(e, axis, EventType.MouseEvent);
      }
    });

    document.addEventListener('touchmove', (e) => {
      let axis = '';
      axis = this.scrollDirection === Direction.HORIZONTAL ? 'x' : 'y';
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
