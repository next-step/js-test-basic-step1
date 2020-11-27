export function add(a = 0, b = 0) {
  return a + b;
}

export function swap(array) {

  if (array.length < 2) return array;
  const [a, b] = array;
  return [b, a];
}
