export function add(a = 0, b = 0) {
  return a + b;
}

export function shallowCompareArray(arrA, arrB) {
  return arrA.every((x, i) => x === arrB[i]);
}

export function swap(arr) {
  const [firstIdx, secondIdx] = getRandomPair(arr);
  const newArr = [...arr];
  [newArr[firstIdx], newArr[secondIdx]] = [newArr[secondIdx], newArr[firstIdx]];

  return newArr;
}

export function getRandomPair(arr) {
  if (arr.length < 2) {
    return [0, 0];
  }

  const first = getRandomInt(0, arr.length - 1);
  const second = getRandomIntNotValue(0, arr.length - 1, first);

  return [first, second];
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomIntNotValue(min, max, value) {
  const randomInt = getRandomInt(min, max);
  return randomInt === value
    ? getRandomIntNotValue(min, max, value)
    : randomInt;
}
