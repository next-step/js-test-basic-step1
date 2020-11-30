export function createCounter(options = {}) {
  const min = options.min ?? -Infinity;
  const max = options.max ?? Infinity;
  let value = options.initValue ?? 0;

  return {
    val() {
      return value;
    },

    inc() {
      if (value < max) value++;
    },

    dec() {
      if (value > min) value--;
    },

    isMax() {
      return value === max;
    },

    isMin() {
      return value === min;
    },
  };
}
