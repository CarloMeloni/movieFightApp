//PER RITARDARE LA RICERCA E NON FARE RICERCHE AD OGNI INPUT
const debounce = (funzione, delay = 1000) => {
    let timeoutId;
    return (...arguments) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        funzione.apply(null, arguments);
      }, delay);
    };
  };