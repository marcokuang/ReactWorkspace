import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveUserClick,
    };
  }

  onSaveUserClick = (): void => {
    this.model.save();
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

  template(): string {
    return `
    <div>
      <input placeholder='${this.model.get("name")}'/>
      <button class='set-name'>Set Name</button>
      <button class='set-age'>Set Age</button>
      <button class='save-model'>Save User</button>
    </div>
    `;
  }
}
