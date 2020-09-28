// type alias
export type Callback = () => void;
export class Eventing {
  events: {
    [myKey: string]: Callback[];
  } = {};

  on = (eventName: string, callback: Callback): void => {
    // if (this.events[eventName]) {
    //   this.events[eventName].push(callback);
    // } else {
    //   this.events[eventName] = [];
    //   this.events[eventName].push(callback);
    // }
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
