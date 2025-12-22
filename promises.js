// ====================== PROMISE BASICS ======================

// Ye sirf example hai ki normally fetch ka promise kaise dikhta hai
// fetch("https://api.example.com/data").then().catch().finally(); 


// ====================== PROMISE CREATE KARNA ======================

// Yaha hum manually ek Promise bana rahe hain
// Promise constructor ko ek callback milta hai
// jisme resolve aur reject hote hain
const promiseOne = new Promise((resolve, reject) => {

  // Yaha setTimeout async task ko simulate kar raha hai
  setTimeout(() => {

    // Ye bas proof hai ki async kaam complete hua
    console.log("async task1 is complete!");

    // resolve() ka matlab: promise successful ho gaya
    resolve(); 

  }, 2000);
});    


// Jab promise resolve hota hai tab .then() chalta hai
promiseOne.then(()=>{

    // Ye tab print hoga jab resolve call ho chuka ho
    console.log("Promise resolved!");
})


// ====================== DIRECT PROMISE ======================

// Yaha hum promise ko kisi variable me store bhi nahi kar rahe
// direct create karke .then() laga diya
new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log("async task2 is complete!");
    resolve(); 
  }, 2000);    

}).then(()=>{

    console.log("Promise resolved!");
});


// ====================== GALAT WAY (COMMENTED) ======================

// Ye galat syntax hai isliye comment kiya gaya hai
// Promise ek function nahi hai, constructor hai
// isliye new Promise() likhna padta hai
// const promiseTwo = Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task is complete!");
//     resolve(); 
//   }, 2000);    
// });


// ====================== PROMISE DATA KE SAATH ======================

// Yaha promise resolve ke saath data bhi bhej raha hai
const promiseThree = new Promise((resolve, reject) => {

  setTimeout(() => {

    console.log("async task3 is complete!");

    // resolve ke andar object bhej diya
    resolve({username: "nikhil", email: "nikhil@google.com"}) 

  }, 2000);
});


// Yaha .then() ke andar wo data mil raha hai
promiseThree.then((user)=>{

    console.log("User data received!");

    // yaha poora object milta hai
    console.log(user);  
});


// ====================== RESOLVE / REJECT DONO ======================

const promisefour = new Promise((resolve, reject) => {

    setTimeout(()=>{

     // Yaha hum error manually control kar rahe hain
     let error = true;

     if(!error){

        console.log("Async task4 is complete");

        // success case
        resolve({username: "nikhil", password: "1233"});

     }else{

        // failure case
        reject("Error: Something went wrong");
     }

    }, 2000)
})


// Promise chaining ka example
promisefour
.then((user)=>{

    console.log("User data received!");

    // yaha se jo return hoga
    // wo next .then() me jaayega
    return user.username

})
.then((username)=>{

    console.log(username);

})
.catch((error)=>{

    // reject hua to yaha aayega
    console.log(error);

})
.finally(()=>{

    // ye hamesha chalega
    // chahe resolve ho ya reject
    console.log("Promise is either resolved or rejected, finally block executed");
});


// ====================== ASYNC / AWAIT PROMISE ======================

const promisefive = new Promise((resolve, reject)=>{

    setTimeout(()=>{

     let error = false;

     if(!error){

        console.log("Async task5 is complete");

        resolve({username: "javascript", password: "1233"});

     }else{

        reject("Error: javascript went wrong");
     }

    }, 2000)
})


// Ye .then() wala approach hai (commented)
// promisefive.then((user)=>{
//   console.log("User data received!");
//   return user.username})


// Yaha async/await ka use ho raha hai
async function fetchUserData(){

 try {

     // await ka matlab: promise complete hone ka wait
     const response = await promisefive

     console.log(response);

 } catch (error) {

  // reject hua to yaha aayega
  console.log(error);
 }
}


// Function call
fetchUserData();  


// ====================== FETCH + ASYNC/AWAIT ======================

// Yaha hum real API se users fetch kar rahe hain
async function getAlluser(){

 try {

   // fetch promise return karta hai
   const responce = await fetch("https://jsonplaceholder.typicode.com/users/")

   // response ek object hota hai
   console.log(typeof (responce));

   // json() bhi ek promise hota hai
   const data = await responce.json ();

   console.log(data);

 } catch (error) {0

  console.log("Error:", error);
 }
}

// Function call
getAlluser();


// ====================== FETCH + THEN/CATCH ======================

// Same fetch ka .then() version
fetch('https://jsonplaceholder.typicode.com/users/')

.then((response) => {

  // response.json() promise return karta hai
  return response.json()
})

.then((data) => {

  // final parsed data
  console.log(data);
})

.catch((error) => {

  // network ya parsing error
  console.log('Error:', error);
});
