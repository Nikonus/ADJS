function Setuser(name) {
    this.name = name;
}   

function createuser(username, email, password ) {
    Setuser.call(this, username);
    this.email = email;
    this.password = password;
}

const tee = new createuser("nikhil" ,"nikh@.com", "1234");

console.log(tee);
