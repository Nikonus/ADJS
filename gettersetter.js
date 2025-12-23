// ======================= CLASS VERSION (COMMENTED) =======================

// Yaha hum ek class bana rahe hain jiska naam user hai
// Is version me getter aur setter class ke andar define kiye gaye hain
// class user{
//     constructor(username, email, password){

//         // Normal properties set ho rahi hain
//         this.username = username;
//         this.email = email;       // ⚠️ yaha setter call hoga
//         this.password = password; // ⚠️ yaha bhi setter call hoga
//     }

//     // EMAIL GETTER
//     // Jab bhi koi nick.email access karega, ye chalega
//     get email(){
//         // this._email use kiya gaya hai
//         // underscore ka matlab: internal / private-style variable
//         return this._email.toUpperCase();
//     }

//     // EMAIL SETTER
//     // Jab bhi koi nick.email = "..." karega
//     set email(newemail){
//         this._email = newemail;
//     }

//     // PASSWORD GETTER
//     get password(){
//         return `${this._password} nikhil`
//     }

//     // PASSWORD SETTER
//     set password(newpassword){
//         this._password = newpassword;
//     }
// }

// Yaha class ka object banaya gaya tha (commented hai)
// const nick = new user("nick", "nick@.com", "mypassword");

// Getter ke through password access hota
// console.log(nick.password);

// Getter ke through email access hota
// console.log(nick.email);

// Setter ke through password update hota
// nick.password = "newpassword";


// ======================= FUNCTION + DEFINEPROPERTY VERSION =======================

// Yaha hum constructor function bana rahe hain
function user(name, email, password) {

    // Normal properties assign ho rahi hain
    this.name = name;

    // ⚠️ Yaha pe pehle email property set ho rahi hai
    // Lekin neeche hum email ke liye getter/setter define kar rahe hain
    this.email = email;

    // Same case password ke saath
    this.password = password;


    // ================= EMAIL PROPERTY CONTROL =================

    // Object.defineProperty ka use karke hum email ko control kar rahe hain
    Object.defineProperty(this, "email", {

        // Getter: jab bhi nick.email likhenge
        get: function() {

            // this._email ko uppercase karke return karega
            return this._email.toUpperCase();
        },

        // Setter: jab bhi nick.email = "..." likhenge
        set: function(newEmail) {

            // Actual value _email me store hoti hai
            this._email = newEmail;
        }
    });


    // ================= PASSWORD PROPERTY CONTROL =================

    Object.defineProperty(this, "password", {

        // Getter: password ko masked format me return karega
        get: function() {

            return `${this._password} nikhil`;
        },

        // Setter: actual password yaha store hota hai
        set: function(newPassword) {

            this._password = newPassword;
        }
    });
}


// Yaha hum function constructor se object bana rahe hain
const nick = new user("nick", "nick@.com", "mypassword");


// Yaha getter chalega (direct property access lagta hai, but function call hota hai)
console.log(nick.password);


// Same yaha bhi getter hi chalega
console.log(nick.email);    


// ======================= OBJECT LITERAL GETTER / SETTER =======================

// Yaha hum direct ek object bana rahe hain
const user = {

    // Underscore wali properties = internal data
    _password: "nikhil",
    _email: "nikhil@.com",

    // PASSWORD GETTER
    // Jab user.password likhenge
    get password(){

        return `${this._password} nikhil`
    },

    // PASSWORD SETTER
    // Jab user.password = "..." likhenge
    set password(newpassword){

        this._password = newpassword;
    },      
}
