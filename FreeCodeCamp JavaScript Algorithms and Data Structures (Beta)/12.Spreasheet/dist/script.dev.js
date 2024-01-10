"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var infixToFunction = {
  "+": function _(x, y) {
    return x + y;
  },
  "-": function _(x, y) {
    return x - y;
  },
  "*": function _(x, y) {
    return x * y;
  },
  "/": function _(x, y) {
    return x / y;
  }
};

var infixEval = function infixEval(str, regex) {
  return str.replace(regex, function (_match, arg1, operator, arg2) {
    return infixToFunction[operator](parseFloat(arg1), parseFloat(arg2));
  });
};

var highPrecedence = function highPrecedence(str) {
  var regex = /([\d.]+)([*\/])([\d.]+)/;
  var str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

var isEven = function isEven(num) {
  return num % 2 === 0;
};

var sum = function sum(nums) {
  return nums.reduce(function (acc, el) {
    return acc + el;
  }, 0);
};

var average = function average(nums) {
  return sum(nums) / nums.length;
};

var median = function median(nums) {
  var sorted = nums.slice().sort(function (a, b) {
    return a - b;
  });
  var length = sorted.length;
  var middle = length / 2 - 1;
  return isEven(length) ? average([sorted[middle], sorted[middle + 1]]) : sorted[Math.ceil(middle)];
};

var spreadsheetFunctions = {
  sum: sum,
  average: average,
  median: median,
  even: function even(nums) {
    return nums.filter(isEven);
  },
  someeven: function someeven(nums) {
    return nums.some(isEven);
  },
  everyeven: function everyeven(nums) {
    return nums.every(isEven);
  },
  firsttwo: function firsttwo(nums) {
    return nums.slice(0, 2);
  },
  lasttwo: function lasttwo(nums) {
    return nums.slice(-2);
  },
  has2: function has2(nums) {
    return nums.includes(2);
  },
  increment: function increment(nums) {
    return nums.map(function (num) {
      return num + 1;
    });
  },
  random: function random(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return Math.floor(Math.random() * y + x);
  },
  range: function range(nums) {
    return _range.apply(void 0, _toConsumableArray(nums));
  },
  nodupes: function nodupes(nums) {
    return _toConsumableArray(new Set(nums).values());
  },
  "": function _(nums) {
    return nums;
  }
};

var applyFunction = function applyFunction(str) {
  var noHigh = highPrecedence(str);
  var infix = /([\d.]+)([+-])([\d.]+)/;
  var str2 = infixEval(noHigh, infix);
  var functionCall = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;

  var toNumberList = function toNumberList(args) {
    return args.split(",").map(parseFloat);
  };

  var apply = function apply(fn, args) {
    return spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  };

  return str2.replace(functionCall, function (match, fn, args) {
    return spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match;
  });
};

var _range = function _range(start, end) {
  return Array(end - start + 1).fill(start).map(function (element, index) {
    return element + index;
  });
};

var charRange = function charRange(start, end) {
  return _range(start.charCodeAt(0), end.charCodeAt(0)).map(function (code) {
    return String.fromCharCode(code);
  });
};

var evalFormula = function evalFormula(x, cells) {
  var idToText = function idToText(id) {
    return cells.find(function (cell) {
      return cell.id === id;
    }).value;
  };

  var rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;

  var rangeFromString = function rangeFromString(num1, num2) {
    return _range(parseInt(num1), parseInt(num2));
  };

  var elemValue = function elemValue(num) {
    return function (character) {
      return idToText(character + num);
    };
  };

  var addCharacters = function addCharacters(character1) {
    return function (character2) {
      return function (num) {
        return charRange(character1, character2).map(elemValue(num));
      };
    };
  };

  var rangeExpanded = x.replace(rangeRegex, function (_match, char1, num1, char2, num2) {
    return rangeFromString(num1, num2).map(addCharacters(char1)(char2));
  });
  var cellRegex = /[A-J][1-9][0-9]?/gi;
  var cellExpanded = rangeExpanded.replace(cellRegex, function (match) {
    return idToText(match.toUpperCase());
  });
  var functionExpanded = applyFunction(cellExpanded);
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
};

window.onload = function () {
  var container = document.getElementById("container");

  var createLabel = function createLabel(name) {
    var label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };

  var letters = charRange("A", "J");
  letters.forEach(createLabel);

  _range(1, 99).forEach(function (number) {
    createLabel(number);
    letters.forEach(function (letter) {
      var input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

var update = function update(event) {
  var element = event.target;
  var value = element.value.replace(/\s/g, "");

  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
  }
};