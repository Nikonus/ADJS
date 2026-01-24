// ====================== GENERATORS & ITERATORS ======================

// Normal Function: Ek baar start hua toh khatam hoke hi rukega.
// Generator Function: Beech mein "pause" ho sakta hai aur baad mein wahi se "resume".


// ====================== 1. BASIC GENERATOR ======================

// Pehchan: function keyword ke saath asterisk (*) lagta hai.
function* powerRanger() {
    console.log("1. Pehla Ranger aa gaya");
    yield "Red Ranger"; // Yaha function pause ho jayega

    console.log("2. Dusra Ranger aa gaya");
    yield "Blue Ranger"; // Dobara pause

    console.log("3. Teesri bari");
    return "Megazord Activated"; // Function khatam
}

const rangerGen = powerRanger(); 

// Generator direct execute nahi hota, ye ek 'Iterator' object return karta hai.
console.log(rangerGen.next()); // { value: 'Red Ranger', done: false }
console.log(rangerGen.next()); // { value: 'Blue Ranger', done: false }
console.log(rangerGen.next()); // { value: 'Megazord Activated', done: true }


// ====================== 2. INFINITE ID GENERATOR ======================

// Generator ka asli maza: Bina memory full kiye infinite loop chalana.
function* idCreator() {
    let id = 1;
    while (true) {
        yield `USER_ID_${id++}`;
    }
}

const idGen = idCreator();
console.log(idGen.next().value); // USER_ID_1
console.log(idGen.next().value); // USER_ID_2
// Tu jitni baar .next() bolega, utni hi baar ye aage badhega.


// ====================== 3. ITERABLES & FOR...OF ======================

// Custom Iterator banana: Maan le tere "StayShare" mein rooms ki list hai
const myRooms = {
    rooms: ['Deluxe', 'Shared', 'Single'],
    // Symbol.iterator define karke hum kisi bhi object ko "Iterable" bana sakte hain
    [Symbol.iterator]: function* () {
        for (let room of this.rooms) {
            yield room;
        }
    }
};

for (let room of myRooms) {
    console.log("Iterating Room:", room);
}


// ====================== 4. ADVANCED: DATA PASSING ======================

function* chatBot() {
    const name = yield "Tera naam kya hai?";
    console.log(`Hello ${name}!`);
    const age = yield "Teri age kya hai?";
    console.log(`${name}, tu ${age} saal ka hai.`);
}

const bot = chatBot();
console.log(bot.next().value);    // "Tera naam kya hai?"
console.log(bot.next("Nikhil").value); // "Nikhil" bhej diya yield ki jagah
console.log(bot.next(21).value);   // "21" bhej diya


// ====================== SUMMARY FOR ADVANCED DEVS ======================

/**
 * 1. yield: Function pause karne ka stop-signal hai.
 * 2. .next(): Function ko agle yield tak dhakka dene ke liye.
 * 3. Lazy Evaluation: Jab zarurat ho tabhi data generate karo (Memory efficient).
 * 4. Generators state maintain karte hain, isliye closures jaisa behavior dikhate hain.
 */
