// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
    }
});
//console.log(guest);

const clearInput = function () {
    guestInput.value = "";
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    let potluckItems = ["potato salad", "cookies", "3-cheese tomato tart", "pesto pasta salad", 
    "sweet potato fries", "watermelon salad","summer peach and tahini tart", "hummus and pits", 
    "sangria", "non-alcoholic drink mixes", "quinoa salad", "stuffed bell peppers"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems(randomPotluckIndex);
        //^^add the item from the potluckItems array at the index position of randomPotluckIndex
        let listItem = document.createElement("li");
            listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
//You’re using guest.innerText to access the name inside the li element. 
//If you used guest without innerText, you’d grab the actual list element instead of the text.
        assignItems.append(listItem);
        };        
};

assignButton.addEventListener("click", function () {
    assignItems();

});