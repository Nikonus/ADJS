// ====================== CURRYING (Functional Magic) ======================

// Definition: Ek function jisme multiple arguments ek saath lene ki jagah, 
// wo ek-ek karke arguments leta hai aur har baar ek naya function return karta hai.

// Simple Function:
function add(a, b) {
    return a + b;
}

// Curried Version:
function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}

// Accessing it:
console.log(curriedAdd(2)(3)); // 5


// ====================== REAL-WORLD USE CASE: LOGGING ======================

// Maan le tu "StayShare" ya "Hirred" project pe kaam kar raha hai. 
// Tujhe alag-alag types ke logs chahiye (INFO, ERROR, DEBUG).

const logger = (type) => (message) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] [${type}]: ${message}`);
};

// Reusable functions bana liye:
const infoLog = logger("INFO");
const errorLog = logger("ERROR");

infoLog("User logged in successfully"); 
errorLog("Database connection failed!");


// ====================== INFINITE CURRYING (Interviewer's Favorite) ======================

// Question: "Bhai, aisa function bana jo add(1)(2)(3)(4)...(n) tak chale?"

function infiniteAdd(a) {
    return function(b) {
        if (b) {
            return infiniteAdd(a + b); // Recursion ka khel
        }
        return a; // Jab argument khatam ho jayein
    };
}

// Note: Last mein empty parenthesis () lagana padta hai result ke liye
console.log("Infinite Sum:", infiniteAdd(1)(2)(3)(4)(5)()); // 15


// ====================== CURRYING vs PARTIAL APPLICATION ======================

/**
 * CURRYING:
 * - Ek function ko n functions mein tod deta hai.
 * - Har function sirf 1 argument leta hai.
 * * PARTIAL APPLICATION:
 * - Ye bhi function return karta hai.
 * - Par ye ek baar mein multiple arguments le sakta hai.
 */

const partialSum = (a) => (b, c) => a + b + c;
console.log("Partial Application:", partialSum(10)(20, 30));


// ====================== ADVANCED: CURRYING WITH ARROW FUNCTIONS ======================

// Ek line mein pro level code:
const smartSum = a => b => c => a + b + c;
console.log("Smart Sum:", smartSum(1)(2)(3));
