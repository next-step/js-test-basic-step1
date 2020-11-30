describe("toBe / toEqual", () => {
  it("원시 타입인 경우 toBe/toEqual 모두 값 비교를 한다", () => {
    expect(true).toBe(true);
    expect(true).toEqual(true);
    expect(1 + 2).toBe(3);
    expect(1 + 2).toEqual(3);
    expect("3").not.toBe(3);
    expect("3").not.toEqual(3);
  });

  describe("객체인 경우", () => {
    const artist1 = {
      name: {
        first: "Michael",
        last: "Jackson",
      },
      songs: ["Beat It", "Man in the Mirror"],
    };

    const artist2 = {
      name: {
        first: "Michael",
        last: "Jackson",
      },
      songs: ["Beat It", "Man in the Mirror"],
    };

    it("객체인 경우 toBe는 참조 비교를 한다.", () => {
      expect(artist1).toBe(artist1);
      expect(artist1).not.toBe(artist2);
    });

    it("객체인 경우 toEqual은 값 비교를 한다.", () => {
      expect(artist1).toEqual(artist2);
    });
  });
});

describe("Math.round()", () => {
  it("소숫점 이하 값이 0.5 이상이면 올림 값을 반환한다", () => {
    expect(Math.round(1.5)).toBe(2);
    expect(Math.round(1.6)).toBe(2);
    expect(Math.round(1.7)).toBe(2);
    expect(Math.round(1.8)).toBe(2);
    expect(Math.round(1.9)).toBe(2);
  });

  it("소숫점 이하 값이 0.5 미만이면 내림 값을 반환한다", () => {
    expect(Math.round(2.0)).toBe(2);
    expect(Math.round(2.1)).toBe(2);
    expect(Math.round(2.2)).toBe(2);
    expect(Math.round(2.3)).toBe(2);
    expect(Math.round(2.4)).toBe(2);
  });
});

describe("Array.prototype.slice()", () => {
  const nums = [1, 2, 3, 4, 5];

  it("인자가 없으면 전체 배열을 복사해서 그대로 반환한다.", () => {
    expect(nums.slice()).toEqual(nums);
  });

  it("인자가 하나이면, 주어진 인덱스부터 마지막 인덱스까지의 배열을 반환한다.", () => {
    let start = 2;
    expect(nums.slice(start)).toEqual(
      nums.filter((_, index) => start <= index)
    );
  });

  it("인자가 두 개이면, 인덱스가 첫 번째 인자와 두 번째 인자 사이에 해당하는 배열을 반환한다.", () => {
    let start = 2;
    let end = 4;

    expect(nums.slice(start, end)).toEqual(
      nums.filter((_, index) => start <= index && index < end)
    );
  });

  it("반환되는 배열은 기존 배열과 다른 새로운 배열이다.", () => {
    expect(nums.slice()).not.toBe(nums);
  });
});
