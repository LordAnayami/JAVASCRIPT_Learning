"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Wyznacz medianę wydatków do pierwszej niedzieli (włącznie) każdego miesiąca (np. dla 2023-09 i 2023-10 są to dni 1, 2, 3 wrz i 1 paź).
var expenses = {
  "2023-01": {
    "01": {
      "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      "fuel": [210.22]
    },
    "09": {
      "food": [11.9],
      "fuel": [190.22]
    }
  },
  "2023-03": {
    "07": {
      "food": [20, 11.9, 30.20, 11.9]
    },
    "04": {
      "food": [10.20, 11.50, 2.5],
      "fuel": []
    }
  },
  "2023-04": {}
};

function get_median_of_first_week_expenses(expenses) {
  var result = null;
  var array = [];
  Object.keys(expenses).forEach(function (months) {
    var year = months.substr(0, 4);
    var month = months.substr(5, 6);
    var date = new Date(year, month - 1, 1);
    var day = date.getDay();
    var maxDay = (8 - day) % 7;
    Object.keys(expenses[months]).forEach(function (theDay) {
      var theDays = parseInt(theDay);

      if (theDays <= maxDay) {
        if (expenses[months][theDay] != null) {
          if (expenses[months][theDay].food != null) {
            if (expenses[months][theDay].food.length > 0) {
              array.push.apply(array, _toConsumableArray(expenses[months][theDay].food));
            }
          }

          if (expenses[months][theDay].fuel != null) {
            if (expenses[months][theDay].fuel.length > 0) {
              array.push(expenses[months][theDay].fuel[0]);
            }
          }
        }
      }
    });
  });
  array.sort(function (a, b) {
    return a - b;
  });

  if (array.length / 2 % 2 == 0) {
    var middle = array.length / 2;
    result = (array[middle - 1] + array[middle]) / 2;
    result = result.toFixed(2);
    return result;
  } else {
    var _middle = Math.floor(array.length / 2);

    result = array[_middle];
    result = result.toFixed(2);
    return result;
  }
}

console.log(get_median_of_first_week_expenses(expenses));