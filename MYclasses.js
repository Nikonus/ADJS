// ================== CLASS VERSION (COMMENTED) ==================

// Yaha hum ek class bana rahe hain jiska naam 'user' hai
// Ye modern ES6 syntax hai, jo internally prototype pe hi kaam karta hai
// class user{
//     // constructor tab chalega jab new user() likhenge
//     constructor(name, email , password){

//         // name property object ke andar set ho rahi hai
//         this.name = name;

//         // email bhi object ke andar ja rahi hai
//         this.email = email;

//         // password bhi object ka part ban raha hai
//         this.password = password;
//     }

//     // Ye method password ko thoda masked / encrypted format me return karta hai
//     encriptedpassword(){

//         // this.password yaha object ka password access kar raha hai
//         return `the encripted password is @${this.password}****`
//     }

//     // Ye method username ko uppercase me convert karta hai
//     changeusername(){

//         // this.name ko uppercase bana ke return kar diya
//         return`${this.name.toUpperCase()}`
//     }   
// }


// Yaha class ka object banaya gaya tha (lekin ab commented hai)
// const nikhil = new user("nikhil" ,"nikh@.com", "1234");

// Object ko console me dekhne ke liye
// console.log(nikhil);

// Method call karke encrypted password dekh rahe the
// console.log(nikhil.encriptedpassword());

// Method call karke uppercase username dekh rahe the
// console.log(nikhil.changeusername());


// ================== FUNCTION + PROTOTYPE VERSION ==================


// Yaha hum ek normal function bana rahe hain
// Ye function constructor ki tarah behave karega jab 'new' ke saath call hoga
function user(name, email, password) {

    // 'this' ka matlab: jo naya object ban raha hai
    // uske andar name property set ho rahi hai
    this.name = name;

    // email property object ke andar ja rahi hai
    this.email = email;

    // password bhi object ka part ban gaya
    this.password = password;
}


// Yaha hum prototype pe method add kar rahe hain
// Matlab: ye method har object me copy nahi hoga
// balki sab objects prototype chain se use karenge
user.prototype.encriptedpassword = function () {

    // this.password yaha current object ka password access karta hai
    return `the encripted password is @${this.password}****`
}


// Ye bhi prototype pe method hai
// Iska kaam username ko uppercase me convert karna hai
user.prototype.changeusername = function () {

    // this.name ko uppercase karke return kar diya
    return `${this.name.toUpperCase()}`
}


// Yaha hum 'new' keyword ke saath user function call kar rahe hain
// new kya karta hai:
// 1️⃣ ek empty object banata hai
// 2️⃣ us object ko 'this' bana deta hai
// 3️⃣ prototype ko link karta hai
// 4️⃣ function ke end me object return karta hai
const nikhil = new user("nikhil", "nikh@.com", "1234");


// Yaha poora object console me dekh rahe hain
console.log(nikhil);

// Prototype se method call ho raha hai
console.log(nikhil.encriptedpassword());

// Prototype se doosra method call ho raha hai
console.log(nikhil.changeusername());
