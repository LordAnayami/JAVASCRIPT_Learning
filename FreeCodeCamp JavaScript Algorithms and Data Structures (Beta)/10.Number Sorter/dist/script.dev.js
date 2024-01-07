"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sortButton = document.getElementById("sort");

var sortInputArray = function sortInputArray(event) {
  event.preventDefault();

  var inputValues = _toConsumableArray(document.getElementsByClassName("values-dropdown")).map(function (dropdown) {
    return Number(dropdown.value);
  });

  var sortedValues = inputValues.sort(function (a, b) {
    return a - b;
  });
  updateUI(sortedValues);
};

var updateUI = function updateUI() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  array.forEach(function (num, i) {
    var outputValueNode = document.getElementById("output-value-".concat(i));
    outputValueNode.innerText = num;
  });
};

var bubbleSort = function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

var selectionSort = function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var minIndex = i;

    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    var temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
};

var insertionSort = function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var currValue = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currValue;
  }

  return array;
};

sortButton.addEventListener("click", sortInputArray);