import axios, { AxiosResponse } from "axios";

interface UserProps {
  // optional property
  id?: number;
  name?: string;
  age?: number;
}

// type alias
type Callback = () => void;

export class User {
  events: {
    [myKey: string]: Callback[];
  } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    // if (this.events[eventName]) {
    //   this.events[eventName].push(callback);
    // } else {
    //   this.events[eventName] = [];
    //   this.events[eventName].push(callback);
    // }
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    const serverGetString = `http://localhost:3003/users/${this.get("id")}`;
    axios.get(serverGetString).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3003/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3003/users`, this.data);
    }
  }
}
