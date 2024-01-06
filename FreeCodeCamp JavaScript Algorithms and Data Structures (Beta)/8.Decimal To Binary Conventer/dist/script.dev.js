"use strict";

var numberInput = document.getElementById("number-input");
var convertBtn = document.getElementById("convert-btn");
var result = document.getElementById("result");
var animationContainer = document.getElementById("animation-container");
var animationData = [{
  inputVal: 5,
  marginTop: 300,
  addElDelay: 1000,
  msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
  showMsgDelay: 15000,
  removeElDelay: 20000
}, {
  inputVal: 2,
  marginTop: -200,
  addElDelay: 1500,
  msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
  showMsgDelay: 10000,
  removeElDelay: 15000
}, {
  inputVal: 1,
  marginTop: -200,
  addElDelay: 2000,
  msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
  showMsgDelay: 5000,
  removeElDelay: 10000
}];

var decimalToBinary = function decimalToBinary(input) {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + input % 2;
  }
};

var showAnimation = function showAnimation() {
  result.innerText = "Call Stack Animation";
  animationData.forEach(function (obj) {
    setTimeout(function () {
      animationContainer.innerHTML += "\n        <p id=\"".concat(obj.inputVal, "\" style=\"margin-top: ").concat(obj.marginTop, "px;\" class=\"animation-frame\">\n          decimalToBinary(").concat(obj.inputVal, ")\n        </p>\n      ");
    }, obj.addElDelay);
    setTimeout(function () {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);
    setTimeout(function () {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });
  setTimeout(function () {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

var checkUserInput = function checkUserInput() {
  var inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkUserInput();
  }
});