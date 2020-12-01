import { createCounter } from '../src/counter';

// Step 1
describe('옵션이 지정되지 않은 경우', () => {
  let counter = null;

  beforeEach(() => {
    counter = createCounter();
  });

  afterEach(() => {
    counter = null;
  });

  it('초기값은 0이다.', () => {
    expect(counter.val()).toEqual(0);
  });

  it('inc() 함수는 값을 1증가시킨다.', () => {
    counter.inc();
    expect(counter.val()).toEqual(1);
  });

  it('dec() 함수는 값을 1감소시킨다.', () => {
    counter.dec();
    expect(counter.val()).toEqual(-1);
  });

  it('isMax() 호출시 false를 반환한다.', () => {
    expect(counter.isMax()).toEqual(false);
  });

  it('isMin() 호출시 false를 반환한다.', () => {
    expect(counter.isMin()).toEqual(false);
  });
});

// Step 2
it('initValue 옵션 사용 시 초기값이 해당 값으로 지정된다.', () => {
  const initVal = 10;
  const counter = createCounter({ initVal });
  expect(counter.val()).toEqual(initVal);
});

describe('min 옵션 사용 시 현재값과 min 값이 동일하면', () => {
  let min;
  let counter = null;

  beforeEach(() => {
    min = -1;
    counter = createCounter({ min });
  });

  afterEach(() => {
    min = undefined;
    counter = null;
  });

  it('dec() 함수를 호출해도 값이 감소하지 않는다.', () => {
    counter.dec();
    expect(counter.val()).toEqual(min);
    counter.dec();
    expect(counter.val()).toEqual(min);
  });

  it('isMin() 호출 시 true를 반환한다.', () => {
    counter.dec();
    expect(counter.isMin()).toEqual(true);
  });
});

describe('max 옵션 사용 시 현재값과 max 값이 동일하면', () => {
  let max;
  let counter = null;

  beforeEach(() => {
    max = 1;
    counter = createCounter({ max });
  });

  afterEach(() => {
    max = undefined;
    counter = null;
  });

  it('inc() 함수를 호출해도 값이 증가하지 않는다.', () => {
    counter.inc();
    expect(counter.val()).toEqual(max);
    counter.inc();
    expect(counter.val()).toEqual(max);
  });

  it('isMax() 호출 시 true를 반환한다.', () => {
    counter.inc();
    expect(counter.isMax()).toEqual(true);
  });
});
