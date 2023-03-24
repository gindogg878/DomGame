//create an array of objects with category name and array of obj with category images//
const gallery = [
  {
    text: "animals",
    imgArr: [
      { text: "elephant", link: "imgs/elephant.jpg" },
      { text: "zebra", link: "imgs/zebra.jpeg" },
      { text: "tiger", link: "imgs/tiger.jpg" },
    ],
  },
  {
    text: "people",
    imgArr: [
      { text: "prince", link: "imgs/prince.jpg" },
      { text: "adelle", link: "imgs/Adele.jpg" },
      { text: "drake", link: "imgs/Drake.jpg" },
    ],
  },
  {
    text: "places",
    imgArr: [
      { text: "paris", link: "imgs/paris.jpg" },
      { text: "rome", link: "imgs/rome.jpg" },
      { text: "new york", link: "imgs/newyork.jpg" },
    ],
  },
];
//variables to know whose turn it is
let turn1 = "";
let turn2 = "";
let whoseTurn = Math.floor(Math.random() * 2) + 1;
//function to pick div to delete???//
function playerClicks1() {}

//all my variables for elements//
const eraseH1 = document.querySelector("#start");
const imageContainer = document.getElementById("imageContainer");
// const imageContainer = document.querySelector(".imageContainer");
const filter = document.getElementById("filter");
const winnerDiv = document.querySelector(".winner-style");
const wrongGuessDiv = document.querySelector(".wrong-guess");
const skipDiv = document.querySelector(".skipBtn");
const lowerPage = document.getElementById("lowerPage");
const selectCat = document.getElementById("randomCat");
const turnStyle = document.querySelector(".player1");
const turnStyle2 = document.querySelector(".player2");
let storeGuess1 = document.getElementById("guess1");
let storeGuess2 = document.getElementById("guess2");
const submitBtn1 = document.getElementById("btn1");
const submitBtn2 = document.getElementById("btn2");
const skip1 = document.getElementById("skip1");
const skip2 = document.getElementById("skip2");
const randomDiv = document.getElementById("random-div");
const ranH1 = document.getElementById("random-choice");
const corH1 = document.getElementById("correct");
const wrongH2 = document.getElementById("wrong");
const skiH2 = document.getElementById("skipper");

//this event listener will start the game with a click on h1//
eraseH1.addEventListener("click", (e) => {
  if (e.target) {
    //will remove h1//
    eraseH1.remove();
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#E3DFFD";
    //div container with the image to be guessed placed as a background img//
    imageContainer.style.display = "grid";
    //loop creating 25 divs to cover image to be guessed//
    for (let i = 0; i < 25; i++) {
      const cell = document.createElement("div");
      //set attribute of id with the corresponding num to be able to reference//
      cell.setAttribute("id", "cell" + i);
      //also added class to all cells for styling
      cell.classList.add("cells");
      //changed display to flex not sure if need grid here//
      cell.style.display = "flex";
      //added to the filter div container//
      filter.appendChild(cell);
    }
    //display the players and category area//
    lowerPage.style.display = "flex";
    //added a div to display who will go first//
    if (whoseTurn === 1) {
      ranH1.textContent = "Player 1 will go first";
      randomDiv.style.display = "flex";
      turnStyle.style.backgroundColor = "#DFFFD8";

      function eraseDiv() {
        whoseTurn.value = "";
        randomDiv.style.display = "none";
        turnStyle.style.backgroundColor = "none";
      }
      setTimeout(eraseDiv, 3250);
    } else if (whoseTurn === 2) {
      ranH1.textContent = "Player 2 will go first";
      randomDiv.style.display = "flex";
      turnStyle2.style.backgroundColor = "#DFFFD8";
      function eraseDiv() {
        whoseTurn.value = "";
        randomDiv.style.display = "none";
      }
      setTimeout(eraseDiv, 3250);
    }

    //create random number to slect category randomly from gallery array//
    let choice = Math.floor(Math.random() * 3);
    // display the var choice on the category div//
    selectCat.textContent = gallery[choice].text;
    //create random number to select from the imgArr inside of gallery array//
    let choice2 = Math.floor(Math.random() * 3);
    //create var to hold the name from the image//
    let answer = gallery[choice].imgArr[choice2].text;
    console.log(answer);
    let choice3 = gallery[choice].imgArr[choice2].link;
    console.log(choice3);
    imageContainer.style.backgroundImage = `url('${choice3}')`;

    // //trying to create a EL to capture the id of clicked element and remove//
    const cell = document.querySelectorAll(".cells");
    // console.log(cell);
    filter.addEventListener("click", (e) => {
      if (e.target) {
        // filter.removeChild(e.target);
        // e.target.innerHTML = `<div id='${e.target.getAttribute(
        //   "id"
        // )}' class='cells' style='display: flex; backgroundColor: red'></div>`;
        // const newEl = document.createElement("div");
        // newEl.classList.add(`e.target.getAttribute('id')`);
        // newEl.style.backgroundColor = "transparent";
        // newEl.style.display = "flex";
        // newEl.innerText = "test";
        // e.target = newEl;
        // console.log(e.target);
        e.target.style.backgroundColor = "transparent";
      }
    });

    //event listner for submit btn player1//
    submitBtn1.addEventListener("click", (e) => {
      console.log(storeGuess1.value);

      if (storeGuess1.value.toLowerCase() === answer) {
        corH1.textContent =
          "Player 1 guessed correctly. Congratulations you WON!!!";
        winnerDiv.style.display = "flex";
        //trying to make all cells transparent when guess is correct//
        // const allCell = document.querySelectorAll(".cells");
        // console.log(allCell);
        // allCell.style.backgroundColor = "transparent";
        // cell.style.backgroundColor.bind = "transparent";
        // console.log(cell);
      } else if (!storeGuess1.value || storeGuess1 !== answer) {
        wrongH2.textContent =
          "Player 1 guessed incorrectly. Next players turn.";
        wrongGuessDiv.style.display = "flex";
        // turnStyle2.style.backgroundColor = "yellow";
        // turnStyle.style.backgroundColor = "";
        console.log(turnStyle);
        function eraseDiv() {
          storeGuess1.value = "";
          wrongGuessDiv.style.display = "none";
        }
        setTimeout(eraseDiv, 3250);
      }
    });

    //event listner for submit btn player 2//
    submitBtn2.addEventListener("click", (e) => {
      console.log(storeGuess2.value);
      if (storeGuess2.value.toLowerCase() === answer) {
        corH1.textContent =
          "Player 2 guessed correctly. Congratulations you WON!!!";
        winnerDiv.style.display = "flex";
      } else if (!storeGuess2.value || storeGuess1 !== answer) {
        wrongH2.textContent =
          "Player 2 guessed incorrectly. Next players turn.";
        wrongGuessDiv.style.display = "flex";
        turnStyle.style.backgroundColor = "#DFFFD8";
        turnStyle2.style.backgroundColor = "none";
        function eraseDiv() {
          wrongGuessDiv.style.display = "none";
        }
        setTimeout(eraseDiv, 3250);
      }
    });
  }
  //event listner for skip btn player1//
  skip1.addEventListener("click", (e) => {
    if (e.target) {
      skiH2.textContent = "Player 1 skipped turn. Next players turn.";
      skipDiv.style.display = "flex";
      // turnStyle2.style.backgroundColor = "yellow";
      // turnStyle.style.backgroundColor = "none";
      function eraseDiv() {
        skipDiv.style.display = "none";
      }
      setTimeout(eraseDiv, 3250);
    }
  });

  //event listner for skip btn player 2//
  skip2.addEventListener("click", (e) => {
    if (e.target) {
      skiH2.textContent = "Player 2 skipped turn. Next players turn.";
      skipDiv.style.display = "flex";
      turnStyle.style.backgroundColor = "yellow";
      turnStyle2.style.backgroundColor = "none";
      function eraseDiv() {
        skipDiv.style.display = "none";
      }
      setTimeout(eraseDiv, 3250);
    }
  });
});
