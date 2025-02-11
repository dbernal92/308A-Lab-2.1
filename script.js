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

adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
};

adventurer.roll();

// Part 2: Class Fantasy
// Character class defines generic character entities
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

Character.prototype.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
};

// We can re-create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3: Class Features

class Adventurer extends Character {
    constructor(name, role, level, magic, magic_points, technique) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.level = level;
        this.magic = magic;
        this.magic_points = magic_points;
        this.technique = technique;
    }
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}


class Companion extends Character {
    constructor(name, type, bond, stealth, stamina, personality, favoriteItem) {
        super(name);
        this.type = type;
        this.bond = bond;
        this.stealth = stealth;
        this.stamina = stamina;
        this.personality = personality;
        this.favoriteItem = favoriteItem;
    }

    heal() {

    }
    tracking(target) {

    }
    warn() {

    }
}
