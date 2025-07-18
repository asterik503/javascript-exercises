const add = function(...args) {
  return args.reduce((a,b) => a+b,0)
};

const subtract = function(...args) {
  return args[0] - args[1]
};

const sum = function(arr) {
  return arr.reduce((a,b) => a+b,0)
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b,1)
};

const power = function(...args) {
  return Math.pow(args[0],args[1])
};

const factorial = function(number) {
  if (number<=1){
    return 1
  }
  else {
    return number * factorial(number-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
