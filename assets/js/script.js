var currentDayEl = document.getElementById("currentDay");

// Print current date and time to header
var now = moment().format("LLLL");
currentDayEl.textContent = now;

// Check if time block is in the past, present or future using task auditing (5.5.4).
// If time block is in the past, use class past.
// If time block is in the present, use class present.
// If time block is in the future, use class future.