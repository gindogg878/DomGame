//create an object with categoryname and array of category images//
const gallery = [
  {
    text: "animals",
    imgArr: [
      { text: "elephant", link: "https://imgur.com/a/NffYuY6" },
      { text: "zebra", link: "https://imgur.com/a/6xWnk4G" },
      { text: "tiger", link: "https://imgur.com/a/vczJHh8" },
    ],
  },
  {
    text: "people",
    imgArr: [
      { text: "harry", link: "#1" },
      { text: "sally", link: "#2" },
      { text: "mary", link: "#3" },
    ],
  },
  {
    text: "places",
    imgArr: [
      { text: "paris", link: "#4" },
      { text: "rome", link: "#5" },
      { text: "cairo", link: "#6" },
    ],
  },
];
// console.log(gallery);
// //to get the img from the array of obj//
// console.log(gallery[0].imgArr[2].link);
// //to get the name of the image from the array of obj//
// console.log(gallery[0].imgArr[2].text);
const eraseH1 = document.querySelector("#start");
const imageContainer = document.getElementById("imageContainer");
const filter = document.getElementById("filter");
const lowerPage = document.getElementById("lowerPage");
const selectCat = document.getElementById("randomCat");
let storeGuess1 = document.getElementById("guess1");
let storeGuess2 = document.getElementById("guess2");
const submitBtn1 = document.getElementById("btn1");
const submitBtn2 = document.getElementById("btn2");
const skip1 = document.getElementById("skip1");
const skip2 = document.getElementById("skip2");

console.log(eraseH1);

eraseH1.addEventListener("click", (e) => {
  if (e.target) {
    eraseH1.remove();
    console.log(filter);
    imageContainer.style.display = "flex";
    for (let i = 0; i < 30; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("id", "cell" + i);
      cell.classList.add("cells");
      // cell.style.zIndex = "1";
      cell.style.display = "flex";
      filter.appendChild(cell);
    }
    lowerPage.style.display = "flex";
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
    imageContainer.style.backgroundImage = `url(${choice})`;

    // //trying to create a EL to capture the id of clicked element and remove//
    // const cell = document.querySelectorAll("cells");
    // cell.addEventListener("click", (e) => {
    //   console.log(e.target);
    //   if (e.target) {
    //     cell.removeChild();
    //   }
    // });
    submitBtn1.addEventListener("click", (e) => {
      console.log(storeGuess1.value);
      if (storeGuess1.value.toLowerCase() === answer) {
        //=== gallery[?].imgArr.text*/ )
        const winner = document.createElement("div");
        winner.textContent = "You Guess Correctly!!!Congratulations!!!";
        imageContainer.append(winner);
      } else if (!storeGuess1.value || storeGuess1 !== answer) {
        const wrong = document.createElement("div");
        wrong.textContent = "You guessed incorrectly! Next players turn.";
        imageContainer.append(wrong);
        function eraseDiv() {
          wrong.style.display = "none";
        }
        setTimeout(eraseDiv, 3250);
      }

      // storeGuess1.value = "";
    });

    submitBtn2.addEventListener("click", (e) => {
      console.log(storeGuess2.value);
      if (storeGuess2.value.toLowerCase() === answer) {
        //=== gallery[?].imgArr.text*/ )
        const winner = document.createElement("div");
        winner.textContent = "You Guess Correctly!!!Congratulations!!!";
        imageContainer.append(winner);
      } else if (!storeGuess2.value || storeGuess1 !== answer) {
        const wrong = document.createElement("div");
        wrong.textContent = "You guessed incorrectly! Next players turn.";
        imageContainer.append(wrong);
        function eraseDiv() {
          wrong.style.display = "none";
        }
        setTimeout(eraseDiv, 3250);
      }

      // storeGuess1.value = "";
    });
  }
  //   const addDiv = document.createElement("div");
  //   addDiv.setAttribute("id", "imageContainer");

  //   document.body.append(addDiv);
  //   const addImage = document.createElement("img");
  //   addImage.setAttribute("src", "elephant.jpg");
  //   //this sets the attribute id to blur and then blurs the image//
  //   // addImage.setAttribute("id", blur);
  //   // addImage.style.filter = "blur(75px)";
  //   //using zIndex will place the image behind the following element with a negative number//
  //   addImage.style.zIndex = "-1";

  //   addDiv.appendChild(addImage);
  //   const addFilter = document.createElement("div");
  //   addFilter.setAttribute("id", "filterDiv");
  //   addImage.addEventListener("click", (e) => {
  //     if (e.target) {
  //     }
  //   });

  skip1.addEventListener("click", (e) => {
    if (e.target) {
      const skipTurn = document.createElement("div");
      skipTurn.textContent = "Player 1 skipped their turn.";
      imageContainer.append(skipTurn);
      function eraseDiv() {
        skipTurn.style.display = "none";
      }
      setTimeout(eraseDiv, 3250);
    }
  });

  skip2.addEventListener("click", (e) => {
    if (e.target) {
      const skipTurn = document.createElement("div");
      skipTurn.textContent = "Player 2 skipped their turn.";
      imageContainer.append(skipTurn);
      function eraseDiv() {
        skipTurn.style.display = "none";
      }
      setTimeout(eraseDiv, 3250);
    }
  });
});
