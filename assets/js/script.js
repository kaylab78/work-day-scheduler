var currentDayEl = document.getElementById("currentDay");
var timeBlockEl = document.querySelector(".time-block");
var descriptionEl = document.querySelector(".description");
var saveEl = document.querySelector(".saveBtn");
var textEl = document.querySelector("textarea");

// Print current date and time to header.
var now = moment().format("LLLL");
currentDayEl.textContent = now;


// When the page is fully loaded, load the previously saved text and check to see which hours are in the past, present, future.
$(document).ready(function() {
    loadText();
    checkTime();
});

// Load any previously saved text.
function loadText() {
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
};

// Click the save button to save the text and the time block id in local storage.
function saveText() {
    var text = $(this).prev(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
};

$("div.row").on("click", "button", saveText);

// Check if time block is in the past, present or future.
function checkTime() {

    // Round the current time down to the hour. (Example: If the time is 2:11 p.m., currentHour is 2 p.m.)
    var currentHour = moment().hours();
    
    $(".time-block").each(function() {

        // Make the time block id into an integer to compare with the currentHour.
        var blockHour = parseInt($(this).parent().attr("id"));

        // If the time block id is less than the current hour, then the time is in the past. Add class past.
        if (blockHour < currentHour) {
            $(this).addClass("past");
        
        // If the time block id is equal to the current hour, then the time is in the present. Add class present.
        } else if (blockHour === currentHour) {
            // might need to remove class past
            $(this).addClass("present");
        
        // If the time block id is greater than the current hour, then the time is in the future. Add class future.
        } else {
            // might need to remove class past and remove class present (separate)
            $(this).addClass("future");
        }
    })
}

// Check the current time every minute. 
setInterval(checkTime, 60000);