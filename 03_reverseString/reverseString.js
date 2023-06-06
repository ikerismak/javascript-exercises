const reverseString = function (string) {
  let stringToReverse = string.split("");

  let reversedArray = stringToReverse.reverse();

  let reversedString = reversedArray.join("");

  return reversedString;
};



// Do not edit below this line
module.exports = reverseString;
