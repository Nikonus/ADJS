// Yaha hum ek class bana rahe hain jiska naam 'user' hai
class user {

    // constructor tab chalega jab new user() likhenge
    constructor(username){

        // 'this.username' ka matlab:
        // jo object ban raha hai uske andar username store ho jaaye
        this.username = username;
    }

    // Ye ek normal instance method hai
    // Isko object ke through call kiya ja sakta hai
    logme() {

        // this.username = jis object ne method call kiya
        console.log(`the username is ${this.username}`);
    }

    // ⚠️ STATIC METHOD ⚠️
    // static method class se belong karta hai
    // object se nahi
    static creatid(){

        // yaha 'this' class ko refer karta hai, object ko nahi
        // isliye this.username undefined hota hai
        return `12345${this.username}`;
    }
}


// 👇 Ye comment bilkul sahi likha hai
// static method sirf class name se call hota hai
// object ke through call nahi hota


// Yaha hum user class ka object bana rahe hain
const nikhil = new user("nikhil");

// Object ko console me dekh rahe hain
console.log(nikhil);

// Instance method call → perfectly valid
nikhil.logme();


// ⚠️ VERY IMPORTANT LINE ⚠️
// Yaha error aayega
// kyuki creatid() static method hai
// aur static method object ke paas nahi hota
console.log(nikhil.creatid());


// ======================= INHERITANCE =======================


// Yaha hum ek child class bana rahe hain 'teacher'
// teacher extends user ka matlab:
// teacher ko user ke methods mil jaayenge
class teacher extends user {

    constructor(username, subject) {

        // super(username) parent class ke constructor ko call karta hai
        super(username);

        // teacher ki apni property
        this.subject = subject;
    } 
}


// Yaha hum teacher class ka object bana rahe hain
const savita = new teacher("savita", "science");

// Teacher object ko dekh rahe hain
console.log(savita);

// logme() parent class se inherited hai
savita.logme();


// ⚠️ IMPORTANT STATIC BEHAVIOR ⚠️
// creatid() static hai aur user class ka hai
// lekin static methods inheritance ke through class me aate hain
// isliye teacher.creatid() kaam karega
console.log(teacher.creatid());
