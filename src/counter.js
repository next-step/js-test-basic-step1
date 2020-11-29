export function createCounter(options) {
  const initValue = options?.initValue || 0;

  return {
    _value: initValue,

    val() {
      return this._value;
    },

    inc() {
      this._value++;
    },

    dec() {
      this._value--;
    },

    isMax() {
      return false;
    },

    isMin() {
      return false;
    },
  };
}
