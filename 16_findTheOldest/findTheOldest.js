const findTheOldest = function(people) {
    let currenttime = new Date()
    return people
        .map(function(element) {
        if (element.yearOfDeath == undefined){
            element.yearOfDeath = currenttime.getFullYear()
        }
        return element
    })
    .sort((a,b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
