import { add, swap } from "../src/util";

describe("add()", () => {
  test("인자가 없으면 0을 반환한다.", () => {
    expect(add()).toBe(0);
  });

  test("인자가 하나이면, 인자 그대로 반환한다.", () => {
    let a = 5;
    expect(add(a)).toBe(a);
  });

  test("인자가 두 개이면 두 인자를 더한 결과를 반환한다", () => {
    let a = 5;
    let b = 2;
    expect(add(a, b)).toBe(a + b);
  });
});

describe("swap()", () => {
  test("배열의 인자가 두 개가 아닌 경우, 기존 배열을 그대로 반환한다.", () => {
    const arr = [1, 2, 3];
    expect(swap(arr)).toBe(arr);
  });

  test("배열 내의 두 요소의 순서를 바꾸어 새로운 배열을 반환한다.", () => {
    const arr = [1, 2];
    expect(swap(arr)).toEqual([arr[1], arr[0]]);
  });

  test("변경된 배열은 기존 배열과 다른 새로운 배열이다.", () => {
    const arr = [1, 2];
    expect(swap(arr)).not.toBe(arr);
  });
});
