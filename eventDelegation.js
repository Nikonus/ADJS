// ====================== EVENT DELEGATION & BUBBLING ======================

// Scenario: Maan le tere "StayShare" project mein 100 rooms ki list hai.
// Kya tu har single room button pe 'addEventListener' lagayega? 
// Pagalpan hai! Memory ful ho jayegi. 
// Solution: "Event Delegation"


// ====================== 1. EVENT BUBBLING (The Foundation) ======================

// Bubbling ka matlab: Event sabse niche (target) se shuru hota hai 
// aur upar (parents) tak "bubble" hota hai.

/* HTML Structure:
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
*/

// Agar child click hoga, toh parent ka event bhi trigger hoga.
// Iska faida uthate hain hum Delegation mein.


// ====================== 2. PRACTICAL DELEGATION ======================

// Hum sirf EK listener lagayenge "Parent" pe.
// Aur wo check karega ki click kisne kiya hai.

const parentElement = document.querySelector("#room-list");

if (parentElement) {
    parentElement.addEventListener("click", (event) => {
        
        // event.target humein batata hai ki asli mein click kahan hua
        console.log("Clicked Element:", event.target);

        // Sirf tabhi kaam karo jab specific item click ho
        if (event.target.tagName === 'LI') {
            console.log("Room ID:", event.target.getAttribute("data-id"));
            event.target.style.backgroundColor = "yellow";
        }
        
        // Button click handle karo (e.g., "Book Now")
        if (event.target.className === 'book-btn') {
            console.log("Booking initiated for this room!");
        }
    });
}


// ====================== 3. EVENT CAPTURING vs BUBBLING ======================

// Capturing: Upar se niche aana (Rarely used)
// Bubbling: Niche se upar jaana (Default & Best)

const div = document.querySelector("div");
const btn = document.querySelector("button");

// Bubbling (Default: third param false ya empty)
div.addEventListener("click", () => console.log("Div Clicked"), false);

// Capturing (Third param true)
// div.addEventListener("click", () => console.log("Div Clicked"), true);


// ====================== 4. STOPPING THE FLOW ======================

// Kabhi kabhi hum nahi chahte ki event upar jaye (Bubbling ruke)
const childBtn = document.querySelector("#myBtn");

if (childBtn) {
    childBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Bubbling yahi ruk jayegi
        console.log("Sirf main chalunga, mera parent nahi!");
    });
}


// ====================== WHY USE THIS? ======================

/**
 * 1. Memory Saving: 100 listeners ki jagah sirf 1 listener.
 * 2. Dynamic Elements: Agar tu naya room list mein add karega, 
 * toh uspar automatic listener kaam karega (Naya add karne ki zarurat nahi).
 * 3. Cleaner Code: Boilerplate kam ho jata hai.
 */
