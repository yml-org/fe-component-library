let debounceTimer;

export const debounce = (fn: () => void, delay = 500): () => void => {
  
  return (...args: []) => {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn.apply(context, args), delay);
  }
}