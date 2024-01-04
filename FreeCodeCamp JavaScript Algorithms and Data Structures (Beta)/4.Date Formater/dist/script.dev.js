"use strict";

var currentDateParagraph = document.getElementById("current-date");
var dateOptionsSelectElement = document.getElementById("date-options");
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var formattedDate = "".concat(day, "-").concat(month, "-").concat(year);
currentDateParagraph.textContent = formattedDate;
dateOptionsSelectElement.addEventListener("change", function () {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
      break;

    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = "".concat(month, "-").concat(day, "-").concat(year, " ").concat(hours, " Hours ").concat(minutes, " Minutes");
      break;

    default:
      currentDateParagraph.textContent = formattedDate;
      break;
  }
});