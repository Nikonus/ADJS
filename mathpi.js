// Ye line Babel ke internal types se forOfStatement import kar rahi hai
// 👉 Lekin sach bolu to is code me iska koi use nahi ho raha
// 👉 Isko hata bhi do to code bilkul same chalega
const { forOfStatement } = require("@babel/types");


// Yaha ham ek normal JavaScript object bana rahe hain
// Object ka naam 'nick' rakha hai
const nick = {

    // simple key-value pair
    // name property string value hold kar rahi hai
    name: "Nikhil",

    // age bhi ek normal number property hai
    age: 22,

    // address ek string hai
    address: "India",

    // boolean type property
    isAvailable: true,

    // yaha ham ek function ko object ke andar store kar rahe hain
    // isko method bhi bolte hain
    orderchai: function () {
        return "Chai orderd";
    }
};


// Yaha ham check kar rahe hain ki 'name' property ka behavior kya hai
// writable, enumerable, configurable — sab kuch
// 👉 JavaScript internally har property ke saath ye metadata rakhta hai
console.log(Object.getOwnPropertyDescriptor(nick, "name"));


// ❌ Ye code comment me hai, isliye execute nahi ho raha
// Agar ye chala dete, to name property LOCK ho jaati
// matlab value change nahi hoti
/*
Object.defineProperty(nick, "name", {
    writable: false,        // value change nahi kar sakte
    configurable: false,    // property delete ya redefine nahi hogi
    enumerable: true,       // loop me dikhegi
    value: "Nikhil Kumar"   // new value
});
*/

// Yaha phir se descriptor print kar sakte the
// console.log(Object.getOwnPropertyDescriptor(nick, "name"));


// 👇👇 MAIN IMPORTANT PART 👇👇

// Dekh bhai, yaha hamne Object.entries(nick) use kiya
// kyu ki ❌ object khud iterable nahi hote
// lekin Object.entries object ko array bana deta hai
// format hota hai: [ [key, value], [key, value] ]
for (let [key, value] of Object.entries(nick)) {

    // yaha ham check kar rahe hain:
    // agar value function nahi hai tabhi print karo
    // kyu ki hame sirf data chahiye, methods nahi
    if (typeof value !== "function") {

        // yaha key aur value ko readable format me print kar rahe hain
        console.log(`${key} : ${value}`);
    }
}
