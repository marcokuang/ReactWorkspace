import { UserEdit } from "./views/UserEdit";
import { UserProps, User } from "./models/User";

const user1 = User.buildUser({ name: "HEHE", age: 9 });
const root = document.getElementById("root");

const userEdit = new UserEdit(root, user1);
setTimeout(() => {
  userEdit.render();
  console.log(userEdit);
}, 600);
