"use strict";

var partyPurple = document.getElementById("purple");
var partyGreen = document.getElementById("green");
var partyBlue = document.getElementById("blue");

//changes background to party purple once purple box is clicked
partyPurple.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor =
    "rgba(241, 63, 247, 1)";
  document.querySelector("body").style.color = "black";
  document.querySelector("h3").innerText = "party purple";
  document.querySelector("h3").style.color = "black";
});

//changes background to party green once green box is clicked
partyGreen.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgba(0, 253, 81, 1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h3").innerText = "party green";
  document.querySelector("h3").style.color = "black";
});

//changes background to party blue once blue box is clicked
partyBlue.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgba(0, 254, 255)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h3").innerText = "party blue";
  document.querySelector("h3").style.color = "black";
});
