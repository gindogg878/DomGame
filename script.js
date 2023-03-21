const imageGal = [];
const imageContainer = document.getElementById("imageContainer");
const lowerPage = document.getElementById("lowerPage");
const eraseH1 = document.querySelector("#start");
console.log(eraseH1);

eraseH1.addEventListener("click", (e) => {
  if (e.target) {
    eraseH1.remove();
    imageContainer.style.display = "flex";
    lowerPage.style.display = "flex";
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
