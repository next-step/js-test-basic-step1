export function createCounter() {
  return {
    _value: 0,

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
