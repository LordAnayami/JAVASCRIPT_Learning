"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var listOfAllDice = document.querySelectorAll(".die");
var scoreInputs = document.querySelectorAll("#score-options input");
var scoreSpans = document.querySelectorAll("#score-options span");
var currentRoundText = document.getElementById("current-round");
var currentRoundRollsText = document.getElementById("current-round-rolls");
var totalScoreText = document.getElementById("total-score");
var scoreHistory = document.getElementById("score-history");
var rollDiceBtn = document.getElementById("roll-dice-btn");
var keepScoreBtn = document.getElementById("keep-score-btn");
var rulesContainer = document.querySelector(".rules-container");
var rulesBtn = document.getElementById("rules-btn");
var diceValuesArr = [];
var isModalShowing = false;
var score = 0;
var totalScore = 0;
var round = 1;
var rolls = 0;

var rollDice = function rollDice() {
  diceValuesArr = [];

  for (var i = 0; i < 5; i++) {
    var randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  }

  ;
  listOfAllDice.forEach(function (dice, index) {
    dice.textContent = diceValuesArr[index];
  });
};

var updateStats = function updateStats() {
  currentRoundRollsText.textContent = rolls;
  currentRoundText.textContent = round;
};

var updateRadioOption = function updateRadioOption(optionNode, score) {
  scoreInputs[optionNode].disabled = false;
  scoreInputs[optionNode].value = score;
  scoreSpans[optionNode].textContent = ", score = ".concat(score);
};

var updateScore = function updateScore(selectedValue, achieved) {
  totalScore += parseInt(selectedValue);
  totalScoreText.textContent = totalScore;
  scoreHistory.innerHTML += "<li>".concat(achieved, " : ").concat(selectedValue, "</li>");
};

var getHighestDuplicates = function getHighestDuplicates(arr) {
  var counts = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;

      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var highestCount = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _num = _step2.value;
      var count = counts[_num];

      if (count >= 3 && count > highestCount) {
        highestCount = count;
      }

      if (count >= 4 && count > highestCount) {
        highestCount = count;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var sumOfAllDice = diceValuesArr.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDice);
  }

  if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDice);
  }

  updateRadioOption(5, 0);
};

var detectFullHouse = function detectFullHouse(arr) {
  var counts = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var num = _step3.value;
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var hasThreeOfAKind = Object.values(counts).includes(3);
  var hasPair = Object.values(counts).includes(2);

  if (hasThreeOfAKind && hasPair) {
    updateRadioOption(2, 25);
  }

  updateRadioOption(5, 0);
};

var checkForStraights = function checkForStraights(arr) {
  var sortedNumbersArr = arr.sort(function (a, b) {
    return a - b;
  });

  var uniqueNumbersArr = _toConsumableArray(new Set(sortedNumbersArr));

  var uniqueNumbersStr = uniqueNumbersArr.join("");
  var smallStraightsArr = ["1234", "2345", "3456"];
  var largeStraightsArr = ["12345", "23456"];

  if (smallStraightsArr.includes(uniqueNumbersStr)) {
    updateRadioOption(3, 30);
  }

  if (largeStraightsArr.includes(uniqueNumbersStr)) {
    updateRadioOption(4, 40);
  }

  updateRadioOption(5, 0);
};

var resetRadioOption = function resetRadioOption() {
  scoreInputs.forEach(function (input) {
    input.disabled = true;
    input.checked = false;
  });
  scoreSpans.forEach(function (span) {
    span.textContent = "";
  });
};

var resetGame = function resetGame() {
  diceValuesArr = [0, 0, 0, 0, 0];
  score = 0;
  totalScore = 0;
  round = 1;
  rolls = 0;
  listOfAllDice.forEach(function (dice, index) {
    dice.textContent = diceValuesArr[index];
  });
  totalScoreText.textContent = totalScore;
  scoreHistory.innerHTML = "";
  currentRoundRollsText.textContent = rolls;
  currentRoundText.textContent = round;
  resetRadioOption();
};

rollDiceBtn.addEventListener("click", function () {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    resetRadioOption();
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
    detectFullHouse(diceValuesArr);
    checkForStraights(diceValuesArr);
  }
});
rulesBtn.addEventListener("click", function () {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide Rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show Rules";
    rulesContainer.style.display = "none";
  }
});
keepScoreBtn.addEventListener("click", function () {
  var selectedValue;
  var achieved;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = scoreInputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var radioButton = _step4.value;

      if (radioButton.checked) {
        selectedValue = radioButton.value;
        achieved = radioButton.id;
        break;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOption();
    updateScore(selectedValue, achieved);

    if (round > 6) {
      setTimeout(function () {
        alert("Game Over! Your total score is ".concat(totalScore));
        resetGame();
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});