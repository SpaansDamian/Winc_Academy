// A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]

const findSpiderMan = function (superheroes) {
    return superheroes.find(sh => sh.name == "Spiderman");
}

console.log(findSpiderMan(superheroes));

// Find Spiderman
// Result should be: {name: "Spiderman", alter_ego: "Peter Parker"}



// B

const doubleArrayValues = ([1, 2, 3]);
// result should be [2, 4, 6]

console.log(doubleArrayValues.map(x => x * 2));



// C

function containsNumberBiggerThan10(array) {
    return !!array.filter(x => x > 10).length;
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 
// // result should be true

console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
// // result should be false



// D

function isItalyInTheGreat7(array) {
    return array.indexOf("Italy") != -1;
}

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) );

// result should be true



// E

const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 10);
    });
    return newArray;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// result should be [10, 40, 30, 60, 90, 70, 110]



// F

function isBelow100(array) {
    return array.every(Number => {
        return Number < 100;
    })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));

// result should be: false



// G

const bigSum = function(array) {
    return array.reduce((acc, Number) => {
        return acc + Number;
    });
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
// result should be 1118