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

