// ======================  ARCHITECTURE & DESIGN PATTERNS ======================

// Problem with Inheritance: "Gorilla/Banana Problem"
// Agar tujhe sirf banana chahiye, par tune 'Gorilla' se inherit kiya hai, 
// toh tujhe pura jungle (faltu methods) saath mil jata hai.


// ====================== 1. COMPOSITION ======================

// "Bhai, Inheritance mat karo (is-a relation), Composition karo (has-a relation)."

// Alag-alag capabilities define karo
const canFly = (state) => ({
    fly: () => console.log(`${state.name} is flying high!`)
});

const canCode = (state) => ({
    code: () => console.log(`${state.name} is typing... npm install dependency`)
});

const canWalk = (state) => ({
    walk: () => console.log(`${state.name} is walking in Jabalpur...`)
});

// Ab "Composition" karke naya object banao
const createDeveloperRobot = (name) => {
    let state = { name };
    // Object.assign se saari powers combine kar di
    return Object.assign({}, state, canCode(state), canWalk(state));
};

const nikhilBot = createDeveloperRobot("Nikhil_v2.0");
nikhilBot.code(); // Nikhil_v2.0 is typing...
nikhilBot.walk(); // Nikhil_v2.0 is walking...
// nikhilBot.fly(); // Error! Humne ise udne ki power nahi di. Selective power!


// ====================== 2. FACTORY PATTERN ======================

// SDE-2 Scenario: Maan le "hirred" mein do type ke users hain: 'HiringManager' aur 'Candidate'.
// Inka object create karne ka logic ek Factory mein daal do.

class Candidate {
    constructor(name) {
        this.name = name;
        this.role = "Candidate";
    }
}

class HiringManager {
    constructor(name) {
        this.name = name;
        this.role = "Hiring Manager";
    }
}

const UserFactory = {
    createUser: (name, type) => {
        switch(type) {
            case 'candidate': return new Candidate(name);
            case 'manager': return new HiringManager(name);
            default: throw new Error("Bhai, ye role exist nahi karta!");
        }
    }
};

const user1 = UserFactory.createUser("Nikhil", "candidate");
console.log(`${user1.name} joined as ${user1.role}`);


// ====================== 3. SINGLETON PATTERN (SDE-2 Essential) ======================

// Use Case: Database Connection. Poori app mein sirf EK hi connection hona chahiye.

const DatabaseConnection = (function() {
    let instance;

    function createInstance() {
        console.log("Connecting to Supabase/MongoDB...");
        return { connectionId: Math.random() };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const conn1 = DatabaseConnection.getInstance();
const conn2 = DatabaseConnection.getInstance();

console.log(conn1 === conn2); // TRUE! Dono ek hi connection use kar rahe hain.
