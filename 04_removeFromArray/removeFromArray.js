const removeFromArray = function () {
  let elementsToDelete = [];

  for (var i = 1; i < arguments.length; i++) {
    elementsToDelete.push(arguments[i]);
  }

  let mainArray = arguments[0];

  console.log(mainArray);
  console.log(elementsToDelete);

  let arrayWithOutElements = mainArray.filter(
    (element) => !elementsToDelete.includes(element)
  );

  return arrayWithOutElements;
};

// Do not edit below this line
module.exports = removeFromArray;
