class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    logme(){
        console.log(`usename is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(name, email, subject , course){
        super(name, email);
        this.subject = subject;
        this.course = course;
    }  
    addcourse(newcourse){
        console.log(`a new course added by ${this.name}`);
        

}
} 

const nikhil = new teacher("nikhil", "nikh@.com", "maths", ["maths101", "maths102"]);
console.log(nikhil);
nikhil.addcourse("maths103");