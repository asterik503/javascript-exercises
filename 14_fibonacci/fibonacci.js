const fibonacci = function(index) {
    if (index < 0){
        return "OOPS"
    }
    first_number = 0
    second_number = 1
    third_number = 0
    check = parseInt(index) 
    a = function(check){
        while (check > 0){
            third_number = first_number + second_number
            first_number = second_number
            second_number = third_number
            check--
        }
        return first_number
    }
    return a(index)

};

// Do not edit below this line
module.exports = fibonacci;
