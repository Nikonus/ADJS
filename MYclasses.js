// class user{
//     constructor(name, email , password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     encriptedpassword(){
//         return `the encripted password is @${this.password}****`
//     }

//     changeusername(){
//         return`${this.name.toUpperCase()}`
//     }   
// }


// const nikhil = new user("nikhil" ,"nikh@.com", "1234");
// console.log(nikhil);
// console.log(nikhil.encriptedpassword());
// console.log(nikhil.changeusername());



function user(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

user.prototype.encriptedpassword = function () {
    return `the encripted password is @${this.password}****`
}

user.prototype.changeusername = function () {
    return `${this.name.toUpperCase()}`
}

const nikhil = new user("nikhil", "nikh@.com", "1234");

console.log(nikhil);
console.log(nikhil.encriptedpassword());
console.log(nikhil.changeusername());

