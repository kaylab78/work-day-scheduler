var currentDayEl = document.getElementById("currentDay");
var timeBlockEl = document.querySelector(".time-block");
var descriptionEl = document.querySelector(".description");
var saveEl = document.querySelector(".saveBtn");
var textEl = document.querySelector("textarea");

// Print current date and time to header
var now = moment().format("LLLL");
currentDayEl.textContent = now;

// Print the hour to the timeBlockEl.
// timeBlockEl.textContent = moment().format("hh:mm a");

// var meetings = [
//     {
//         hour: "8:00 am",
//         description: []
//     },
//     {
//         hour: "9:00 am",
//         description: []
//     }
// ];

// Click in the block to enter an event

$(document).ready(function() {
    // timeBlockEl.append(meetings[0].hour);
    loadText();
    checkTime();
});

// Check if there are already events saved in localStorage. If none, set the descriptionEl to empty.
function loadText() {
    $("#8 .description").val(localStorage.getItem("8"));
    // textEl.value = JSON.parse(localStorage.getItem("text"))
    // if (!textEl) {
    //     textEl = {}
    // };
};

// Click the save button to save event in local storage
function saveText() {
    // push() new text to the empty meetings[i].description array
    // meetings[0].description.push(textEl.value);
    var value = $(this).parent().prev(".description").val();
    let time = $(this).parent().prev().prev().parent().attr("id");
    localStorage.setItem(time, value);
    // localStorage.setItem("text", JSON.stringify(textEl.value));
    // localStorage.setItem("text", JSON.stringify(meetings[0]));
};

// Event delegation. Will this save the entire row to localStorage?
$("div.row").on("click", "button", saveText);

// Check if time block is in the past, present or future using task auditing (5.5.4).
function checkTime() {
    // if (meetings[i].hour === moment().format("h:mm a")) {
    //     $("div.row").addClass("present");
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).parent().attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            // might need to remove class past
            $(this).addClass("present");
        } else {
            // might need to remove class past and remove class present (separate)
            $(this).addClass("future");
        }
    })
}

setInterval(checkTime, 60000);
// If time block is in the past, use class past.
// If time block is in the present, use class present.
// If time block is in the future, use class future.