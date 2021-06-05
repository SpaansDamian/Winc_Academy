// Opdracht 1
const superheroes = [
    {"name": "Batman", "publisher": "DC Comics", "alter_ego": "Bruce Wayne", "first_appearance": "Detective Comics #27", "weight": "210"},
    {"name": "Superman", "publisher": "DC Comics", "alter_ego": "Kal-El", "first_appearance": "Action Comics #1", "weight": "220"},
    {"name": "Flash", "publisher": "DC Comics", "alter_ego": "Jay Garrick", "first_appearance": "Flash Comics #1", "weight": "195"},
    {"name": "Green Lantern", "publisher": "DC Comics", "alter_ego": "Alan Scott", "first_appearance": "All-American Comics #16", "weight": "186"},
    {"name": "Green Arrow", "publisher": "DC Comics", "alter_ego": "Oliver Queen", "first_appearance": "All-American Comics #16", "weight": "195"},
    {"name": "Wonder Woman", "publisher": "DC Comics", "alter_ego": "Princess Diana", "first_appearance": "The Incredible Hulk #180", "weight": "165"},
    {"name": "Blue Beetle", "publisher": "DC Comics", "alter_ego": "Dan Garret", "first_appearance": "Mystery Men Comics #1", "weight": "145"},
    {"name": "SpiderMan", "publisher": "Marvel Comics", "alter_ego": "Peter Parker", "first_appearance": "Amazing Fantasy #15", "weight": "167"},
    {"name": "Captain America", "publisher": "Marvel Comics", "alter_ego": "Steve Rogers", "first_appearance": "Captain America Comics #1", "weight": "220"},
    {"name": "Iron Man", "publisher": "Marvel Comics", "alter_ego": "Tony Stark", "first_appearance": "Tales of Suspense #39", "weight": "250"},
    {"name": "Thor", "publisher": "Marvel Comics", "alter_ego": "Thor Odinson", "first_appearance": "Journey into Myster #83", "weight": "200"},
    {"name": "Hulk", "publisher": "Marvel Comics", "alter_ego": "Bruce Banner", "first_appearance": "The Incredible Hulk #1", "weight": "1400"},
    {"name": "Wolverine", "publisher": "Marvel Comics", "alter_ego": "James Howlett", "first_appearance": "The Incredible Hulk #180", "weight": "200"},
    {"name": "Daredevil", "publisher": "Marvel Comics", "alter_ego": "Matthew Michael Murdock", "first_appearance": "Daredevil #1", "weight": "200"},
    {"name": "Silver Surfer", "publisher": "Marvel Comics", "alter_ego": "Norrin Radd", "first_appearance": "The Fantastic Four #48", "weight": "unknown"}
];

const heroNames = heroes.map(hero => {
    return hero.name;
});
console.log(heroNames);

const lightHeroes = heroes.filter(hero => {
    return hero.weight < 190;
});
console.log(lightHeroes.length);

const heavySuperHeroes = heroes.filter(hero => {
    return hero.weight == 200;
});

const heavySuperHeroNames = heavySuperHeroes.map(hero => {
    return hero.name;
});
console.log(heavySuperHeroNames);

const firstAppearance = heroes.map(hero => hero.first_appearance);
console.log("firest appearance:", firstAppearance);

const DCComics = heroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = heroes.filter(hero => hero.publisher === "Marvel Comics");
console.log("DC Comics:", DCComics, "Marvel Comics:", marvelComics);

const addedWeightDC = DCComics.map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);

const heroWeights = DCComics.map(hero => {
    if (hero.weight !== "unknown") {
        return parseInt(hero.weight, 10);
    } else {
        return 0;
    }
});

const addedWeightOfHeroes = heroWeights.reduce((weight1, weight2) => {
    return weight1 + weight2;
});
console.log("TotalWeight of DC Comics:", addedWeightDC, addedWeightOfHeroes);

const addedWeightMarvel = marvelComics
    .map(hero => {
        return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
    })
    .reduce((weight1, weight2) => weight1 + weight2, 0);
console.log("TotalWeight of Marvel:", addedWeightMarvel);

const allHeroes = heroes.map(hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
});
const heaviestHero = allHeroes.reduce(
    (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
        return currentHero;
    } else {
        return currentHeaviestHero;
    }
    },
    allHeroes[0]
);

console.log("Heaviest hero:", heaviestHero);
