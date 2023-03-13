export const updateText = (el: Element, frameIndex: number) => {
    const scrollStart = Number(el.getAttribute('data-start'));
    const scrollEnd = Number(el.getAttribute('data-end'));
    const isActive = (scrollStart <= frameIndex && frameIndex <= scrollEnd);
    el.classList.toggle("active", isActive)
  }