import "../../main.scss";
import catImage from "../../assets/cat.jpg";
import catImage2 from "../../assets/cat2.jpg";
import catImage3 from "../../assets/cat3.jpg";
// const counter = document.getElementById("click-counter");
// const catImage = document.getElementById("cat-image");
// let count = 0;
// counter.innerText = `Current count: ${count}`;
// catImage.addEventListener("click", () => {
//   counter.innerText = `Current count: ${++count}`;
// });

const cats = [
  {
    name: "Cat",
    url: catImage,
  },
  {
    name: "Cat 2",
    url: catImage2,
  },
  {
    name: "Cat 3",
    url: catImage3,
  },
];

constructListUsing(cats);

function constructListUsing(cats) {
  const list = document.getElementById("catList");
  const frag = document.createDocumentFragment();
  const wrapper = document.createElement("ul");
  wrapper.className = "list-group";
  cats.forEach((cat) => {
    let childNode = document.createElement("li");
    childNode.className = "list-group-item";
    childNode.innerText = cat.name;
    childNode.addEventListener("click", (event) => {
      // console.log("heheh");
      canvasDrawCat(event, cat);
    });
    wrapper.appendChild(childNode);
  });
  frag.appendChild(wrapper);
  list.appendChild(frag);
}

function canvasDrawCat(event, cat) {
  const currentCatElem = document.getElementById("title");
  const currentCatTitle = currentCatElem ? currentCatElem.innerText : "empty";

  const root = document.getElementById("root");
  let selectedCat = event.target.innerText;

  if (selectedCat !== currentCatTitle) {
    root.innerHTML = "";
    produceCatClicker(cat.name, cat.url);
  }
}

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
  title.id = "title";
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
  const counterLabel = document.createElement("h3");
  const counter = document.createElement("h3");

  wrapper.className = "d-flex";
  counterLabel.innerText = "Counts: ";
  counterLabel.className = "p-2";
  counter.id = "counter-" + id;
  counter.className = "p-2";
  counter.innerText = 0;
  wrapper.appendChild(counterLabel);
  wrapper.appendChild(counter);
  return wrapper;
}

function increaseCounter(id) {
  const counterId = `counter-${id}`;
  let counter = document.getElementById(counterId);
  ++counter.innerText;
}
