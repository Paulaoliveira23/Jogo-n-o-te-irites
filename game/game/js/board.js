/* board columns */
const boardColumnTop = document.getElementById("board-column-top");
const boardColumnBottom = document.getElementById("board-column-bottom");

/* board rows */
const boardRowLeft = document.getElementById("board-row-left");
const boardRowRight = document.getElementById("board-row-right");

/* generate columns  element.getBoundingClientRect()*/
function generateTopColumn() {
  let leftId = 76,
    centerId = 75,
    rightId = 74;

  let leftText = 16,
    rightText = 14;

  for (let i = 1; i < 10; i++) {
    /* check ids */
    if (i === 2) centerId = 100;

    const leftCell = document.createElement("div");
    leftCell.classList.add("cell");

    leftId === 80 ? leftCell.classList.add("red") : null;

    const centerCell = document.createElement("div");
    centerCell.classList.add(i === 1 ? "cell-inside-ficha" : "cell-inside");
    centerCell.classList.add("red");

    const rightCell = document.createElement("div");
    rightCell.classList.add("cell");
    rightId === 70 ? rightCell.classList.add("green") : null;

    const cellContainer = document.createElement("div");
    cellContainer.classList.add("cell-container");

    /* inner texts */
    leftCell.innerText = leftId === 80 ? "F" : leftText;
    centerCell.innerText = centerId === 75 ? "Ficha" : centerId;
    rightCell.innerText = rightId === 70 ? "F" : rightText;

    /* create cells id  */
    leftCell.id = leftId;
    centerCell.id = centerId;
    rightCell.id = rightId;

    /* increment & decrement ids */
    leftId++;
    centerId++;
    rightId--;

    leftText++;
    rightText--;

    if (i === 5) {
      leftId = 1;
      leftText = 1;
    }

    /* append cells */
    cellContainer.append(leftCell, centerCell, rightCell);
    boardColumnTop.append(cellContainer);
  }
}

function generateBottomColumn() {
  let leftId = 26,
    centerId = 128,
    rightId = 44;

  let leftText = 6,
    rightText = 4;

  for (let i = 1; i < 10; i++) {
    /* check ids */
    if (i === 9) centerId = 35;

    const leftCell = document.createElement("div");
    leftCell.classList.add("cell");

    leftId === 30 ? leftCell.classList.add("blue") : null;

    const centerCell = document.createElement("div");
    centerCell.classList.add(i === 9 ? "cell-inside-ficha" : "cell-inside");
    centerCell.classList.add("yellow");

    const rightCell = document.createElement("div");
    rightCell.classList.add("cell");
    rightId === 40 ? rightCell.classList.add("yellow") : null;

    const cellContainer = document.createElement("div");
    cellContainer.classList.add("cell-container");

    /* inner texts */
    leftCell.innerText = leftId === 30 ? "F" : leftText;
    centerCell.innerText = centerId === 35 ? "Ficha" : centerId;
    rightCell.innerText = rightId === 40 ? "F" : rightText;

    /* create cells id  */
    leftCell.id = leftId;
    centerCell.id = centerId;
    rightCell.id = rightId;

    /* increment & decrement ids */
    leftId++;
    centerId--;
    rightId--;

    leftText++;
    rightText--;

    if (rightText === 0) {
      rightText = 20;
    }

    /* append cells */
    cellContainer.append(leftCell, centerCell, rightCell);
    boardColumnBottom.append(cellContainer);
  }
}

function generateLeftRow() {
  let bottomId = 24,
    centerId = 118,
    topId = 6;

  let bottomText = 4;

  for (let i = 1; i < 10; i++) {
    /* check ids */
    if (i === 9) centerId = 15;

    const bottomCell = document.createElement("div");
    bottomCell.classList.add("cell");

    bottomId === 20 ? bottomCell.classList.add("blue") : null;

    const centerCell = document.createElement("div");
    centerCell.classList.add(
      i === 9 ? "cell-inside-row-ficha" : "cell-inside-row"
    );
    centerCell.classList.add("blue");

    const topCell = document.createElement("div");
    topCell.classList.add("cell");
    topId === 10 ? topCell.classList.add("red") : null;

    const cellContainer = document.createElement("div");
    cellContainer.classList.add("cell-container-row");

    /* inner texts */

    bottomCell.innerText = bottomId === 20 ? "F" : bottomText;
    centerCell.innerText = centerId === 15 ? "Ficha" : centerId;
    topCell.innerText = topId === 10 ? "F" : topId;

    /* create cells id  */
    bottomCell.id = bottomId;
    centerCell.id = centerId;
    topCell.id = topId;

    if (bottomText === 0) bottomText = 20;

    /* increment & decrement ids */
    bottomId--;
    centerId--;
    topId++;

    bottomText--;

    /* append cells */
    cellContainer.prepend(topCell, centerCell, bottomCell);
    boardRowLeft.prepend(cellContainer);
  }
}

function generateRightRow() {
  let bottomId = 46,
    centerId = 118,
    topId = 64;

  let bottomText = 6,
    topText = 4;

  for (let i = 1; i < 10; i++) {
    /* check ids */
    if (i === 9) centerId = 55;

    const bottomCell = document.createElement("div");
    bottomCell.classList.add("cell");

    bottomId === 50 ? bottomCell.classList.add("yellow") : null;

    const centerCell = document.createElement("div");
    centerCell.classList.add(
      i === 9 ? "cell-inside-row-ficha" : "cell-inside-row"
    );
    centerCell.classList.add("green");

    const topCell = document.createElement("div");
    topCell.classList.add("cell");
    topId === 60 ? topCell.classList.add("green") : null;

    const cellContainer = document.createElement("div");
    cellContainer.classList.add("cell-container-row");

    /* inner texts */

    bottomCell.innerText = bottomId === 50 ? "F" : bottomText;
    centerCell.innerText = centerId === 55 ? "Ficha" : centerId;
    topCell.innerText = topId === 60 ? "F" : topText;

    /* create cells id  */
    bottomCell.id = bottomId;
    centerCell.id = centerId;
    topCell.id = topId;

    /* increment & decrement ids */
    bottomId++;
    centerId--;
    topId--;

    bottomText++;
    topText--;

    if (topText === 0) topText = 20;

    /* append cells */
    cellContainer.prepend(topCell, centerCell, bottomCell);
    boardRowRight.append(cellContainer);
  }
}

generateTopColumn();
generateBottomColumn();
generateLeftRow();
generateRightRow();

function generateBoard() {
  generateTopColumn();
  generateBottomColumn();
  generateLeftRow();
  generateRightRow();
}
