// ====================== GLOBAL SCOPE ======================

// Ye bhai saab poore script ke "Don" hain. 
// Kahin bhi use karo, koi mana nahi karega.
let globalBhai = "I am everywhere";

function scopeKiDuniya() {
    console.log(globalBhai); // Access mil jayega easily
}


// ====================== FUNCTION SCOPE vs BLOCK SCOPE ======================

function localScopeExample() {
    if (true) {
        var functionScoped = "Mujhe block se fark nahi padta (Var)"; 
        let blockScoped = "Main sirf is { } ke andar rahunga (Let)";
        const alsoBlockScoped = "Main bhi ziddi hoon (Const)";
        
        console.log(blockScoped); // Works fine
    }
    
    // Yaha dhyan de:
    console.log(functionScoped); // Chal jayega! Kyunki 'var' function-scoped hota hai.
    // console.log(blockScoped); // ERROR! Kyunki 'let' block ke bahar mar chuka hai.
}


// ====================== LEXICAL SCOPE (Pita-Putra Relation) ======================

// Lexical scope ka matlab: Inner function apne outer function ke variables 
// access kar sakta hai, par outer function inner ke nahi kar sakta.

function outer() {
    let username = "nikhil";

    function inner() {
        // Inner function ke paas outer ka access hai
        console.log("Outer se aaya data:", username);
        
        let innerSecret = "123";
    }

    // console.log(innerSecret); // ERROR! Pita ko bete ke secret nahi pata hote.
    inner();
}
outer();


// ====================== CLOSURES (The Advanced Stuff) ======================

// INTERMEDIATE CONCEPT: Jab ek function return hota hai, 
// toh wo sirf code return nahi karta, apna "Lexical Environment" (yaani scope) 
// saath le kar nikalta hai. Isse hi Closure kehte hain.

function makeCounter() {
    let count = 0; // Ye memory mein zinda rahega closure ki wajah se

    return function() {
        count++; // 'count' ka access abhi bhi hai, bhale hi makeCounter khatam ho gaya
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2 
// Counter reset nahi hua kyunki 'count' memory heap mein store ho gaya hai.


// ====================== PRACTICAL CLOSURE (Private Variables) ======================

// Intermediate dev ko pata hona chahiye ki Closure se "Private Variables" 
// kaise banate hain (Encapsulation).

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Ye variable 'Private' hai

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Naya balance: ${balance}`);
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500); // 1500
console.log(myAccount.balance); // UNDEFINED! Direct access nahi kar sakte.
console.log(myAccount.getBalance()); // 1500 (Method ke through hi milega)


// ====================== THE "FOR LOOP" TRAP (Interview Special) ======================

// Ye aksar pucha jata hai. 'var' aur 'let' ka behavior closure ke saath.

// Galt approach with 'var':
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        // Jab tak 1 sec hota hai, 'i' loop khatam karke 4 ho chuka hota hai
        // Kyunki 'var' global/function scoped hai, sab ek hi 'i' ko point kar rahe hain.
        console.log("Var Loop:", i); 
    }, 1000);
} // Output: 4, 4, 4 (Sad life)

// Sahi approach with 'let':
for (let j = 1; j <= 3; j++) {
    setTimeout(() => {
        // 'let' har iteration ke liye ek naya block scope create karta hai.
        // Closure har baar 'j' ki nayi value ko 'capture' kar leta hai.
        console.log("Let Loop:", j);
    }, 1000);
} // Output: 1, 2, 3 (Success!)
