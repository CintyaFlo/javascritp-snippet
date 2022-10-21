const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const stats2 = {
  max: 156.78,
  standard_deviation: 14.34,
  median: 134.54,
  mode: 123.87,
  min: -10.75,
  average: 315.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

const max = (a, b) => a.max + b.max;

max(stats.max, stats2.max);

const maxDestructed = ({ max: Max1 }, { max: Max2 }) => Max1 + Max2;

console.log(maxDestructed(stats, stats2));
