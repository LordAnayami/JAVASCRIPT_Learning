"use strict";

var authorContainer = document.getElementById('author-container');
var loadMoreBtn = document.getElementById('load-more-btn');
var startingIndex = 0;
var endingIndex = 8;
var authorDataArr = [];
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json').then(function (res) {
  return res.json();
}).then(function (data) {
  authorDataArr = data;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
})["catch"](function (err) {
  authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
});

var fetchMoreAuthors = function fetchMoreAuthors() {
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = 'No more data to load';
  }
};

var displayAuthors = function displayAuthors(authors) {
  authors.forEach(function (_ref, index) {
    var author = _ref.author,
        image = _ref.image,
        url = _ref.url,
        bio = _ref.bio;
    authorContainer.innerHTML += "\n    <div id=\"".concat(index, "\" class=\"user-card\">\n      <h2 class=\"author-name\">").concat(author, "</h2>\n      <img class=\"user-img\" src=\"").concat(image, "\" alt=\"").concat(author, " avatar\">\n      <div class=\"purple-divider\"></div>\n      <p class=\"bio\">").concat(bio.length > 50 ? bio.slice(0, 50) + '...' : bio, "</p>\n      <a class=\"author-link\" href=\"").concat(url, "\" target=\"_blank\">").concat(author, " author page</a>\n    </div>\n  ");
  });
};

loadMoreBtn.addEventListener('click', fetchMoreAuthors);