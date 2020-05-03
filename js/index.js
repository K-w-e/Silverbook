function closeAll() {
  document.getElementById("first").style.width = "4%";
  document.getElementById("second").style.width = "4%";
  document.getElementById("third").style.width = "4%";
  document.getElementById("fourth").style.width = "4%";

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openFirstTab() {
  document.getElementById("first").style.width = "60%";
  document.getElementById("second").style.width = "4%";
  document.getElementById("third").style.width = "4%";
  document.getElementById("fourth").style.width = "4%";
  document.getElementById("close").style.width = "28%";

  document.getElementById("firstBox").style.visibility = "visible";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openSecondTab() {
  document.getElementById("first").style.width = "4%";
  document.getElementById("second").style.width = "60%";
  document.getElementById("third").style.width = "4%";
  document.getElementById("fourth").style.width = "4%";
  document.getElementById("close").style.width = "28%";

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "visible";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openThirdTab() {
  document.getElementById("first").style.width = "4%";
  document.getElementById("second").style.width = "4%";
  document.getElementById("third").style.width = "60%";
  document.getElementById("fourth").style.width = "4%";
  document.getElementById("close").style.width = "28%";

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "visible";
  document.getElementById("fourthBox").style.visibility = "hidden";
}

function openFourthTab() {
  document.getElementById("first").style.width = "4%";
  document.getElementById("second").style.width = "4%";
  document.getElementById("third").style.width = "4%";
  document.getElementById("fourth").style.width = "60%";
  document.getElementById("close").style.width = "28%";

  document.getElementById("firstBox").style.visibility = "hidden";
  document.getElementById("secondBox").style.visibility = "hidden";
  document.getElementById("thirdBox").style.visibility = "hidden";
  document.getElementById("fourthBox").style.visibility = "visible";
}