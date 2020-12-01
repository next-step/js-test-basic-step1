export function createCounter({
  initVal = 0,
  min = -Infinity,
  max = Infinity
} = {}) {
  let count = initVal;
  return {
    val() {
      return count;
    },
    inc() {
      max > count && count++;
    },
    dec() {
      min < count && count--;
    },
    isMax() {
      return count === max;
    },
    isMin() {
      return count === min;
    }
  };
}
