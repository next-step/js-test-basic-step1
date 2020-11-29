export function add(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }
  if (b === undefined) {
    return a;
  }

  return a + b;
}

export function swap(array) {
  if (array.length !== 2) {
    return array;
  }
  return [array[1], array[0]];
}
