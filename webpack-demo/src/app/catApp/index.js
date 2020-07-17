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

// initial state
const cats = [
  {
    name: "Cat",
    url: catImage,
    counts: 0,
  },
  {
    name: "Cat 2",
    url: catImage2,
    counts: 0,
  },
  {
    name: "Cat 3",
    url: catImage3,
    counts: 0,
  },
];

let model = {
  cats: [],
  selectedCat: {},
  getCats: function () {
    return cats;
  },
  getSelectedCat: function () {
    return this.selectedCat;
  },
  setSelectedCat: function (cat) {
    this.selectedCat = cat;
  },
  init: function () {
    this.cats = cats;
  },
};

let octopus = {
  init: function () {
    model.init();
    listView.init();
    catView.init();
  },
  getCats: function () {
    return model.getCats();
  },
  setSelectedCat: function (cat) {
    if (model.getSelectedCat() !== cat) {
      model.setSelectedCat(cat);
      catView.render();
    }
  },
  getSelectedCat: function () {
    return model.getSelectedCat();
  },
};

let listView = {
  init: function () {
    this.constructListUsing(octopus.getCats());
  },
  constructListUsing: function (cats) {
    const list = document.getElementById("catList");
    const frag = document.createDocumentFragment();
    const wrapper = document.createElement("ul");
    wrapper.className = "list-group";
    cats.forEach((cat) => {
      let childNode = document.createElement("li");
      childNode.className = "list-group-item";
      childNode.innerText = cat.name;
      childNode.addEventListener("click", () => {
        // when the cat from the menu list is clicked, it calls the controllers to set the selected cat
        // during init, the onClick listener function has the context of the cat, thanks to closure
        octopus.setSelectedCat(cat);
      });
      wrapper.appendChild(childNode);
    });
    frag.appendChild(wrapper);
    list.appendChild(frag);
  },
};

let catView = {
  init: function () {
    //octopus.setSelectedCat(cat);
    // when init, the cat view will show the first cat image
    octopus.setSelectedCat(octopus.getCats()[0]);
  },

  render: function () {
    const root = document.getElementById("root");
    root.innerHTML = "";
    let cat = octopus.getSelectedCat();
    produceCatClicker(cat);

    function produceCatClicker(cat) {
      const { name, url, counts } = cat;
      const id = name.toLowerCase().replace(" ", "");
      const root = document.getElementById("root");
      const fragment = document.createDocumentFragment();
      let catImageElements;
      let counterElements;
      fragment.appendChild(generateImageTitle(name));
      catImageElements = generateImage(id, url);
      fragment.appendChild(catImageElements);
      counterElements = generateCounterWithImageId(counts);
      fragment.appendChild(counterElements);
      catImageElements.addEventListener("click", () => {
        increaseCounter(cat);
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

    function generateImage(id, path) {
      const wrapper = document.createElement("div");
      const image = document.createElement("img");
      wrapper.className = "p-2 align-self-center";
      wrapper.id = "image-" + id;
      image.src = path;
      wrapper.appendChild(image);
      return wrapper;
    }

    function generateCounterWithImageId(count) {
      const wrapper = document.createElement("div");
      const counterLabel = document.createElement("h3");
      const counter = document.createElement("h3");

      wrapper.className = "d-flex";
      counterLabel.innerText = "Counts: ";
      counterLabel.className = "p-2";
      // counter.id = "counter-" + id;
      counter.className = "p-2";
      counter.innerText = count;
      wrapper.appendChild(counterLabel);
      wrapper.appendChild(counter);
      return wrapper;
    }

    function increaseCounter(cat) {
      // const counterId = `counter-${cat.id}`;
      // let counter = document.getElementById(counterId);
      // ++counter.innerText;
      cat.counts++;
      catView.render();
    }
  },
};

octopus.init();
