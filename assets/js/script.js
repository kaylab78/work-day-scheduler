var currentDayEl = document.getElementById("currentDay");
var now = moment().format("LLLL");

// Print current date and time to header
currentDayEl.textContent = now;