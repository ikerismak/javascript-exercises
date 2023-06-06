const sumAll = function (init, end) {
  let first;
  let last;
  let sum = 0;

  if (
    isNaN(init) ||
    isNaN(end) ||
    init < 0 ||
    end < 0 ||
    typeof init === "string" ||
    typeof end === "string"
  ) {
    return "ERROR";
  } else {
    if (init > end) {
      first = end;
      last = init;
    } else {
      first = init;
      last = end;
    }

    for (let index = first; index <= last; index++) {
      sum += index;
    }

    return sum;
  }
};

console.log(sumAll(2, "90"));
// Do not edit below this line
module.exports = sumAll;
