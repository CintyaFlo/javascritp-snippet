const stats = {
  aqui: {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
  },
  ali: {
    max: 22,
    min: 5,
    media: 2,
  },
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2;
// Only change code above this line

console.log(half(stats.aqui));

const half2 = ({
  aqui: { min: min1, max: max1 },
  ali: { min: min2, max: max2 },
}) => {
  let media1 = (min1 + max1) / 2;
  let media2 = (min2 + max2) / 2;
  return [media1, media2];
};

console.log(half2(stats));

const half3 = ({ aqui, ali }) => {
  const { min: min1, max: max1 } = aqui;
  const { min: min2, max: max2 } = ali;
  let media1 = (min1 + max1) / 2;
  let media2 = (min2 + max2) / 2;
  return [media1, media2];
};

console.log(half3(stats));
