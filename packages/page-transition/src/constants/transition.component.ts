export enum Direction {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
  }
  
  export enum SwipeDirection {
    SwipedUP = 'swiped-up',
    SwipedDown = 'swiped-down',
    SwipedLeft = 'swiped-left',
    SwipedRight = 'swiped-right',
    None = 'none',
  }

  export enum DivStyle {
    Position = 'relative',
    Display = 'block',
    Overflow = 'scroll',
    MaxHeight = '100vh',
    MaxWidth = '100vw',
  }

  export enum EventType {
    MouseEvent = 'mouse' ,
    TouchEvent = 'touch'
  }

  export interface MousePosition {
    axis : number,
  }
  

  