// A

const addTheWordCool = function(array){
    array.push('cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// Resultaat: ["nice", "awesome", "tof", "cool"]



// B

const amountOfElementsInArray = function(array){
    return array.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// Resultaat: 3



// C

const selectBelgiumFromBenelux = function(array){
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// Resultaat: "Belgie"



// D

const lastElementInArray = function(array){
    return array[array.length - 1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// Resultaat: "Schildpad"



// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    return array.slice(1);
}

const impeachTrumpSplice = function(array) {
    return array.splice(1);
}

console.log(impeachTrumpSlice(presidents)); // Resultaat: ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // Resultaat: ["Obama", "Bush", "Clinton"]



// F

const stringsTogether = function(array) {
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));

//Resultaat: "Winc Academy is leuk ;-}"



// G

const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]));

// Resultaat: [1,2,3,4,5,6]