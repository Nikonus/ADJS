// Yaha hum ek normal function bana rahe hain jiska naam mul hai
function mul(num){

    // Function ka kaam: jo number aaye usko 5 se multiply karna
    return num * 5
}

// ⚠️ IMPORTANT JS CONCEPT ⚠️
// JavaScript me function bhi object hota hai
// Isliye hum function ke upar directly properties add kar sakte hain
mul.power = 2


// Yaha function ko call kar rahe hain
// 4 * 5 = 20
console.log(mul(4))


// Yaha hum function ki custom property access kar rahe hain
// Ye proof hai ki function ek object bhi hai
console.log(mul.power)


// Yaha hum function ka prototype dekh rahe hain
// Har function ke paas ek prototype hota hai
// Ye prototype future me 'new' keyword ke saath kaam aata hai
console.log(mul.prototype)


// =======================================================


// Yaha hum ek constructor function bana rahe hain
// Iska kaam user create karna hai
function createuser(username, score){

    // 'this' yaha naye object ko point karta hai
    // us object ke andar username set ho raha hai
    this.username = username

    // score bhi object ka part ban gaya
    this.score = score
}


// Yaha hum prototype pe increment method add kar rahe hain
// Matlab: ye method sab objects share karenge
createuser.prototype.increment = function(){

    // current object ka score 1 se increase ho jaayega
    this.score++
}


// Ye bhi prototype pe ek method hai
// Score ko print karne ke kaam aata hai
createuser.prototype.printme = function(){

    // this.score = jis object ne method call kiya
    console.log(`score is ${this.score}`)
}


// Yaha hum 'new' keyword ke saath object bana rahe hain
// 'tee' ek proper object banega
const tee = new createuser("nikhil", 13)


// ⚠️ VERY IMPORTANT LINE ⚠️
// Yaha 'new' keyword use nahi hua
// Isliye:
// 1️⃣ koi naya object create nahi hoga
// 2️⃣ this global object (ya undefined in strict mode) ko point karega
// 3️⃣ 'too' variable me kuch return bhi nahi ho raha
const too = createuser("noo", 77)


// Yaha hum tee object ka method call kar rahe hain
// printme prototype se aayega
tee.printme()
