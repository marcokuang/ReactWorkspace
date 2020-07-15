import code from "./codeSnippets";

class Code {
  constructor() {
    this.buttonsDiv = document.getElementById("buttons");
  }

  getHTMLforButtons() {
    const objArray = Object.entries(code);
    const frag = document.createDocumentFragment();
    objArray.forEach(([key, value], index) => {
      let wrapper = document.createElement("div");
      let button = document.createElement("button");
      button.innerText = key;
      button.addEventListener("click", value);
      button.className = "btn btn-primary";
      if (index % 5 === 0) {
        let divider = document.createElement("div");
        divider.className = "w-100";
        wrapper.appendChild(divider);
      }
      wrapper.appendChild(button);
      wrapper.className = "col-1";
      frag.appendChild(wrapper);
    });

    return frag;
  }

  run() {
    const objArray = Object.entries(code);
    console.log(objArray);
    this.buttonsDiv.appendChild(this.getHTMLforButtons());
  }
}

export default Code;
