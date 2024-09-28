// 1 Завдання

const images = document.querySelectorAll(".gallery .image");
let indexGallery = 0;

function showModal(index) {
  const modal = document.createElement("div");
  modal.className = "full-image-container";
  modal.innerHTML = `<img class="full-image" src="${images[index].src}">`;
  modal.style.display = "flex";

  modal.onclick = () => {
    modal.remove();
  };

  document.body.appendChild(modal);
}

function changeImage(direction) {
  indexGallery = (indexGallery + direction + images.length) % images.length;
  document.querySelector(".full-image").src = images[indexGallery].src;
}

images.forEach((img, index) => {
  img.onclick = () => {
    indexGallery = index;
    showModal(indexGallery);
  };
});

document.addEventListener("keydown", (e) => {
  if (document.querySelector(".full-image")) {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
  }
});

// 2 Завдання

const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const numberInput = document.querySelector("input");
const colorBox = document.querySelector("#boxes");
let a = 30;
let number = 0;
let result = "";
const createBoxes = function (amount) {
  for (let i = 0; i < amount; i++) {
    result += `<div style="width: ${a}px; height: ${a}px; background-color: rgb(${Math.floor(
      Math.random() * (256 - 0) + 0
    )}, ${Math.floor(Math.random() * (256 - 0) + 0)}, ${Math.floor(
      Math.random() * (256 - 0) + 0
    )})"></div>`;
    a += 5;
  }
  return result;
};
const destroyBoxes = function () {
  colorBox.innerHTML = "";
  result = "";
  a = 30;
};
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
renderBtn.addEventListener("click", () => {
  colorBox.innerHTML = createBoxes(numberInput.value);
  numberInput.value = 0;
});
