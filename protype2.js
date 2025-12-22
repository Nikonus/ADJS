// // let myname = "Nikhil       ";
// // console.log(myname.truelength())

// let myheros={
//     thor:"god of thunder",
//     spiderman:"friendly neighborhood",
//     ironman:"genius billionaire"    ,
//     getSpidermanPOwer:function(){
//         return `spiderman is ${this.spiderman}`
//     }
// }

// Object.prototype.nikhil= function(){
//     console.log(`nikhil is present in all objects`)
// }
// myheros.nikhil()

// let arr = ["thor", "spiderman", "ironman"]
// Array.prototype.saynikhi= function(){
//     console.log(`nihil says hello`)
// }


// arr.saynikhi()
// // myheros.saynikhi()   

// const user = {
//     name:"nikhil",
//     email:"abs@abs".com
// }
// const teacher = {
//     makevideo:true
// }

// const teacherSupport = {
//     isAvailable:false
// }

// const tasupport={
//     makeassignment:"js assignment",
//     fulltime:true,
//     __proto__:teacherSupport
// }
// teacher.__proto__=user


// modern way to accsess one to another object properties

// Object.setPrototypeOf(teacherSupport , user)

let anothername = "kisorkumarn    "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`) 
}   

anothername.truelength()

"         ".truelength()
"hhhh     kkk".truelength()
