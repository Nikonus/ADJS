function mul(num){
    return num*5
} mul.power= 2
console.log(mul(4))
console.log(mul.power)
console.log(mul.prototype)


function createuser(username, score){
    this.username= username
    this.score = score
}

createuser.prototype.increment= function(){
    this.score++
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}
const tee = new createuser("nikhil" , 13)
const too = createuser("noo", 77)


tee.printme()