const reverseString = function(string) {
    tempArray = string.split('')
    reqString = ""
    for (i=tempArray.length-1;i>=0;i--) {
        reqString += tempArray.slice(i,i+1)
    }
    return reqString
};

// Do not edit below this line
module.exports = reverseString;
