const imageGal = [];

const eraseH1 = document.querySelector("#start");
console.log(eraseH1);

eraseH1.addEventListener("click", (e) => {
  if (e.target) {
    eraseH1.remove();
  }
  const addDiv = document.createElement("div");
  addDiv.setAttribute("id", "imageContainer");

  document.body.append(addDiv);
  const addImage = document.createElement("img");
  addImage.setAttribute("src", "elephant.jpg");
  addImage.setAttribute("id", blur);
  addImage.style.filter = "blur(75px)";
  //using zIndex will place the image behind the following element with a negative number//
  //   addImage.style.zIndex = "-1";
  addDiv.appendChild(addImage);
  const addFilter = document.createElement("div");
  addFilter.setAttribute("id");
  addImage.addEventListener("click", (e) => {
    if (e.target) {
    }
  });
});
