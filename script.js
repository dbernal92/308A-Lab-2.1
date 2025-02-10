// Part 1: Humble Beginnings
//  A simple adventurer with basic properties such as health and an inventory
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}

// Loop that logs each item in Robin’s inventory
for (let stat in adventurer) {
    if (Array.isArray(adventurer[stat])) {
        console.log(`${stat}:`);
        for (let weapon of adventurer[stat]) {
            console.log(`  ${weapon}`);
        }
    }
}

// Give Robin a companion to travel with
adventurer.companion = {
    name: "Leo",
    type: "Cat"
}

console.log(adventurer);

// Give Robin’s feline friend a friend of his own
adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    // Has its own belongings, which includes a small hat and sunglasses
    belongings: ["small hat", "sunglasses"]
}

console.log(adventurer.companion.companion);

adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
};

adventurer.roll();

