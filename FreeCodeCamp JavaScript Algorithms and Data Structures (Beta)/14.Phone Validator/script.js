const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");



function telephoneCheck(str) {
    let firstSplit = str.split(" ").join("");
    let countOpen = 0;
    let countClose = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            countOpen++;
        } else if (str[i] === ")") {
            countClose++;
        }
    }
    if (countOpen !== countClose) {
        return false;
    }

    let regex = /[^0-9\(\)\-]/
    if (regex.test(firstSplit)) {
        return false;
    }
    let secondSplit = firstSplit.split(/[ ()-]+/);
    if (secondSplit[0].length > 4 && (secondSplit[0].length != 10 && secondSplit[0].length != 11)) {
        return false;
    }
    if (secondSplit[0].length == 10 || secondSplit[0].length == 11) {
        console.log(1)
        if (secondSplit[0] > 4000000000 && secondSplit[0] < 20000000000) {
            return true;
        } else return false
    }
    if (secondSplit[0] == 1 || secondSplit[0] == "") {
        if (secondSplit[1].length > 4 && secondSplit[0] > 2000 && secondSplit[0] < 400 && secondSplit[0].length < 3) {
            return false
        }
        if (secondSplit[2].length != 3) {
            return false
        }
        if (secondSplit[3].length != 4) {
            return false
        }
    }
    else {
        if (secondSplit[0].length > 4 && secondSplit[0] > 2000 && secondSplit[0] < 400 && secondSplit[0].length < 3) {
            return false
        }
        if (secondSplit[1].length != 3) {
            return false
        }
        if (secondSplit[2].length != 4) {
            return false
        }
    }
    return true;
}

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number.");
    return;
  }

    let isValid = telephoneCheck(userInput.value)
   result.innerText = isValid ?  "Valid US number: " + userInput.value : "Invalid US number: " + userInput.value;
});


clearButton.addEventListener("click", () => {
  result.innerHTML = "";
});