const removeFromArray = function(array,...numbers) { 
    return array.filter(a => !numbers.includes(a))
};

// Do not edit below this line
module.exports = removeFromArray;
