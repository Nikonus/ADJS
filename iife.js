/***********************************************************************
    IIFE — Immediately Invoked Function Expression
    ------------------------------------------------
    An IIFE is a function that:
    1. Is created
    2. Is executed immediately
    3. Does not leave variables in global scope
************************************************************************/


// ================== 1️⃣ NORMAL FUNCTION ==================

// Ye ek normal function hai
function startServer() {
    console.log("Server started");
}

// Normal function ko manually call karna padta hai
startServer();


// ================== 2️⃣ IIFE (Immediately executed) ==================

// Yaha function banaya gaya aur turant execute kar diya
(function () {
    console.log("IIFE: Server started automatically");
})();

// Matlab:
// function banate hi chal gaya
// kisi variable me store nahi hua
// global scope me kuch nahi gaya



// ================== 3️⃣ Arrow Function IIFE ==================

(() => {
    console.log("Arrow IIFE executed");
})();

// Ye modern JS me sabse common IIFE style hai



// ================== 4️⃣ Semicolon before IIFE ==================

const x = 10

// Agar yaha semicolon nahi hua
// to JS is line aur neeche wali IIFE ko merge kar sakta hai
// isliye production code me hum defensive semicolon use karte hain

;(function () {
    console.log("Safe IIFE");
})();



// ================== 5️⃣ IIFE with data ==================

((name) => {
    console.log("Welcome", name);
})("Nikhil");

// IIFE ko data bhi pass kiya ja sakta hai
// ye tab useful hota hai jab config ya startup data chahiye



// ================== 6️⃣ IIFE for data privacy ==================

const authModule = (function () {

    // Ye variable sirf is IIFE ke andar exist karega
    let token = "secret123";

    return {
        getToken: function () {
            return token;
        },
        changeToken: function (newToken) {
            token = newToken;
        }
    };

})(); // IIFE execute

console.log(authModule.getToken()); // secret123
authModule.changeToken("new456");
console.log(authModule.getToken()); // new456

// token direct access nahi ho sakta
// console.log(token) ❌ error



// ================== 7️⃣ Async IIFE ==================

;(async () => {

    console.log("Starting backend...");

    // fake database function
    function connectDB() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("MongoDB Connected");
            }, 2000);
        });
    }

    const db = await connectDB();
    console.log(db);

    console.log("Server ready");

})();


// Is pattern ka use:
// MongoDB connect
// Express start
// API bootstrapping



// ================== 8️⃣ Production-style backend IIFE ==================

const connectMongo = () => {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                resolve("MongoDB connected");
            } else {
                reject("MongoDB failed");
            }
        }, 1000);
    });
};

;(async () => {
    try {
        console.log("Starting server");

        const db = await connectMongo();
        console.log(db);

        console.log("Express server listening");

    } catch (error) {
        console.log("Server crashed:", error);
    }
})();



// ================== 9️⃣ Why backend uses IIFE ==================

/*
Without IIFE:

connectDB()
  .then(startServer)

With IIFE:

await connectDB()
startServer()

This gives:
- clean syntax
- error handling
- top-level await
- production safety
*/

