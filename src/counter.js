export function createCounter({ initValue = 0, min , max } = {}) {

  return Object.freeze({
    val() {
      return initValue;
    },
    inc() {
      const newValue = initValue + (max ? (initValue < max) * 1 : 1);
      return createCounter({ initValue: newValue, min, max });
    },
    dec() {
      const newValue = initValue - (min ? (initValue > min) * 1 : 1)
      return createCounter({ initValue: newValue, min, max });
    },
    isMax() {
      return initValue === max;
    },
    isMin() {
      return initValue === min;
    },
  });
}
