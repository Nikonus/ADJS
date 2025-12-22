// // Example of creating a Promise in JavaScript
// // fetch("https://api.example.com/data").then().catch().finally(); 

// // Correct way to create a Promise
// const promiseOne = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation using setTimeout
//   setTimeout(() => {
//     console.log("async task1 is complete!");
//     resolve(); 
//   }, 2000);
// });    

// promiseOne.then(()=>{
//     console.log("Promise resolved!");
// })


// new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation using setTimeout
//   setTimeout(() => {
//     console.log("async task2 is complete!");
//     resolve(); 
//   }, 2000);    
// }).then(()=>{
//     console.log("Promise resolved!");
// });

// // Incorrect way to create a Promise (commented out to avoid errors)
// // const promiseTwo = Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("async task is complete!");
// //     resolve(); 
// //   }, 2000);    
// // });


// // Example of a Promise that resolves with data  
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task3 is complete!");
//     resolve({username: "nikhil", email: "nikhil@google.com"}) 
//   }, 2000);
// });

// //  Handling the resolved data from the Promise
// promiseThree.then((user)=>{
//     console.log("User data received!");
//     console.log(user);  
// });

// const promisefour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      let error = true;
//      if(!error){
//         console.log("Async task4 is complete");
//         resolve({username: "nikhil", password: "1233"});
//      }else{
//         reject("Error: Something went wrong");
//      }
//     }, 2000)
// })

// promisefour.then((user)=>{
//     console.log("User data received!");
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is either resolved or rejected, finally block executed");
// });

// const promisefive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//      let error = false;
//      if(!error){
//         console.log("Async task5 is complete");
//         resolve({username: "javascript", password: "1233"});
//      }else{
//         reject("Error: javascript went wrong");
//      }
//     }, 2000)
//   })

  // promisefive.then((user)=>{
  //   console.log("User data received!");
  //   return user.username})

//   async function fetchUserData(){
//  try {
//      const response = await promisefive
//     console.log(response);
//  } catch (error) {
//   console.log(error);
//  }
//   }
//   fetchUserData();  

// async function getAlluser(){
//  try {
//    const responce = await fetch("https://jsonplaceholder.typicode.com/users/")
//   console.log(typeof (responce));
//   const data = await responce.json ();
//   console.log(data);
//  } catch (error) {0
//   console.log("Error:", error);
//  }
// }
// getAlluser();

fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) => {
  return response.json()})

.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log('Error:', error);
});
