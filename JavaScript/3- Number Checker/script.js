const isPositive = (number) => number > 0;
const isNegative = (number) => number < 0;
const isZero = (number) => number === 0;
const isEven = (number) => number % 2 === 0;

const describeNumber = (number) => {
  return {
    positive: isPositive(number),
    negative: isNegative(number),
    zero: isZero(number),
    even: isEven(number),
    odd: !isEven(number),
  };
};

console.log(describeNumber(-6));
