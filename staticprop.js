class user {
    constructor(username){
        this.username = username;
    }
    logme() {
        console.log(`the username is ${this.username}`);
    }
    static creatid(){
        return `12345${this.username}`;
    }
}
// static method can only be called by class name not by object or we say if we create object of class then we cant call static method by that object only by class name

const nikhil = new user("nikhil");
console.log(nikhil);
nikhil.logme();
console.log(nikhil.creatid());


class teacher extends user {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    } 




}

const savita = new teacher("savita", "science");
console.log(savita);
savita.logme();
console.log(teacher.creatid());


