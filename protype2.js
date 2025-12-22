// ======================= STRING PROTOTYPE IDEA (COMMENTED) =======================

// Yaha hum string banate aur uska custom method call karna chahte the
// Lekin default JS me truelength() naam ka koi method nahi hota
// isliye ye code commented hai
// let myname = "Nikhil       ";
// console.log(myname.truelength())


// ======================= OBJECT + METHODS =======================

// Yaha hum ek object bana rahe hain jiska naam myheros hai
let myheros = {

    // key-value pairs
    thor: "god of thunder",
    spiderman: "friendly neighborhood",
    ironman: "genius billionaire",

    // method jo spiderman ki power return karta hai
    getSpidermanPOwer: function () {

        // this.spiderman = current object ka spiderman property
        return `spiderman is ${this.spiderman}`
    }
}


// ======================= OBJECT.PROTOTYPE =======================

// ⚠️ MOST POWERFUL (AND DANGEROUS) CONCEPT ⚠️
// Yaha hum Object.prototype me method add kar rahe hain
// Matlab: duniya ke saare objects ko ye method mil jaayega
Object.prototype.nikhil = function () {

    console.log(`nikhil is present in all objects`)
}


// Yaha myheros object directly nikhil() call kar pa raha hai
// kyuki prototype chain me Object.prototype sabse upar hota hai
myheros.nikhil()


// ======================= ARRAY PROTOTYPE =======================

// Yaha hum ek array bana rahe hain
let arr = ["thor", "spiderman", "ironman"]


// Yaha hum Array.prototype me custom method add kar rahe hain
// Matlab: sirf arrays ko hi ye method milega
Array.prototype.saynikhi = function () {

    console.log(`nihil says hello`)
}


// Array ke paas ye method available hai
arr.saynikhi()


// ❌ Object ke paas ye method nahi hoga
// kyuki saynikhi sirf Array.prototype me hai
// myheros.saynikhi()   


// ======================= PROTOTYPE CHAINING =======================

// Yaha hum ek simple user object bana rahe hain
const user = {
    name: "nikhil",
    email: "abs@abs".com   // ⚠️ NOTE: yaha syntax galat hota agar uncomment hota
}


// teacher object
const teacher = {
    makevideo: true
}


// teacherSupport object
const teacherSupport = {
    isAvailable: false
}


// tasupport object
const tasupport = {

    makeassignment: "js assignment",
    fulltime: true,

    // Yaha hum manually prototype set kar rahe hain
    // tasupport → teacherSupport
    __proto__: teacherSupport
}


// Yaha hum teacher ka prototype user set kar rahe hain
// teacher → user
teacher.__proto__ = user


// ======================= MODERN WAY (COMMENTED) =======================

// Ye modern & safe way hai prototype set karne ka
// Object.setPrototypeOf(teacherSupport, user)


// ======================= STRING PROTOTYPE REAL USE =======================

// Yaha hum ek string bana rahe hain jisme extra spaces hain
let anothername = "kisorkumarn    "


// Yaha hum String.prototype me apna method add kar rahe hain
// Matlab: saari strings ke paas ab truelength() aa jaayega
String.prototype.truelength = function () {

    // this = jis string ne method call kiya
    console.log(`${this}`)

    // trim() space hata deta hai
    // length = actual characters count
    console.log(`true length is ${this.trim().length}`)
}


// Normal string variable pe call
anothername.truelength()


// Direct string literal pe bhi kaam karega
"         ".truelength()


// Mixed content ke saath bhi kaam karega
"hhhh     kkk".truelength()
