"use strict";

var numberInput = document.getElementById("number-input");
var convertBtn = document.getElementById("convert-btn");
var result = document.getElementById("result");

var decimalToBinary = function decimalToBinary(input) {
  var inputs = [];
  var quotients = [];
  var remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    var quotient = Math.floor(input / 2);
    var remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  result.innerText = remainders.reverse().join("");
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