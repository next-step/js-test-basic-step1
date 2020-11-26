export function createCounter({ initValue, min, max } = {}) {
  let val = initValue || 0;

  return {
    val() {
      return val;
    },
    inc() {
      return createCounter({ initValue: val + 1 });
    },
    dec() {
      return createCounter({ initValue: val - 1 });
    },
    isMax() {
      return val === max;
    },
    isMin() {
      return val === min;
    },
  };
}
