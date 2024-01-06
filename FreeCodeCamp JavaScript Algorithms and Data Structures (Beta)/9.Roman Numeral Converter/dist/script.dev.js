"use strict";

var numberInput = document.getElementById("number");
var convertBtn = document.getElementById("convert-btn");
var output = document.getElementById("output");

function convertToRoman(num) {
  var string = num.toString().split("").reverse().join("");
  var jString = "";
  var dString = "";
  var sString = "";
  var tString = "";

  switch (string[0]) {
    case "1":
      jString += "I";
      break;

    case "2":
      jString += "II";
      break;

    case "3":
      jString += "III";
      break;

    case "4":
      jString += "IV";
      break;

    case "5":
      jString += "V";
      break;

    case "6":
      jString += "VI";
      break;

    case "7":
      jString += "VII";
      break;

    case "8":
      jString += "VIII";
      break;

    case "9":
      jString += "IX";
      break;

    case "0":
      break;
  }

  switch (string[1]) {
    case "1":
      dString += "X";
      break;

    case "2":
      dString += "XX";
      break;

    case "3":
      dString += "XXX";
      break;

    case "4":
      dString += "XL";
      break;

    case "5":
      dString += "L";
      break;

    case "6":
      dString += "LX";
      break;

    case "7":
      dString += "LXX";
      break;

    case "8":
      dString += "LXXX";
      break;

    case "9":
      dString += "XC";
      break;

    case "0":
      break;
  }

  switch (string[2]) {
    case "1":
      sString += "C";
      break;

    case "2":
      sString += "CC";
      break;

    case "3":
      sString += "CCC";
      break;

    case "4":
      sString += "CD";
      break;

    case "5":
      sString += "D";
      break;

    case "6":
      sString += "DC";
      break;

    case "7":
      sString += "DCC";
      break;

    case "8":
      sString += "DCCC";
      break;

    case "9":
      sString += "CM";
      break;

    case "0":
      break;
  }

  switch (string[3]) {
    case "1":
      tString += "M";
      break;

    case "2":
      tString += "MM";
      break;

    case "3":
      tString += "MMM";
      break;

    case "0":
      break;
  }

  console.log(tString + sString + dString + jString);
  return tString + sString + dString + jString;
}

convertBtn.addEventListener('click', function () {
  var inputText = numberInput.value;
  console.log(inputText);
  var paragraph = document.createElement('p');
  output.innerHTML = '';

  if (inputText === "") {
    paragraph.textContent = 'Please enter a valid number';
    return output.appendChild(paragraph);
  } else if (parseInt(inputText) < 1) {
    paragraph.textContent = "Please enter a number greater than or equal to 1";
    return output.appendChild(paragraph);
  } else if (parseInt(inputText) > 3999) {
    paragraph.textContent = "Please enter a number less than or equal to 3999";
    return output.appendChild(paragraph);
  } else {
    paragraph.textContent = "".concat(convertToRoman(inputText));
    output.appendChild(paragraph);
  }
});