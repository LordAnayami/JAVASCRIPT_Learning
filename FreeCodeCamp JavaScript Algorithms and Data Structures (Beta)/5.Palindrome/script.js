// Variables

let input = document.getElementById('text-input');
let checkButton = document.getElementById('check-btn');
let label = document.getElementById('result');

//Event Listeners

checkButton.addEventListener('click', function(){
    let checkString = input.value;
    console.log(checkString);
    let results = palindrome(checkString);
    if (
    (checkString.length === 1 && checkString[0].match(/[a-zA-Z]/)) 
    || (checkString.length > 0 && results)){
    label.textContent  = checkString + " is a palindrome";
    label.style.color = "green";
    } else if (checkString.length > 0 && !results) { 
    label.textContent  = checkString + " is not a palindrome";
    label.style.color = "red";
    }
    if (checkString.length === 0){
    alert("Please input a value");
    label.textContent = ""
    }

});

function palindrome(str) {
  let fistString = str.split(/,|-|\.|_| |:|[\/\\]|[()]/).join("").toLowerCase();
  console.log(fistString);

  let secondString = fistString.split("").reverse().join("");
    console.log(secondString);
  if (fistString === secondString){
    return true
  } else return false
}