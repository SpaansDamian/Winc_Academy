const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    // Opdracht 1
    console.log("Dit is de gehele persoon:", person);

    // Opdracht 2
    console.log("Dit is de naam:", person.name);

    // Opdracht 3
    console.log("Dit is het geboortejaar:", 2021 - person.age);

    // Opdracht 4
    console.log(person.name, "is een", person.profession);

    // Opdracht 5
    if (person.age > 50){
        console.log("ouder als 50");
    }
}