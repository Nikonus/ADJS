// Example of creating a Promise in JavaScript
// fetch("https://api.example.com/data").then().catch().finally(); 

// Correct way to create a Promise
const promiseOne = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    console.log("async task1 is complete!");
    resolve(); 
  }, 2000);
});    

promiseOne.then(()=>{
    console.log("Promise resolved!");
})


new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    console.log("async task2 is complete!");
    resolve(); 
  }, 2000);    
}).then(()=>{
    console.log("Promise resolved!");
});

// Incorrect way to create a Promise (commented out to avoid errors)
// const promiseTwo = Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task is complete!");
//     resolve(); 
//   }, 2000);    
// });


// Example of a Promise that resolves with data  
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task3 is complete!");
    resolve({username: "nikhil", email: "nikhil@google.com"}) 
  }, 2000);
});

//  Handling the resolved data from the Promise
promiseThree.then((user)=>{
    console.log("User data received!");
    console.log(user);  
});

const promisefour = new Promise((resolve, reject) => {
    setTimeout(()=>{
     let error = true;
     if(!error){
        console.log("Async task4 is complete");
        resolve({username: "nikhil", password: "1233"});
     }else{
        reject("Error: Something went wrong");
     }
    }, 2000)
})

promisefour.then((user)=>{
    console.log("User data received!");
    console.log(user);
    
}) 

