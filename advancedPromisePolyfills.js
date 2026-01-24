// ====================== SDE-2 LEVEL: PROMISE.ALL POLYFILL ======================

// Challenge: Ek aisa function bana jo multiple promises le, 
// aur tabhi resolve ho jab SARE resolve ho jayein. 
// Agar ek bhi fail hua, toh turant reject!

if (!Promise.myAll) {
    Promise.myAll = function(promises) {
        return new Promise((resolve, reject) => {
            let results = [];
            let completedPromises = 0;

            // Edge case: Empty array
            if (promises.length === 0) {
                resolve(results);
                return;
            }

            promises.forEach((promise, index) => {
                // Promise.resolve use kiya taaki agar value promise na ho tab bhi handle ho jaye
                Promise.resolve(promise)
                    .then((val) => {
                        results[index] = val; // Order maintain karna zaroori hai
                        completedPromises++;

                        // Jab saare complete ho jayein
                        if (completedPromises === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch((err) => {
                        // Ek bhi fail = Sab fail
                        reject(err);
                    });
            });
        });
    };
}

// Testing SDE-2 Polyfill
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 1000));
const p3 = 30; // Non-promise value

Promise.myAll([p1, p2, p3])
    .then(res => console.log("Promise.all Result:", res)) // [10, 20, 30]
    .catch(err => console.error(err));
