const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1)); 
console.log(calculateAverage(1, 2, 3, 4, 5)); 
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); 