import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
  };

  onSetAgeClick = (): void => {
    // console.log("hi sweety");
    this.model.setRandomAge();
    console.log(this.model.get("age"));
  };

  onSetNameClick = (): void => {
    // console.log("hi sweety");
    // find the input element to get the new name
    const input = this.parent.querySelector("input");
    // update the model
    if (input) {
      this.model.set({ name: input.value });
    }
  };

  bindEvents(fragment: DocumentFragment): void {
    // pull the current eventsMap for processing
    const eventsMap = this.eventsMap();

    // loop through the map to find attachable events
    for (let eventKey in eventsMap) {
      // process the keys to get event name and its element
      const [eventName, selector] = eventKey.split(":");
      // for each of the elements, add event listeners accordingly
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User Name: ${this.model.get("name")}</div>
      <div>User age: ${this.model.get("age")}</div>
      <input />
      <button class='set-name'>Set Name</button>
      <button class='set-age'>Set Age</button>
    </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
