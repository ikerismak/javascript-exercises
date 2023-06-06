const repeatString = function (string, times) {
  try {
    if (times < 0) {
      return "ERROR";
    }

    let stringRepeated = string.repeat(times);
    return stringRepeated;
  } catch (error) {
    return error;
  }
};

// Do not edit below this line
module.exports = repeatString;
