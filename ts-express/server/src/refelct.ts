import "reflect-metadata";

const plane = {
  color: "red",
};

class Plane {
  @markFunction("121")
  fly() {
    console.log("I am flying!");
  }
}

function markFunction(secretInfo: string) {
  return function (
    target: any,
    key: string,
    PropertyDescriptor: PropertyDescriptor
  ) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

Reflect.defineMetadata("note", "hello", plane);
console.log(Reflect.getMetadata("note", plane));

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret);
