// No arguments
const paintWall1 = function() {
    console.log("The wall has been painted red");
};
paintWall1();

// Single argument
const paintWall2 = function(color) {
    console.log(`The wall has been painted ` + color); // String concatenation
    // or
    console.log(`The wall has been painted ${color}`); // String interpolation
};
paintWall2("green");
paintWall2("blue");

// Multiple arguments
const paintWall3 = function(whichWall, color) {
    console.log(`The` + whichWall + ` wall has been painted` + color); // String concatenation
    // or
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall3("south-east", "purple");
paintWall3("north", "yellow");

// The order of the arguments matters
paintWall3("yellow", "north"); // The yellow wall has been painted north

// The order in the function definition also matters
const paintWall4 = function(color, whichWall) {
    console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
    // or
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall4("south-east", "purple"); // The purple wall has been painted south-east

// If we change the order in the definition and the call we get a good result again
const paintWall5 = function(color, whichWall) {
    console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
    // or
    console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall5("blue", "west"); // The west wall has been painted blue