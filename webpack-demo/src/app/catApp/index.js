import "../../main.scss";
import catImage from "../../assets/cat.jpg";
import catImage2 from "../../assets/cat2.jpg";
// const counter = document.getElementById("click-counter");
// const catImage = document.getElementById("cat-image");
// let count = 0;
// counter.innerText = `Current count: ${count}`;
// catImage.addEventListener("click", () => {
//   counter.innerText = `Current count: ${++count}`;
// });

produceCatClicker("Cat", catImage);
produceCatClicker("Cat 2", catImage2);

function produceCatClicker(name, pathToImage) {
  const id = name.toLowerCase().replace(" ", "");
  const root = document.getElementById("root");
  const fragment = document.createDocumentFragment();
  let catImageElements;
  let counterElements;
  fragment.appendChild(generateImageTitle(name));
  catImageElements = generateImageBy(id, pathToImage);
  fragment.appendChild(catImageElements);
  counterElements = generateCounterWithImageId(id);
  fragment.appendChild(counterElements);
  catImageElements.addEventListener("click", () => {
    increaseCounter(id);
  });
  root.appendChild(fragment);
}

function generateImageTitle(name) {
  const wrapper = document.createElement("div");
  const title = document.createElement("h3");
  wrapper.className = "p-2 align-self-center";
  title.innerText = name;
  wrapper.appendChild(title);
  return wrapper;
}

function generateImageBy(id, path) {
  const wrapper = document.createElement("div");
  const image = document.createElement("img");
  wrapper.className = "p-2 align-self-center";
  wrapper.id = "image-" + id;
  image.src = path;
  wrapper.appendChild(image);
  return wrapper;
}

function generateCounterWithImageId(id) {
  const wrapper = document.createElement("div");
  const counter = document.createElement("h3");
  wrapper.className = "p-2 align-self-center";
  counter.id = "counter-" + id;
  counter.innerText = 0;
  wrapper.appendChild(counter);
  return wrapper;
}

function increaseCounter(id) {
  const counterId = `counter-${id}`;
  let counter = document.getElementById(counterId);
  ++counter.innerText;
}
