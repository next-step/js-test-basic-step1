export function createCounter({min, max, value} = {}) {
  let value = initObject.value ?? 0;
  const min = Number.isFinite(initObject.min) ? initObject.min : -Infinity;
  const max = Number.isFinite(initObject.max) ? initObject.max : Infinity;

  return {
    val() {
      return value;
    },
    inc() {
      !this.isMax() && value++;
    },
    dec() {
      !this.isMin() && value--;
    },
    isMax() {
      return value === max;
    },
    isMin() {
      return value === min;
    },
  };
}
