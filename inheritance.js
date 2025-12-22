// Yaha hum ek class bana rahe hain jiska naam 'user' hai
// Ye parent / base class hai
class user {

    // constructor tab chalega jab new user() ya child class ka object banega
    constructor(name, email) {

        // 'this.name' ka matlab:
        // jo object ban raha hai uske andar name store ho jaaye
        this.name = name;

        // email bhi usi object ke andar set ho rahi hai
        this.email = email;
    }

    // Yaha ek method define kiya gaya hai
    logme() {

        // ⚠️ IMPORTANT OBSERVATION ⚠️
        // yaha 'this.username' use kiya gaya hai
        // lekin constructor me 'username' naam ki koi property set hi nahi hui
        // isliye agar ye method call hua to output 'undefined' aayega
        console.log(`usename is ${this.username}`);
        
    }
}


// Yaha hum ek child class bana rahe hain 'teacher'
// 'extends user' ka matlab:
// teacher ko user ki sari properties aur methods mil jaayenge
class teacher extends user {

    // teacher ka apna constructor
    constructor(name, email, subject, course) {

        // ⚠️ super() MOST IMPORTANT ⚠️
        // ye parent class (user) ke constructor ko call karta hai
        // bina super() ke 'this' use karna allowed nahi hota
        super(name, email);

        // Ab teacher ke apne extra properties
        this.subject = subject;
        this.course = course;
    }

    // teacher class ka apna method
    addcourse(newcourse) {

        // yaha sirf message print ho raha hai
        // note: newcourse parameter use nahi ho raha
        console.log(`a new course added by ${this.name}`);
        
    }
} 


// Yaha hum teacher class ka object bana rahe hain
// 'new teacher()' likhne se:
// 1️⃣ pehle teacher ka constructor chalta hai
// 2️⃣ uske andar super() call hota hai
// 3️⃣ user ka constructor execute hota hai
const nikhil = new teacher(
    "nikhil",
    "nikh@.com",
    "maths",
    ["maths101", "maths102"]
);


// Yaha hum poora object console me dekh rahe hain
// Isme ye sab hoga:
// name, email (user se)
// subject, course (teacher se)
console.log(nikhil);


// Yaha hum teacher class ka method call kar rahe hain
// ye sirf console message print karega
nikhil.addcourse("maths103");
