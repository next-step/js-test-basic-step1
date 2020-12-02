import {
  add,
  shallowCompareArray,
  swap,
  getRandomPair,
  getRandomInt,
  getRandomIntNotValue
} from '../src/util';

describe('add()', () => {
  test('인자가 없으면 0을 반환한다.', () => {
    expect(add()).toEqual(0);
  });

  test('인자가 하나이면, 인자 그대로 반환한다.', () => {
    const arg = 1;
    expect(add(arg)).toEqual(arg);
  });

  test('인자가 두 개이면 두 인자를 더한 결과를 반환한다', () => {
    const [arg1, arg2] = [1, 2];
    expect(add(arg1, arg2)).toEqual(arg1 + arg2);
  });
});

describe('shallowCompareArray()', () => {
  test('빈 배열끼리 비교했을 경우 true를 반환한다', () => {
    expect(shallowCompareArray([], [])).toEqual(true);
  });

  test('같은 순서의 배열을 비교했을 경우 true를 반환한다', () => {
    expect(shallowCompareArray([1, 2], [1, 2])).toEqual(true);
  });

  test('다른 순서의 배열을 비교했을 경우 false를 반환한다', () => {
    expect(shallowCompareArray([2, 1], [1, 2])).toEqual(false);
  });

  test('참조 값이 있는 배열을 비교했을 경우 false를 반환한다', () => {
    expect(shallowCompareArray([1, [2]], [1, [2]])).toEqual(false);
  });
});

describe('swap()', () => {
  test('배열의 인자가 두 개가 아닌 경우, 기존 배열을 그대로 반환한다.', () => {
    const arr = [1];
    expect(swap(arr)).toEqual(arr);
  });

  test('배열 내의 두 요소의 순서를 바꾸어 새로운 배열을 반환한다.', () => {
    const arr1 = [1, 2];
    expect(swap(arr1)).toEqual([2, 1]);

    const arr2 = [1, 2, 3];
    const newArr = swap(arr2);

    // prettier-ignore
    expect(
      shallowCompareArray(newArr, [1, 3, 2]) ||
      shallowCompareArray(newArr, [2, 1, 3]) ||
      shallowCompareArray(newArr, [2, 3, 1]) ||
      shallowCompareArray(newArr, [3, 2, 1])
    ).toEqual(true);
  });

  test('변경된 배열은 기존 배열과 다른 새로운 배열이다.', () => {
    const arr = [1, 2];
    expect(swap(arr)).not.toBe(arr);
  });
});

describe('getRandomPair()', () => {
  test('임의의 배열 인덱스 쌍을 반환한다', () => {
    const arr = [1, 2, 3];
    const pair = getRandomPair(arr);

    // prettier-ignore
    expect(
      shallowCompareArray(pair, [0, 1]) ||
      shallowCompareArray(pair, [1, 0]) ||
      shallowCompareArray(pair, [1, 2]) ||
      shallowCompareArray(pair, [2, 1]) ||
      shallowCompareArray(pair, [0, 2]) ||
      shallowCompareArray(pair, [2, 0])
    ).toEqual(true);
  });
});

describe('getRandomInt()', () => {
  test('min 이상 max 이하의 값을 반환한다.', () => {
    expect(getRandomInt(0, 10)).toBeGreaterThanOrEqual(0);
    expect(getRandomInt(0, 10)).toBeLessThanOrEqual(10);
  });
});

describe('getRandomIntNotValue()', () => {
  test('min 이상 max 이하의 value를 제외한 값을 반환한다.', () => {
    expect(getRandomIntNotValue(0, 10, 5)).toBeGreaterThanOrEqual(0);
    expect(getRandomIntNotValue(0, 10, 5)).toBeLessThanOrEqual(10);
    expect(getRandomIntNotValue(0, 10, 5)).not.toEqual(5);
  });
});
