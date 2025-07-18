const palindromes = function (str) {
    let formatted = str.split("").filter((a) => (a.toLowerCase() != a.toUpperCase()) || Number.isInteger(parseInt(a))).map((a) => a.toLowerCase())
    reversed = formatted.slice().reverse()
    return formatted.join("") === reversed.join("")
};

// Do not edit below this line
module.exports = palindromes;
