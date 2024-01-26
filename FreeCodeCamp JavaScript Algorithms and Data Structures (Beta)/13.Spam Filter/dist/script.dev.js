"use strict";

var messageInput = document.getElementById("message-input");
var result = document.getElementById("result");
var checkMessageButton = document.getElementById("check-message-btn");
var helpRegex = /please help|assist me/i;
var dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
var freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
var stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
var dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
var denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

var isSpam = function isSpam(msg) {
  return denyList.some(function (regex) {
    return regex.test(msg);
  });
};

checkMessageButton.addEventListener("click", function () {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
  messageInput.value = "";
});