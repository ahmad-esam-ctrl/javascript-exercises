const convertToCelsius = function (degree) {
  let convertedDegree = (degree - 32) * 5 / 9;
  if (convertedDegree % 1 != 0) {
    let result = convertedDegree.toFixed(1)
    return Number(result);
  };
  return Number(convertedDegree);
};

const convertToFahrenheit = function (degree) {
  let convertedDegree = (degree * 9 / 5) + 32;
  if (convertedDegree % 1 != 0) {
    let result = convertedDegree.toFixed(1)
    return Number(result);
  };
  return Number(convertedDegree);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
