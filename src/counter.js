export function createCounter() {
  let count = 0;
  return {
    val() {
      return count;
    },
    inc() {
      count++;
    },
    dec() {
      count--;
    },
    isMax() {
      return false;
    },
    isMin() {
      return false;
    }
  };
}
