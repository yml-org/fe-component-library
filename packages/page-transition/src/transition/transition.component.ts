import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import 'animate.css'
import { ComponentObj, Direction, SwipeDirection } from './../constants/transition.component';
import Style from './transition.component.scss?inline';

@customElement('transition-component')
export class TransitionComponent extends TailwindElement(Style) {

  @property()
  componentArray?: Array<ComponentObj>=[
    {
      components: 'slot1',
    },
    {
      components: 'slot2',
    },
    {
      components: 'slot3',
    },
  ];

  @property()
  disableSwipeNext?:boolean;

  @property()
  disableSwipePrev?:boolean;

  @property()
  animationDuration?:number;

  @property()
  animationDelay?:number;

  @property()
  allowCircularSwipe?: boolean= false;

  @property()
  callbackEvent?:string = null;
 
  @property()
  scrollDirection?:Direction = Direction.VERTICAL;

  @property()
  backgroundColor?:string = '#ECECEC';

  @state()
  slotName:string;

  @state() 
  index=0;

  @state()
  slotClass ='';

  @state()
  mousePosition;

  @state()
  offset = [0, 0];

  @state()
  div;

  @state()
  hiddenDiv;

  @state()
  isDown = false;

  @state()
  isScrolled = false;

  @state()
  swipedHorizontal = '';

  @state()
  swipedVertical = '';

  @property()
  divClass;

  protected  handleSlot = () => {
    this.div = this.renderRoot.querySelector(`#${this.slotName}`);

    this.animationDuration && (this.div.style.webkitAnimationDuration = `${this.animationDuration}s`)
    this.animationDelay && (this.div.style.animationDelay = `${this.animationDelay}s`)
    
    this.div.style.position = 'relative';
    this.div.style.display = 'block';
    
    this.componentArray.map((item) => {
      if (item.components !== this.slotName) {
        this.hiddenDiv = this.renderRoot.querySelector(`#${item.components}`);   
         this.hiddenDiv.style.display = 'none';
      }
    });

    this.div.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.div.addEventListener('touchstart', (e) => this.handleTouchDown(e));
  };

  protected handleTouchMove = (event, axis, eventName) => {
    this.slotClass = '';

    (axis=== 'x')?  (
      this.mousePosition = {
        axis: (eventName === 'touch') ?event.touches[0].clientX :event.clientX ,
      }) : (
        this.mousePosition = {
          axis: (eventName === 'touch') ?event.touches[0].clientY :event.clientY,
        });

        (axis=== 'x')
        ? 
        (this.div.style.left = (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1']) + 'px')
        :
        (this.div.style.top = (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1'])+ 'px')
  
    if (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1'] > 50) {
      (axis=== 'x')? (this.swipedHorizontal = SwipeDirection.SwipedRight):
      (this.swipedVertical = SwipeDirection.SwipedDown)
      this.isScrolled = true;
    } else if (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1'] < -50) {
      (axis=== 'x')? (this.swipedHorizontal = SwipeDirection.SwipedLeft):
      (this.swipedVertical = SwipeDirection.SwipedUP)
      this.isScrolled = true;
    } else {
      this.swipedHorizontal = SwipeDirection.None;
      this.isScrolled = false;
    }

  };

  protected handleMouseDown = (e) => {
    this.isDown = true;
    this.offset = [
      this.div.offsetLeft - e.clientX,
      this.div.offsetTop - e.clientY,
    ];
  };

  protected handleTouchDown = (e) => {
    this.offset = [
      this.div.offsetLeft - e.touches[0].clientX,
      this.div.offsetTop - e.touches[0].clientY,
    ];
  };

  protected handleDecrementIndex = () => {
    if(!this.disableSwipePrev){
    if(this.index !== 0){  
      this.scrollDirection === Direction.HORIZONTAL ?
       (this.slotClass = 'animate__animated animate__fadeInLeft'):
       (this.slotClass = 'animate__animated animate__fadeInDown')
    }
      if(this.index > 0) {
      this.index = this.index - 1;
      this.slotName = this.componentArray[this.index].components;
    } else {
      if(this.allowCircularSwipe){
      this.index = this.componentArray.length - 1;
      this.slotName = this.componentArray[this.index].components;
       }else return }
    this.handleSlot();
      }
  };

  protected handleIncrementIndex = () => {
    if(!this.disableSwipeNext){
    if(this.index !== this.componentArray.length -1){  
     
      this.scrollDirection === Direction.HORIZONTAL ? 
      (this.slotClass = 'animate__animated animate__fadeInRight'):
      (this.slotClass = 'animate__animated animate__fadeInUp')
  }
    if (this.index < this.componentArray.length - 1) {
      this.index = this.index + 1;
      this.slotName = this.componentArray[this.index].components;     
    } else {
      if(this.allowCircularSwipe){
      this.index = 0;
      this.slotName = this.componentArray[this.index].components;
      }}
    this.handleSlot();
    }
  };

  protected handleMouseUp = () => {
    this.isDown = false;

    this.scrollDirection === Direction.VERTICAL && (this.div.style.top = '0px')
    this.scrollDirection === Direction.HORIZONTAL && (this.div.style.left = '0px')
    
    if (
      (this.swipedVertical === SwipeDirection.SwipedUP ||
        this.swipedHorizontal === SwipeDirection.SwipedLeft) &&
      this.isScrolled
    ) {
      this.handleIncrementIndex();
      if(this.callbackEvent){
        this.dispatchEvent(new CustomEvent(this.callbackEvent)) 
      }
    }
    if (
      (this.swipedVertical === SwipeDirection.SwipedDown ||
        this.swipedHorizontal === SwipeDirection.SwipedRight) &&
      this.isScrolled
    ) {
      this.handleDecrementIndex();
    }
    this.isScrolled = false;
  };

  protected handleMouseMove = (event, axis, eventName) => {
    event.preventDefault();
    if (this.isDown) {
      this.slotClass = '';
      
    (axis=== 'x')?  (
        this.mousePosition = {
          axis: event.clientX,
        }) : (
          this.mousePosition = {
            axis: event.clientY,
          });

          (axis=== 'x')
          ? 
          (this.div.style.left = (this.mousePosition.axis + this.offset[0]) + 'px')
          :
          (this.div.style.top = (this.mousePosition.axis + this.offset[1])+ 'px')
    
      
        if (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1'] > 50) {
          (axis=== 'x')? (this.swipedHorizontal = SwipeDirection.SwipedRight):
          (this.swipedVertical = SwipeDirection.SwipedDown)
          this.isScrolled = true;
        } else if (this.mousePosition.axis + this.offset[(axis === 'x')? '0': '1'] < -50) {
          (axis=== 'x')? (this.swipedHorizontal = SwipeDirection.SwipedLeft):
          (this.swipedVertical = SwipeDirection.SwipedUP)
          this.isScrolled = true;
        } else {
          this.swipedHorizontal = SwipeDirection.None;
          this.isScrolled = false;
        }
    }
    }


  firstUpdated() {
    console.log(this.backgroundColor)
    this.backgroundColor= `overflow-hidden bg-[${this.backgroundColor}]`
    this.slotName= this.componentArray[0].components;
    this.handleSlot();
    document.addEventListener('touchend', this.handleMouseUp);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', (e) => {
      let axis;
      (this.scrollDirection === Direction.HORIZONTAL)? (axis='x'):(axis='y')
      e.preventDefault();
      if(this.isDown){
      this.handleTouchMove(e, axis, 'mouse');
      }
    });

    document.addEventListener('touchmove',  (e) => {
      let axis;
      (this.scrollDirection === Direction.HORIZONTAL)? (axis='x'):(axis='y')
        this.handleTouchMove(e, axis, 'touch');
    });   
  }

  render() {
    return html`
      <div  class="${this.backgroundColor}">
        ${this.componentArray.map(
          ({components}) => html`
            <div id=${components} class=${this.slotClass} >
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