const numberIsBig = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));