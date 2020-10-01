import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  regions: { [key: string]: Element } = {};

  regionsMap(): { [key: string]: string } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }
  abstract template(): string;

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
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

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    // nesting process of the elements
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
