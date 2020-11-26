import { createCounter } from "../src/counter";

let counter;

// Step 1
describe("옵션이 지정되지 않은 경우", () => {
  beforeEach(() => {
    counter = createCounter();
  });

  it("초기값은 0이다.", () => {
    expect(counter.val()).toBe(0);
  });

  it("inc() 함수는 값을 1증가시킨다.", () => {
    const previousValue = counter.val();
    counter.inc();
    expect(counter.val()).toBe(previousValue + 1);
  });

  it("dec() 함수는 값을 1감소시킨다.", () => {
    const previousValue = counter.val();
    counter.dec();
    expect(counter.val()).toBe(previousValue - 1);
  });

  it("isMax() 호출시 false를 반환한다.", () => {
    expect(counter.isMax()).toBe(false);
  });

  it("isMin() 호출시 false를 반환한다.", () => {
    expect(counter.isMin()).toBe(false);
  });
});

// Step 2
it("initValue 옵션 사용 시 초기값이 해당 값으로 지정된다.", () => {
  const value = 5;
  counter = createCounter({ value });
  expect(counter.val()).toBe(value);
});

describe("min 옵션 사용 시 현재값과 min 값이 동일하면", () => {
  beforeEach(() => {
    const value = 5;
    counter = createCounter({ value, min: value });
  });

  it("dec() 함수를 호출해도 값이 감소하지 않는다.", () => {
    const previousValue = counter.val();
    counter.dec();
    expect(counter.val()).toBe(previousValue);
  });

  it("isMin() 호출 시 true를 반환한다.", () => {
    expect(counter.isMin()).toBe(true);
  });
});

describe("max 옵션 사용 시 현재값과 max 값이 동일하면", () => {
  beforeEach(() => {
    const value = 5;
    counter = createCounter({ value, max: value });
  });

  it("inc() 함수를 호출해도 값이 증가하지 않는다.", () => {
    const previousValue = counter.val();
    counter.inc();
    expect(counter.val()).toBe(previousValue);
  });

  it("isMax() 호출 시 true를 반환한다.", () => {
    expect(counter.isMax()).toBe(true);
  });
});
