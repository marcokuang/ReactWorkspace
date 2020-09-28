import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  // optional property
  id?: number;
  name?: string;
  age?: number;
}

/**
 *  Demo, User class will utilize the composition concept
 *
 *  attributes: Attributes => Gives ability to store properties tied to the user (name, age, etc)
 *  events: Events => Gives ability to tell other parts of app whenever data tied to a particular user is changes
 *  sync: Sync => Give ability to save the person data to remote server, then get in the future
 *
 */

const rootUrl = "http://localhost:3001/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, User.buildUser);
  }

  setRandomAge(): void {
    const age = Math.random() * 100;
    this.set({ age: Math.floor(age) });
  }
}
