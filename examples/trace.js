function iAmTheStartingFunction() {
  var a = 4;
  var result = theVerySecondFunction(4);
  console.trace('iAmTheStartingFunction');
  return result;
}

function theVerySecondFunction(a) {
  var entirelyDifferentVariable = getMeANumber();
  return thisIsTheLastFunctionOnStack(a, entirelyDifferentVariable);
}

function getMeANumber() {
  console.trace('getMeANumber');
  return Math.ceil(Math.random() * 100);
}

function thisIsTheLastFunctionOnStack(arg1, arg2) {
  var notAnotherVariable = `My buddy here ate ${arg1 + arg2} hot-dogs`;
  console.trace('thisIsTheLastFunctionOnStack');
  return notAnotherVariable;
}

console.log(iAmTheStartingFunction());
