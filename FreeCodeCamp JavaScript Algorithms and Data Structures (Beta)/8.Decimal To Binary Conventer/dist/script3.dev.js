"use strict";

var numberInput = document.getElementById("number-input");
var convertBtn = document.getElementById("convert-btn");
var result = document.getElementById("result");

var decimalToBinary = function decimalToBinary(input) {
  var binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = input % 2 + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

var checkUserInput = function checkUserInput() {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkUserInput();
  }
});