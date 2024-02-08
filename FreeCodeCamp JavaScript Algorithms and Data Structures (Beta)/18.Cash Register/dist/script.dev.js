"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var price = 1.87;
var cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
var cashInput = document.getElementById("cash");
var changeDiv = document.getElementById("change-due");
var button = document.getElementById("purchase-btn");

function checkCashRegister(price, cash, cid) {
  var needToPay = cash - price;
  console.log(needToPay);
  var money = [[0.01, 0], [0.05, 0], [0.1, 0], [0.25, 0], [1, 0], [5, 0], [10, 0], [20, 0], [100, 0]];
  console.log(money);
  var change2 = money.map(function (arr) {
    return _toConsumableArray(arr);
  });

  for (var i = 0; i < cid.length; i++) {
    money[i][1] = Math.ceil(cid[i][1] / money[i][0]);
  }

  var sumOfCash = 0;
  money.forEach(function (element) {
    sumOfCash += element[1] * element[0];
  });
  var isEnoughMoney = sumOfCash - needToPay >= 0;

  if (!isEnoughMoney) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  for (var j = money.length - 1; j >= 0; j--) {
    while (needToPay - money[j][0] >= 0 && money[j][1] > 0) {
      needToPay = Math.ceil((needToPay - money[j][0]) * 1000) / 1000;
      money[j][1]--;
      change2[j][1]++;
    }
  }

  if (needToPay - 0.01 > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  var cid2 = [];

  for (var _i = cid.length - 1; _i >= 0; _i--) {
    if (change2[_i][1] > 0) {
      cid2.push([cid[_i][0], change2[_i][1] * money[_i][0]]);
    }
  }

  var sumOfCash2 = 0;
  money.forEach(function (element) {
    sumOfCash2 += element[1] * element[0];
  });
  console.log(cid2);

  if (sumOfCash2 - 0.01 <= 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  } else {
    return {
      status: "OPEN",
      change: cid2
    };
  }
}

button.addEventListener("click", function () {
  changeDiv.innerHTML = "";
  var cashMoney = parseFloat(cashInput.value);

  if (cashMoney < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashMoney === price) {
    changeDiv.innerHTML = "No change due - customer paid with exact cash";
  } else {
    var results = checkCashRegister(price, cashMoney, cid);
    console.log(results);

    if (results.status === "INSUFFICIENT_FUNDS") {
      changeDiv.innerHTML = "Status: INSUFFICIENT_FUNDS";
    } else {
      console.log(results.change);
      var string = "Status: ".concat(results.status);
      Object.entries(results.change).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (value !== 0) {
          string += " ".concat(value[0], ": $").concat(value[1]);
        }

        changeDiv.innerHTML = string;
      });
    }
  }
});