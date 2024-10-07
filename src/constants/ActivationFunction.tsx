export const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export const relu = (x: number) => Math.max(0, x);

export const tanh = (x: number) => Math.tanh(x);

export const step = (x: number) => (x > 0 ? 1 : 0);
