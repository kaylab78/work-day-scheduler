var currentDayEl = document.getElementById("currentDay");
var timeBlockEl = document.querySelector(".time-block");
var descriptionEl = document.querySelector(".description");
var saveEl = document.querySelector(".saveBtn");

// Print current date and time to header
var now = moment().format("LLLL");
currentDayEl.textContent = now;

// Print the hour to the timeBlockEl.
timeBlockEl.textContent = moment().format("hh:mm a");

// Check if time block is in the past, present or future using task auditing (5.5.4).
function checkTime() {}

// If time block is in the past, use class past.
// If time block is in the present, use class present.
// If time block is in the future, use class future.

// Click in the block to enter an event
function createDescription() {}

// Click out of the time block and the info stays

// Click the save button to save event in local storage
function saveDescription() {
    // localStorage.setItem("description", JSON.stringify(descriptionEl))
    console.log("Clicked!");
};

// Event delegation. I expect this to save the entire row to localStorage.
$("div.row").on("click", "button", saveDescription);

// Refresh the page and the saved events persist
function loadDescription() {
    descriptionEl = JSON.parse(localStorage.getItem("description"));

    if (!descriptionEl) {
        descriptionEl = {}
    };
};