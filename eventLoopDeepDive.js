// ====================== THE EVENT LOOP BIBLE ======================

// INTERMEDIATE/ADVANCE CONCEPT: 
// JS single-threaded hai, par wo multitasking lagta hai. 
// Ye sab khel hai: Call Stack, Web APIs, Callback Queue, aur Microtask Queue ka.

console.log("1. Script Start (Global Execution Context)");

// ====================== 1. MACRO-TASK (Task Queue) ======================
// setTimeout, setInterval, setImmediate, I/O operations yaha jaate hain.
setTimeout(() => {
  console.log("2. setTimeout (Macro-task) - Main sabse last mein aaunga!");
}, 0); 


// ====================== 2. MICRO-TASK (Priority Queue) ======================
// Promises (.then/.catch/await) aur MutationObserver yaha jaate hain.
// RULE: Event Loop pehle Microtask Queue ko poora khaali karta hai, 
// uske baad hi Macro-task (setTimeout) ki baari aati hai.

Promise.resolve().then(() => {
  console.log("3. Promise 1 (Micro-task) - Main setTimeout se pehle chalunga!");
});

Promise.resolve().then(() => {
    // Microtask ke andar se ek aur Microtask
    console.log("4. Promise 2 (Micro-task) - Still ahead of setTimeout");
});


// ====================== 3. ASYNC / AWAIT KA KHEL ======================

async function asyncDost() {
  console.log("5. Async Function Start");
  
  // Await ke baad wala saara code Microtask Queue mein chala jata hai
  await Promise.resolve(); 
  
  console.log("6. Async Function End (Post-Await Microtask)");
}

asyncDost();


// ====================== 4. THE CALL STACK (Synchronous) ======================

function normalFunction() {
  console.log("7. Normal function (Call Stack)");
}

normalFunction();

console.log("8. Script End");


// ====================== RESULT ORDER KYUN AAYA? ======================

/*
  EXPECTED OUTPUT ORDER:
  1. Script Start
  5. Async Function Start (Kyunki await tak sync chalta hai)
  7. Normal function
  8. Script End
  3. Promise 1 (Micro-task Queue)
  4. Promise 2 (Micro-task Queue)
  6. Async Function End (Micro-task Queue)
  2. setTimeout (Macro-task Queue - Tab chalega jab saare Microtasks khatam!)
*/


// ====================== ADVANCED CIRCUMSTANCE: STARVATION ======================

// Agar hum Microtask Queue mein recursive call karte rahein (Infinite Promises),
// toh Call Stack kabhi khaali nahi hoga aur Macro-tasks (like UI rendering ya setTimeout)
// kabhi chal hi nahi payenge. Isse kehte hain "Task Starvation".

/*
function starve() {
    Promise.resolve().then(starve); // DON'T DO THIS: UI freeze ho jayega
}
*/

// ====================== SUMMARY FOR INTERVIEW ======================

/**
 * 1. Call Stack: Jo filhal execute ho raha hai (Sync code).
 * 2. Microtask Queue: High priority tasks (Promises, process.nextTick).
 * 3. Macro-task Queue (Task Queue): Low priority (setTimeout, DOM events).
 * * EVENT LOOP KA KAAM: 
 * Pehle Call Stack check karo (Khaali hai?). 
 * Phir Microtask Queue poora khatam karo.
 * Phir 1 Macro-task uthao. Repeat.
 */
