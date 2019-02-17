import { add } from './add';
export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
};

const reduce = (a, b) => a - b;
