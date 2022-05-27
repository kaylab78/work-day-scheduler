var currentDayEl = document.getElementById("currentDay");
var now = moment().format("LLLL");

currentDayEl.textContent = now;