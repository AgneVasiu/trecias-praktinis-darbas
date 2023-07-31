let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");

radio2.onclick = function () {
  if ("light-theme" in localStorage) {
    document.body.classList.add("light-theme");
  }
  localStorage.setItem("light-theme", this.checked);
  document.body.classList.add("light-theme");
};
radio1.onclick = function () {
  if (radio1.checked) {
    localStorage.removeItem("light-theme");
    document.body.classList.remove("light-theme");
    document.body.getElementById("radio1").add.checked;
  }
};

btn1.onclick = function () {
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn2.onclick = function () {
  document.body.classList.add("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn3.onclick = function () {
  document.body.classList.add("btn3-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn4.onclick = function () {
  document.body.classList.add("btn4-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn5.onclick = function () {
  document.body.classList.add("btn5-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn6.onclick = function () {
  document.body.classList.add("btn6-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn7-theme");
  document.body.classList.remove("btn8-theme");
};
btn7.onclick = function () {
  document.body.classList.add("btn7-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn8-theme");
};
btn8.onclick = function () {
  document.body.classList.add("btn8-theme");
  document.body.classList.remove("btn2-theme");
  document.body.classList.remove("btn3-theme");
  document.body.classList.remove("btn4-theme");
  document.body.classList.remove("btn5-theme");
  document.body.classList.remove("btn6-theme");
  document.body.classList.remove("btn7-theme");
};
btn9.onclick = function () {
  document.body.classList.add("btn9-font");
  document.body.classList.remove("btn10-font");
  document.body.classList.remove("btn11-font");
  document.body.classList.remove("btn12-font");
};
btn10.onclick = function () {
  document.body.classList.add("btn10-font");
  document.body.classList.remove("btn9-font");
  document.body.classList.remove("btn11-font");
  document.body.classList.remove("btn12-font");
};
btn11.onclick = function () {
  document.body.classList.add("btn11-font");
  document.body.classList.remove("btn9-font");
  document.body.classList.remove("btn10-font");
  document.body.classList.remove("btn12-font");
};
btn12.onclick = function () {
  document.body.classList.add("btn12-font");
  document.body.classList.remove("btn9-font");
  document.body.classList.remove("btn11-font");
  document.body.classList.remove("btn10-font");
};
btn13.onclick = function () {
  document.body.classList.remove("btn9-font");
  document.body.classList.remove("btn10-font");
  document.body.classList.remove("btn11-font");
  document.body.classList.remove("btn12-font");
};
