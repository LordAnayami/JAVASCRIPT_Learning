"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getMean = function getMean(array) {
  return array.reduce(function (acc, el) {
    return acc + el;
  }, 0) / array.length;
};

var getMedian = function getMedian(array) {
  var sorted = array.slice().sort(function (a, b) {
    return a - b;
  });
  var median = array.length % 2 === 0 ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]]) : sorted[Math.floor(array.length / 2)];
  return median;
};

var getMode = function getMode(array) {
  var counts = {};
  array.forEach(function (el) {
    counts[el] = (counts[el] || 0) + 1;
  });

  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  var highest = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  })[0];
  var mode = Object.keys(counts).filter(function (el) {
    return counts[el] === counts[highest];
  });
  return mode.join(", ");
};

var getRange = function getRange(array) {
  return Math.max.apply(Math, _toConsumableArray(array)) - Math.min.apply(Math, _toConsumableArray(array));
};

var getVariance = function getVariance(array) {
  var mean = getMean(array);
  var variance = array.reduce(function (acc, el) {
    var difference = el - mean;
    var squared = Math.pow(difference, 2);
    return acc + squared;
  }, 0) / array.length;
  return variance;
};

var getStandardDeviation = function getStandardDeviation(array) {
  var variance = getVariance(array);
  var standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};

var calculate = function calculate() {
  var value = document.querySelector("#numbers").value;
  var array = value.split(/,\s*/g);
  var numbers = array.map(function (el) {
    return Number(el);
  }).filter(function (el) {
    return !isNaN(el);
  });
  var mean = getMean(numbers);
  var median = getMedian(numbers);
  var mode = getMode(numbers);
  var range = getRange(numbers);
  var variance = getVariance(numbers);
  var standardDeviation = getStandardDeviation(numbers);
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};