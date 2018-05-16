function iAmTheStartingFunction() {
  var a = 4;
  var result = theVerySecondFunction(a)
  console.trace('1111111111')
  return result
}

function theVerySecondFunction(a) {
  var entirelyDifferentVar = getMeANumber();
  return thisIsTheLastFunction(a, entirelyDifferentVar)
}

function getMeANumber() {
  console.trace('2222222222');
  return Math.ceil(Math.random() * 1000)
}

function thisIsTheLastFunction(arg1, arg2) {
  var notAnotherVar = `My buddy here ate ${arg1 - arg2} hot-dogs`;
  console.trace('333333333')
  return notAnotherVar
}

console.log(iAmTheStartingFunction())