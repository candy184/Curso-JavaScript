const sum = (x, y) => x + y;
const square = x => x * x;

export function mean(data) {
  return data.reduce(sum) / data.length;
}

export function stddev(data) {
  const m = mean(data);
  return Math.sqrt(data.map(x => x - m).map(square).reduce(sum) / (data.length - 1));
}
