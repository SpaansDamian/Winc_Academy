const totalAmount = 99;

if (totalAmount >= 0 && totalAmount <= 25) {
    console.log("U krijgt niks gratis");
} else if (totalAmount > 25 && totalAmount <= 50) {
    console.log("U krijgt gratis (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("U krijgt gratis nachos");
} else {
    console.log("U krijgt gratis een fles wijn");
}