export function createCounter({ initVal = 0, min, max } = {}) {
  let count = initVal;
  return {
    val() {
      return count;
    },
    inc() {
      if (!max || count < max) {
        count++;
      }
    },
    dec() {
      if (!min || count > min) {
        count--;
      }
    },
    isMax() {
      return count === max;
    },
    isMin() {
      return count === min;
    }
  };
}
