let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let btnRef1 = document.querySelectorAll(".button-option1");
let popupRef1 = document.querySelector(".popup1");
let newgameBtn1 = document.getElementById("new-game1");
let msgRef1 = document.getElementById("message1");
let restartBtn1 = document.getElementById("restart1");

//laimejimo galimybes
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//x pradeda
let xTurn = true;
let count = 0;
//neleisti pasausti mygtuko
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //pranesimo ismetimas
  popupRef.classList.remove("hide");
};
//naujo zaidimo resetas
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //paslepti pranesima
  popupRef.classList.add("hide");
};
//laimejimo atveju
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};
//lygiosios
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//naujas zaidimas
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
//laimejimo logika
const winChecker = () => {
  //langu tikrinimas
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //patikrinti ar zaidimo laukai uzpildyti ir laimejimo galimybe
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //jei trys laimejimo kombinacijos uzpildytos vienodu simboliu ismetamas laimetojo pranesimas
        winFunction(element1);
      }
    }
  }
};
//atvaizduoti X/O paspaudus mygtuka zaidimo lauke
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //atvaizduoti X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //atvaizduoti O
      element.innerText = "O";
      element.disabled = true;
    }
    //paspaudimu skaiciavimas
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //patikrinti laimejimo galimybes kiekviena kart paspaudus
    winChecker();
  });
});
//isjungti mygtukus kol rodomas pranesimas
window.onload = enableButtons;

let winningPattern1 = [
  [0, 1, 2, 3],
  [0, 5, 10, 15],
  [3, 7, 11, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];
//x pradeda
let xTurn1 = true;
let count1 = 0;
//neleisti pasausti mygtuko
const disableButtons1 = () => {
  btnRef1.forEach((element) => (element.disabled = true));
  //pranesimo ismetimas
  popupRef1.classList.remove("hide");
};
//naujo zaidimo resetas
const enableButtons1 = () => {
  btnRef1.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //paslepti pranesima
  popupRef1.classList.add("hide");
};
//laimejimo atveju
const winFunction1 = (letter) => {
  disableButtons1();
  if (letter == "X") {
    msgRef1.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef1.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};
//lygiosios
const drawFunction1 = () => {
  disableButtons();
  msgRef1.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//naujas zaidimas
newgameBtn1.addEventListener("click", () => {
  count = 0;
  enableButtons1();
});
restartBtn1.addEventListener("click", () => {
  count = 0;
  enableButtons1();
});
//laimejimo logika
const winChecker1 = () => {
  //langu tikrinimas
  for (let i of winningPattern1) {
    let [element1, element2, element3, element4] = [
      btnRef1[i[0]].innerText,
      btnRef1[i[1]].innerText,
      btnRef1[i[2]].innerText,
      btnRef1[i[3]].innerText,
    ];
    //patikrinti ar zaidimo laukai uzpildyti ir laimejimo galimybe
    if (
      element1 != "" &&
      (element2 != "") & (element3 != "") & (element4 != "")
    ) {
      if (
        element1 == element2 &&
        element2 == element3 &&
        element3 == element4
      ) {
        //jei trys laimejimo kombinacijos uzpildytos vienodu simboliu ismetamas laimetojo pranesimas
        winFunction1(element1);
      }
    }
  }
};
//atvaizduoti X/O paspaudus mygtuka zaidimo lauke
btnRef1.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn1) {
      xTurn1 = false;
      //atvaizduoti X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn1 = true;
      //atvaizduoti O
      element.innerText = "O";
      element.disabled = true;
    }
    //paspaudimu skaiciavimas
    count += 1;
    if (count == 16) {
      drawFunction1();
    }
    //patikrinti laimejimo galimybes kiekviena kart paspaudus
    winChecker1();
  });
});
//isjungti mygtukus kol rodomas pranesimas
window.onload = enableButtons1;
