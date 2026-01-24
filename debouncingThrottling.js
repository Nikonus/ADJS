// ====================== PERFORMANCE OPTIMIZATION ======================

// Scenario: Ek search bar hai. Agar user "iPhone" type karta hai, 
// toh har letter pe API call karna bewakoofi hai. 
// Humein tab call karna chahiye jab user thodi der ke liye ruk jaye.


// ====================== 1. DEBOUNCING ======================

// "Bhai, jab tak main bolna band na karu, tab tak meri baat mat kaatna."
// Use Case: Search bars, window resize events.

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        // Agar pehle se koi timer chal raha hai, toh usse clear karo (restart timer)
        if (timeoutId) clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const updateSearch = debounce((text) => {
    console.log("API Call ho rahi hai for:", text);
}, 500);

// Simulation: User "nikhil" type kar raha hai fast
updateSearch("n");
updateSearch("ni");
updateSearch("nik"); // Sirf ye wala 500ms baad execute hoga agar user ruk gaya


// ====================== 2. THROTTLING ======================

// "Bhai, tu chahe jitna bhi chillaye, main teri baat har 2 second mein ek hi baar sununga."
// Use Case: Shooting game (fire button), Scroll event, Resize event.

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    
    return function(...args) {
        if (!lastRan) {
            // Pehli baar turant chalega
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll event logic executed!");
}, 1000);

// Simulation: User bohot tezi se scroll kar raha hai
// Ye function har 1 second mein sirf ek hi baar trigger hoga.


// ====================== THE KEY DIFFERENCE ======================

/**
 * DEBOUNCING: 
 * - Wait karta hai jab tak "pause" na aaye.
 * - Har click pe timer reset ho jata hai.
 * - Sirf "Last Action" matter karta hai.
 * * THROTTLING: 
 * - Ek fixed interval pe execute karta hai.
 * - Beech ke faltu calls ko ignore kar deta hai.
 * - "Continuous Action" ko control karne ke liye best hai.
 */
