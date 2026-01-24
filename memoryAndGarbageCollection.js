// ====================== SDE-2 LEVEL: MEMORY MANAGEMENT ======================

// JS mein memory management "Automatic" hai, par as a Senior Dev, 
// tujhe pata hona chahiye ki 'Garbage Collector' (GC) ko bewakoof kaise nahi banana.


// ====================== 1. THE MEMORY LIFE CYCLE ======================

/**
 * 1. Allocation: Memory reserve karna (e.g., const a = {}).
 * 2. Usage: Read/Write operations.
 * 3. Release: Jab kaam khatam, memory free karna (Garbage Collection).
 */


// ====================== 2. HOW GARBAGE COLLECTION WORKS? ======================

// Modern JS uses "Mark-and-Sweep" Algorithm.
// 1. Root (Global Object) se shuru karo.
// 2. Dekho kaunse objects "reachable" hain.
// 3. Jo unreachable hain, unhe "Sweep" (delete) kar do.




// ====================== 3. COMMON MEMORY LEAKS (The SDE-2 Trap) ======================

// A. Global Variables: Ye kabhi GC nahi hote jab tak tab close na ho.
function leak() {
    leakedVar = "Main memory mein phasa rahoonga"; // 'var/let/const' missing = Global
}

// B. Forgotten Timers:
const data = loadHeavyData();
setInterval(() => {
    // Agar ye timer chalta raha, toh 'data' kabhi delete nahi hoga 
    // bhale hi iski zarurat na ho.
    console.log(data);
}, 1000);

// C. Closures: 
// SDE-2 Interview Question: "Kya closure memory leak kar sakta hai?"
// Answer: Haan, agar inner function bade variables ko capture karke rakhe 
// aur wo inner function kahin store ho jaye.


// ====================== 4. WEAKMAP & WEAKSET (SDE-2 Secret Weapon) ======================

// Normal Map/Set object ko "alive" rakhte hain.
// WeakMap/WeakSet allow karte hain GC ko memory free karne mein agar 
// sirf wahi reference bacha ho.

let heavyObj = { id: 1, data: new Array(10000).fill("🚀") };

const metadata = new WeakMap();
metadata.set(heavyObj, "Private Info");

// Jab hum heavyObj ko null karenge:
heavyObj = null; 
// Ab 'metadata' se wo entry automatically delete ho jayegi 
// agle GC cycle mein. Normal Map mein ye nahi hota!
