var currentDayEl = document.getElementById("currentDay");
var timeBlockEl = document.querySelector(".time-block");
var descriptionEl = document.querySelector(".description");
var saveEl = document.querySelector(".saveBtn");

// Print current date and time to header
var now = moment().format("LLLL");
currentDayEl.textContent = now;

// Print the hour to the timeBlockEl.
// timeBlockEl.textContent = moment().format("hh:mm a");

// Click in the block to enter an event
var meetings = [
    {
        hour: "8:00 pm",
        description: []
    },
    {
        hour: "9:00 am",
        description: []
    }
];

function createDescription() {
    // Prints corresponding hour to the page
    timeBlockEl.append(meetings[0].hour)

    // Click in the description area to add or edit the text
    // $(descriptionEl).click(function(){});
    // $(".description").on("click", "textarea", function() {
    //     console.log("Clicked!");
    // })

    loadDescription();
}

$(document).ready(createDescription());

// Check if there are already events saved in localStorage. If none, set the descriptionEl to empty.
function loadDescription() {
    descriptionEl = JSON.parse(localStorage.getItem("description"));

    if (!descriptionEl) {
        descriptionEl = {}
    };
};

// Click the save button to save event in local storage
function saveDescription() {
    localStorage.setItem("description", JSON.stringify(descriptionEl));
};

// Event delegation. I expect this to save the entire row to localStorage.
$("div.row").on("click", "button", saveDescription);

// Check if time block is in the past, present or future using task auditing (5.5.4).
function checkTime() {
    if (meetings[i].hour === moment().format("h:mm a")) {
        $("div.row").addClass("present");
    }
}

// If time block is in the past, use class past.
// If time block is in the present, use class present.
// If time block is in the future, use class future.