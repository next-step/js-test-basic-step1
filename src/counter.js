export function createCounter(options) {
  const initValue = options?.initValue || 0;
  const min = typeof options?.min === "number" ? options.min : -Infinity;
  const max = typeof options?.max === "number" ? options.max : Infinity;

  return {
    _value: initValue,

    val() {
      return this._value;
    },

    inc() {
      if (this._value < max) {
        this._value++;
      }
    },

    dec() {
      if (this._value > min) {
        this._value--;
      }
    },

    isMax() {
      return false;
    },

    isMin() {
      return this._value === min;
    },
  };
}
