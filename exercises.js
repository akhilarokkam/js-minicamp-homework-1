//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var multipliedNum = num * 10;
  return multipliedNum;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var subtractedNum = num - 5;
  return subtractedNum;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if (str1.length === str2.length) {
    return true;
  } else
    return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if (x === y) {
    return true;
  } else
    return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  var compareNumber = num;
  if (compareNumber < 90) {
    return true;
  } else
    return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  var compareNumber = num;
  if (compareNumber > 50) {
    return true;
  } else
    return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var difference = x - y;
  return difference;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var divided = x / y;
  return divided;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var multiplied = x * y;
  return multiplied;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var reminder = x % y;
  return reminder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 === 0) {
    return true;
  } else
    return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (num % 2 === 1) {
    return true;
  } else
    return false;
}

function square(num) {
  //square num and return the new value
  //code here
  var squaredNumber = num * num;
  return squaredNumber;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cubedNumber = num * num * num;
  return cubedNumber;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var transformedNumber = Math.pow(num, exponent);
  return transformedNumber;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var transformedNumber = Math.round(num);
  return transformedNumber;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var transformedNumber = Math.ceil(num);
  return transformedNumber;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var message = str + '!';
  return message;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var message = firstName + ' ' + lastName;
  return message;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var givenName = name;
  var greeting = 'Hello';
  var message = greeting + ' ' + givenName + '!';

  return message;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangleArea = 0.5 * base * height;
  return triangleArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circleArea = Math.PI * radius * radius;
  var roundedArea = Math.round(circleArea);
  return roundedArea;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
  var rectanglePrismVolume = length * width * height;
  return rectanglePrismVolume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
