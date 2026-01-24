// ====================== WHAT IS A POLYFILL? ======================

// Interviewer: "Bhai, agar main JS se .map() hata doon, toh kya tu apna .map() bana sakta hai?"
// Hum: "Bilkul! Hum Prototype ka use karke naya method inject kar denge."


// ====================== 1. MAP POLYFILL ======================

// Pehle samjho .map() karta kya hai: 
// 1. Ek naya array banata hai.
// 2. Har element pe ek function chalata hai.
// 3. Result ko naye array mein push karta hai.

if (!Array.prototype.myMap) { // Check ki kahin pehle se toh nahi hai
    Array.prototype.myMap = function(callback) {
        let temp = [];
        // 'this' yaha us array ko point kar raha hai jispe myMap call hua hai
        for (let i = 0; i < this.length; i++) {
            temp.push(callback(this[i], i, this));
        }
        return temp;
    };
}

const nums = [1, 2, 3];
const doubled = nums.myMap((num) => num * 2);
console.log("Custom Map Result:", doubled); // [2, 4, 6]


// ====================== 2. FILTER POLYFILL ======================

// Filter kya karta hai? 
// Ek condition check karta hai, agar true ho tabhi naye array mein daalta hai.

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            // Agar callback true return kare tabhi push karo
            if (callback(this[i], i, this)) {
                temp.push(this[i]);
            }
        }
        return temp;
    };
}

const filtered = nums.myFilter((num) => num > 1);
console.log("Custom Filter Result:", filtered); // [2, 3]


// ====================== 3. REDUCE POLYFILL (The Boss) ======================

// Reduce sabse tricky hai kyunki isme 'accumulator' hota hai.
// Syntax: array.reduce(callback, initialValue)

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initialValue) {
        let accumulator = initialValue;
        
        for (let i = 0; i < this.length; i++) {
            // Agar initialValue nahi di, toh pehla element hi accumulator ban jata hai
            if (accumulator !== undefined) {
                accumulator = callback(accumulator, this[i], i, this);
            } else {
                accumulator = this[i];
            }
        }
        return accumulator;
    };
}

const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log("Custom Reduce Result (Sum):", sum); // 6


// ====================== 4. BIND POLYFILL (Advanced) ======================

// .bind() ek naya function return karta hai jisme 'this' fixed hota hai.
// Ye interview mein 100% pucha jata hai.

let user = { name: "Nikhil" };
function printName(city) {
    console.log(`${this.name} lives in ${city}`);
}

if (!Function.prototype.myBind) {
    Function.prototype.myBind = function(...args) {
        let obj = this; // 'this' yaha printName function hai
        let params = args.slice(1); // Pehla arg object hota hai, baaki params
        
        return function(...args2) {
            // apply() ka use karke context set kar rahe hain
            obj.apply(args[0], [...params, ...args2]);
        };
    };
}

const myInfo = printName.myBind(user, "Jabalpur");
myInfo(); // "Nikhil lives in Jabalpur"
