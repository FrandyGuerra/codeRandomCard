/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pinta = ["♦", "♥", "♠", "♣"];
  let numeroCard = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];

  const iconoSuperior = document.querySelector("#iconoS");
  const iconoInferior = document.querySelector("#iconoI");
  const numero = document.querySelector("#numero");
  const card = document.querySelector(".card");

  numero.innerHTML = numeroCard[numeroAleatorio(numeroCard)];

  let pintaAleatoria = pinta[numeroAleatorio(pinta)];

  if (pintaAleatoria === "♦" || pintaAleatoria === "♥") {
    if (card.classList.contains("black")) {
      card.classList.remove("black");
    } else {
      card.classList.add("red");
      iconoSuperior.innerHTML = pintaAleatoria;
      iconoInferior.innerHTML = iconoSuperior.innerHTML;
    }
  } else if (pintaAleatoria === "♠" || pintaAleatoria === "♣") {
    if (card.classList.contains("red")) {
      card.classList.remove("red");
    } else {
      card.classList.add("black");
      iconoSuperior.innerHTML = pintaAleatoria;
      iconoInferior.innerHTML = iconoSuperior.innerHTML;
    }
  }
};

function numeroAleatorio(arr) {
  let num = Math.floor(Math.random() * arr.length);

  return num;
}
