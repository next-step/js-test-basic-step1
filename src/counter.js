export function createCounter(initObject = {}) {
  let value = initObject.value ?? 0;
  const { min, max } = initObject;

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
      return !!max && value <= max;
    },
    isMin() {
      return !!min && value <= min;
    },
  };
}
