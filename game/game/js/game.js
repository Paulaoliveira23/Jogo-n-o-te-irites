import { generateBoard } from "./board.js";

/* global variables */
const symbolsPath = [
  "imgs/ArsenalFC.png",
  "imgs/BayernMunich.png",
  "imgs/BorussiaDortmund.png",
  "imgs/FCBarcelona.png",
  "imgs/LiverpoolFC.png",
  "imgs/ManchesterCity.png",
  "imgs/OlympiqueLyon.png",
  "imgs/ParisSaint-Germain.png",
  "imgs/RealMadrid.png",
  "imgs/SLBenfica.png",
  "imgs/SportingCP.png",
];

/* players data */
let player1 = {
  name: "",
  kills: 0,
  deaths: 0,
  extraPlay: false,
  path: [],
  active: false,
  color: "red",
  symbol: "",
};

let player2 = {
  name: "",
  kills: 0,
  deaths: 0,
  extraPlay: false,
  path: [],
  active: false,
  color: "blue",
  symbol: "",
};

let player3 = {
  name: "",
  kills: 0,
  deaths: 0,
  extraPlay: false,
  path: [],
  active: false,
  color: "yellow",
  symbol: "",
};

let player4 = {
  name: "",
  kills: 0,
  deaths: 0,
  extraPlay: false,
  path: [],
  active: false,
  color: "green",
  symbol: "",
};

let numPlayers = 0,
  symbolsSelected = 0;

function generateSymbols() {
  const setPlayerSymbolContainer =
    document.getElementsByClassName("set-player-symbol")[0];

  symbolsPath.forEach((symbol, index) => {
    const img = document.createElement("img");
    const id = "logo-" + index;
    img.classList.add("logo-min");
    img.draggable = false;
    img.alt = "logo";
    img.src = symbol;
    img.id = id;
    img.onclick = () => selectSymbol(id, symbol);

    setPlayerSymbolContainer.append(img);
  });
}

function setPlayers(players) {
  const button2 = document.getElementById("players-2");
  const button3 = document.getElementById("players-3");
  const button4 = document.getElementById("players-4");

  switch (players) {
    case 2:
      numPlayers = 2;

      player1.active = true;
      player2.active = true;

      button2.classList.add("player-number-selected");
      button3.classList.remove("player-number-selected");
      button4.classList.remove("player-number-selected");
      break;

    case 3:
      numPlayers = 3;

      player1.active = true;
      player2.active = true;
      player3.active = true;

      button2.classList.remove("player-number-selected");
      button3.classList.add("player-number-selected");
      button4.classList.remove("player-number-selected");
      break;

    case 4:
      numPlayers = 4;

      player1.active = true;
      player2.active = true;
      player3.active = true;
      player4.active = true;

      button2.classList.remove("player-number-selected");
      button3.classList.remove("player-number-selected");
      button4.classList.add("player-number-selected");
      break;

    default:
      break;
  }

  if (numPlayers !== 0) {
    const setPlayerSymbolContainer = document.getElementsByClassName(
      "set-player-symbol-container"
    )[0];

    setPlayerSymbolContainer.style.display = "flex";
  }

  const playerToSelect = document.getElementsByClassName(
    "player-symbol-title"
  )[0];

  playerToSelect.innerText = "Player 1";
}

generateSymbols();

function selectSymbol(id, path) {
  if (symbolsSelected < numPlayers) {
    switch (symbolsSelected) {
      case 0:
        document.getElementById(id).classList.add("red");

        player1.symbol = path;

        symbolsSelected++;

        break;

      case 1:
        document.getElementById(id).classList.add("blue");

        player2.symbol = path;

        symbolsSelected++;

        if (numPlayers > symbolsSelected)
          document.getElementsByClassName("player-symbol-title")[0].innerText =
            "Player 2";

        break;

      case 2:
        document.getElementById(id).classList.add("yellow");

        player3.symbol = path;

        symbolsSelected++;

        if (numPlayers > symbolsSelected)
          document.getElementsByClassName("player-symbol-title")[0].innerText =
            "Player 3";
        break;

      case 3:
        document.getElementById(id).classList.add("green");

        player4.symbol = path;

        symbolsSelected++;

        if (numPlayers > symbolsSelected)
          document.getElementsByClassName("player-symbol-title")[0].innerText =
            "Player 4";
        break;
      default:
        break;
    }
  } else {
    alert(
      "Selecione o número de jogadores nP = " +
        numPlayers +
        " " +
        "SS = " +
        symbolsSelected
    );
  }
}

/* game logic implementation */
const players = [];

function startGame() {
  switch (numPlayers) {
    case 2:
      players.push(player1, player2);
      break;

    case 3:
      players.push(player1, player2, player3);
      break;

    case 4:
      players.push(player1, player2, player3, player4);
      break;
  }

  document.getElementById("game").style.display = "none";
  document.getElementById("main").style.display = "block";
}

generateBoard();
