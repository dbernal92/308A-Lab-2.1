// // Part 1: Humble Beginnings
// //  A simple adventurer with basic properties such as health and an inventory
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
// }

// // Loop that logs each item in Robin’s inventory
// for (let stat in adventurer) {
//     if (Array.isArray(adventurer[stat])) {
//         console.log(`${stat}:`);
//         for (let weapon of adventurer[stat]) {
//             console.log(`  ${weapon}`);
//         }
//     }
// }

// // Give Robin a companion to travel with
// adventurer.companion = {
//     name: "Leo",
//     type: "Cat"
// }

// console.log(adventurer);

// // Give Robin’s feline friend a friend of his own
// adventurer.companion.companion = {
//     name: "Frank",
//     type: "Flea",
//     // Has its own belongings, which includes a small hat and sunglasses
//     belongings: ["small hat", "sunglasses"]
// }

// console.log(adventurer.companion.companion);

// adventurer.roll = function (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
// };

// adventurer.roll();

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
// Let’s begin by creating an Adventurer class. What attributes might be specific to an adventure, but that not all characters have?
class Adventurer extends Character {
    constructor(name, role, level, magic, magic_points, technique) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.level = level;
        this.magic = magic;
        this.magic_points = magic_points;
        this.technique = technique;
        this.equippedWeapon = null;
    }

    // Attack function
    attack(target) {
        const damage = this.level * 2;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage.`);
        target.health -= damage;
    }

    // Cast Spell function
    castSpell(spell, target) {
        if (this.magic_points > 0) {
            console.log(`${this.name} casts ${spell} on ${target.name}.`);
            this.magic_points -= 1;
        } else {
            console.log(`${this.name} is out of magic points.`);
        }
    }

    // Use Item function
    useItem(item) {
        if (this.inventory.includes(item)) {
            console.log(`${this.name} uses ${item}.`);
            this.inventory.splice(this.inventory.indexOf(item), 1);
        } else {
            console.log(`${this.name} does not have ${item} in inventory.`);
        }
    }

    // Equip Weapon function
    equipWeapon(weapon) {
        this.equippedWeapon = weapon;
        console.log(`${this.name} equips ${weapon}.`);
    }

    // Rest function
    rest() {
        console.log(`${this.name} takes a rest and regains health and magic.`);
        this.health += 10;
        this.magic_points += 5;
    }

    // Scout function
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}


// Next, create a Companion class with properties and methods specific to the companions.
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

    // Heals the adventurer for 5 health points
    heal(target) {
        console.log(`${this.name} heals ${target.name} for 5 health.`);
        target.health += 5;
    }

    // Logs a message about tracking
    tracking(target) {
        console.log(`${this.name} is tracking ${target}...`);
    }

    // Logs a warning message
    warn() {
        console.log(`${this.name} warns of danger!`);
    }
}
