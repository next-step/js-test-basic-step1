import { add, swap } from "../src/util";

describe("add()", () => {
  test("인자가 없으면 0을 반환한다.", () => {
    expect(add()).toBe(0);
    expect(add(1)).not.toBe(0);
  });

  test("인자가 하나이면, 인자 그대로 반환한다.", () => {
    expect(add(0)).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(0)).not.toBe(-1);
    expect(add(0)).not.toBe(1);
  });

  test("인자가 두 개이면 두 인자를 더한 결과를 반환한다", () => {
    expect(add(0, 1)).toBe(1);
    expect(add(1, 2)).toBe(3);
    expect(add(3, 0)).toBe(3);
  });
});

describe("swap()", () => {
  const arrayWithLength1 = [1];
  const arrayWithLength2 = [1, 2];
  const swappedArrayWithLength2 = [2, 1];
  const arrayWithLength3 = [1, 2, 3];

  test("배열의 인자가 두 개가 아닌 경우, 기존 배열을 그대로 반환한다.", () => {
    expect(swap(arrayWithLength1)).toBe(arrayWithLength1);
    expect(swap(arrayWithLength1)).toEqual(arrayWithLength1);
    expect(swap(arrayWithLength3)).toBe(arrayWithLength3);
    expect(swap(arrayWithLength3)).toEqual(arrayWithLength3);
    expect(swap(arrayWithLength2)).not.toBe(arrayWithLength2);
    expect(swap(arrayWithLength2)).not.toEqual(arrayWithLength2);
  });

  test("배열 내의 두 요소의 순서를 바꾸어 새로운 배열을 반환한다.", () => {
    expect(swap(arrayWithLength2)).toEqual(swappedArrayWithLength2);
  });

  test("변경된 배열은 기존 배열과 다른 새로운 배열이다.", () => {
    expect(swap(arrayWithLength2)).not.toBe(arrayWithLength2);
  });
});
