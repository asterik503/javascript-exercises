const leapYears = function(...args) {
    return args.filter(a => (a%4==0 && a%100 !=0) || (a%4 == 0 && (a%100==0 && a%400==0)))[0] > 0
};

// Do not edit below this line
module.exports = leapYears;
