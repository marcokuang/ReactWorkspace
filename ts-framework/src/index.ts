import { User } from "./models/User";
// import axios from "axios";

let user1 = new User({ name: "marco", age: 20 });
user1.set({ name: "new Marco", age: 18 });
user1.set({ name: "Erika" });
let empty = new User({ id: 1 });
console.log(empty);

// declare global {
//   interface Window {
//     myUser: User;
//   }
// }
declare global {
  var myUser: User;
}
window.myUser = empty;
empty.on("click", () => {
  console.log("clicked!");
});

// axios.post("http://localhost:3001/users", { name: "old marco", age: 20 });
empty.fetch();
console.log(user1.get("name"), user1.get("age"));
