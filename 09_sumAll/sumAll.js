const sumAll = function(...args) {
    sum = 0
    args.sort((a,b) => a-b)
    if (Number.isInteger(args[0]) && Number.isInteger(args[1]) && args[0] > 0 && args[1] > 0){
        for (i=args[0];i<=args[1];i++){
            sum += i
        }
        return sum
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
