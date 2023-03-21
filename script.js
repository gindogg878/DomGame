//create an object with categoryname and array of category images//
const gallery = [
  {
    text: "animals",
    gallery: [
      { text: "elephant", link: "https://imgur.com/a/NffYuY6" },
      { text: "zebra", link: "https://imgur.com/a/6xWnk4G" },
      { text: "tiger", link: "https://imgur.com/a/vczJHh8" },
    ],
  },
  { text: "people", galery: [""] },
  { text: "places", gallery: [""] },
];
console.log(gallery);

const imageContainer = document.getElementById("imageContainer");
const lowerPage = document.getElementById("lowerPage");
const selectCat = document.getElementById("randomCat");
const eraseH1 = document.querySelector("#start");
const filter = document.getElementById("filter");
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
    let selectPic = (lowerPage.style.display = "flex");
    //possibly add the random choice before the random category//
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);
    selectCat.textContent = gallery[choice].text;
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
});
