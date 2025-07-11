const repeatString = function(string, number) {
    repeatedS = ""
    if (number < 0) {
        return "ERROR"
    }
    for (i=0;i<number;i++){
        repeatedS += string
    }
    return repeatedS
};

// Do not edit below this line
module.exports = repeatString;
