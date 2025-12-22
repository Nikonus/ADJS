// Yaha hum ek function bana rahe hain jiska naam Setuser hai
// Ye function basically user ka naam set karne ke kaam aayega
function Setuser(name) {

    // 'this.name' ka matlab:
    // jo bhi object iss function ke saath bind hoga
    // us object ke andar 'name' property add ho jaayegi
    this.name = name;
}   


// Yaha hum ek aur function bana rahe hain jo actual user create karega
// Isme username, email aur password aa raha hai
function createuser(username, email, password) {

    // ⚠️ MOST IMPORTANT LINE ⚠️
    // Yaha hum Setuser function ko call kar rahe hain
    // lekin normal call nahi, call(this, username)
    // iska matlab:
    // Setuser ke andar ka 'this' === createuser ka 'this'
    // matlab name property isi object ke andar set hogi
    Setuser.call(this, username);

    // Ab ye dono properties bhi isi object ke andar add ho jaayengi
    this.email = email;
    this.password = password;
}


// Yaha hum 'new' keyword ke saath createuser ko call kar rahe hain
// 'new' kya karta hai:
// 1️⃣ ek empty object banata hai
// 2️⃣ us object ko 'this' bana deta hai
// 3️⃣ function ke end me wahi object return karta hai
const tee = new createuser("nikhil", "nikh@.com", "1234");


// Yaha hum poora object console me dekh rahe hain
// Isme name, email, password teenon honge
console.log(tee);
