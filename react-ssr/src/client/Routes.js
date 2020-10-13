import React from "react";
import Home from "../pages/HomePage";
import UsersList from "../pages/UsersListPage";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

export default [
  {
    path: "/",
    exact: true,
    ...Home,
  },
  {
    path: "/users",
    ...UsersList,
  },
];
