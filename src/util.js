export const add = (...args) =>
  args.reduce((accumulator, value) => accumulator + value, 0);

export const swap = (arr) => (arr?.length === 2 ? [arr[1], arr[0]] : arr);
