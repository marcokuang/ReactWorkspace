import { UserForm } from "./views/UserForm";
import { UserProps, User } from "./models/User";

const user1 = User.buildUser({ id: 1 });
user1.fetch();
console.log(user1.get("name"));

const userForm = new UserForm(document.getElementById("root"), user1);
setTimeout(() => {
  userForm.render();
}, 600);
