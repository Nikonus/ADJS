// ====================== PROXY & REFLECT (Meta-programming) ======================

// Proxy: Ek "Chowkidar" (Middleware) jo object aur aapke beech khada hota hai.
// Reflect: Ek "Toolbox" jo original behavior ko asani se call karne mein help karta hai.

const user = {
    username: "nikhil",
    age: 21,
    password: "secret_password_123"
};


// ====================== 1. THE BASIC PROXY ======================

const userProxy = new Proxy(user, {
    
    // GET Trap: Jab koi property read kare
    get: function(target, prop, receiver) {
        if (prop === "password") {
            return "ACCESS DENIED: Bhai, password mangna mana hai!";
        }
        
        console.log(`Property "${prop}" ko read kiya ja raha hai...`);
        // Reflect.get() asli object se value nikaalne ka saaf tareeka hai
        return Reflect.get(target, prop, receiver);
    },

    // SET Trap: Jab koi property update kare
    set: function(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new TypeError("Bhai, age humesha number honi chahiye!");
        }
        
        if (prop === "username") {
            value = value.toLowerCase(); // Data validation/sanitization
        }

        console.log(`Property "${prop}" update ho rahi hai to: ${value}`);
        return Reflect.set(target, prop, value);
    }
});

console.log(userProxy.username); // "nikhil"
console.log(userProxy.password); // "ACCESS DENIED..."
userProxy.age = 22;             // Chal jayega
// userProxy.age = "pachis";    // ERROR: Bhai, age number honi chahiye!


// ====================== 2. PRIVATE PROPERTIES (Validation) ======================

// Maan le tere object mein "_" se shuru hone wali properties private hain.
const secureData = {
    _apiToken: "ABC-123",
    publicName: "StayShare_API"
};

const secureProxy = new Proxy(secureData, {
    get(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("Galti se bhi private data mat chhedna!");
        }
        return target[prop];
    }
});

// console.log(secureProxy._apiToken); // Yeh line error fek degi


// ====================== 3. WHY REFLECT? ======================

// Reflect ke saare methods wahi hain jo Proxy ke traps hain.
// Isse code 'clean' rehta hai aur errors kam aate hain.

const employee = { name: "John" };

// Purana tareeka:
// delete employee.name; 

// Modern Reflect tareeka (jo boolean return karta hai):
const success = Reflect.deleteProperty(employee, "name");
if (success) console.log("Property deleted successfully!");


// ====================== SUMMARY FOR ADVANCED DEVS ======================

/**
 * 1. Target: Wo asli object jiske liye proxy ban raha hai.
 * 2. Handler: Wo object jisme hum traps (get, set, etc.) likhte hain.
 * 3. Meta-programming: Hum JS ki default functionality ko 'overwrite' kar rahe hain.
 * 4. Reactivity: Vue.js jaise frameworks isi Proxy ka use karke state change detect karte hain.
 */
