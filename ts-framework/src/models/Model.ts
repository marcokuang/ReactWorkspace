import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  /** direct passthrough of arguments to the composed module
   *  ---- usuall implementation using the same function signature
   * on(eventName: string, callback: Callback): void {
   *   this.events.on(eventName, callback);
   * }
   */

  // we can use the accessor to simplify the syntax of direct passthrough
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((res) => {
      console.log("Fetched", res);
      this.set(res.data);
    });
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        console.error("OMG!");
        this.trigger("error");
      });
  }
}
