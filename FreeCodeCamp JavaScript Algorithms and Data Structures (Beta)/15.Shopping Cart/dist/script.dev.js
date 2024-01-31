"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cartContainer = document.getElementById("cart-container");
var productsContainer = document.getElementById("products-container");
var dessertCards = document.getElementById("dessert-card-container");
var cartBtn = document.getElementById("cart-btn");
var clearCartBtn = document.getElementById("clear-cart-btn");
var totalNumberOfItems = document.getElementById("total-items");
var cartSubTotal = document.getElementById("subtotal");
var cartTaxes = document.getElementById("taxes");
var cartTotal = document.getElementById("total");
var showHideCartSpan = document.getElementById("show-hide-cart");
var isCartShowing = false;
var products = [{
  id: 1,
  name: "Vanilla Cupcakes (6 Pack)",
  price: 12.99,
  category: "Cupcake"
}, {
  id: 2,
  name: "French Macaroon",
  price: 3.99,
  category: "Macaroon"
}, {
  id: 3,
  name: "Pumpkin Cupcake",
  price: 3.99,
  category: "Cupcake"
}, {
  id: 4,
  name: "Chocolate Cupcake",
  price: 5.99,
  category: "Cupcake"
}, {
  id: 5,
  name: "Chocolate Pretzels (4 Pack)",
  price: 10.99,
  category: "Pretzel"
}, {
  id: 6,
  name: "Strawberry Ice Cream",
  price: 2.99,
  category: "Ice Cream"
}, {
  id: 7,
  name: "Chocolate Macaroons (4 Pack)",
  price: 9.99,
  category: "Macaroon"
}, {
  id: 8,
  name: "Strawberry Pretzel",
  price: 4.99,
  category: "Pretzel"
}, {
  id: 9,
  name: "Butter Pecan Ice Cream",
  price: 2.99,
  category: "Ice Cream"
}, {
  id: 10,
  name: "Rocky Road Ice Cream",
  price: 2.99,
  category: "Ice Cream"
}, {
  id: 11,
  name: "Vanilla Macaroons (5 Pack)",
  price: 11.99,
  category: "Macaroon"
}, {
  id: 12,
  name: "Lemon Cupcakes (4 Pack)",
  price: 12.99,
  category: "Cupcake"
}];
products.forEach(function (_ref) {
  var name = _ref.name,
      id = _ref.id,
      price = _ref.price,
      category = _ref.category;
  dessertCards.innerHTML += "\n      <div class=\"dessert-card\">\n        <h2>".concat(name, "</h2>\n        <p class=\"dessert-price\">$").concat(price, "</p>\n        <p class=\"product-category\">Category: ").concat(category, "</p>\n        <button \n          id=\"").concat(id, "\" \n          class=\"btn add-to-cart-btn\">Add to cart\n        </button>\n      </div>\n    ");
});

var ShoppingCart =
/*#__PURE__*/
function () {
  function ShoppingCart() {
    _classCallCheck(this, ShoppingCart);

    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  _createClass(ShoppingCart, [{
    key: "addItem",
    value: function addItem(id, products) {
      var product = products.find(function (item) {
        return item.id === id;
      });
      var name = product.name,
          price = product.price;
      this.items.push(product);
      var totalCountPerProduct = {};
      this.items.forEach(function (dessert) {
        totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
      });
      var currentProductCount = totalCountPerProduct[product.id];
      var currentProductCountSpan = document.getElementById("product-count-for-id".concat(id));
      currentProductCount > 1 ? currentProductCountSpan.textContent = "".concat(currentProductCount, "x") : productsContainer.innerHTML += "\n      <div id=dessert".concat(id, " class=\"product\">\n        <p>\n          <span class=\"product-count\" id=product-count-for-id").concat(id, "></span>").concat(name, "\n        </p>\n        <p>").concat(price, "</p>\n      </div>\n      ");
    }
  }, {
    key: "getCounts",
    value: function getCounts() {
      return this.items.length;
    }
  }, {
    key: "clearCart",
    value: function clearCart() {
      if (!this.items.length) {
        alert("Your shopping cart is already empty");
        return;
      }

      var isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

      if (isCartCleared) {
        this.items = [];
        this.total = 0;
        productsContainer.innerHTML = "";
        totalNumberOfItems.textContent = 0;
        cartSubTotal.textContent = 0;
        cartTaxes.textContent = 0;
        cartTotal.textContent = 0;
      }
    }
  }, {
    key: "calculateTaxes",
    value: function calculateTaxes(amount) {
      return parseFloat((this.taxRate / 100 * amount).toFixed(2));
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal() {
      var subTotal = this.items.reduce(function (total, item) {
        return total + item.price;
      }, 0);
      var tax = this.calculateTaxes(subTotal);
      this.total = subTotal + tax;
      cartSubTotal.textContent = "$".concat(subTotal.toFixed(2));
      cartTaxes.textContent = "$".concat(tax.toFixed(2));
      cartTotal.textContent = "$".concat(this.total.toFixed(2));
      return this.total;
    }
  }]);

  return ShoppingCart;
}();

;
var cart = new ShoppingCart();
var addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

_toConsumableArray(addToCartBtns).forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCounts();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", function () {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));