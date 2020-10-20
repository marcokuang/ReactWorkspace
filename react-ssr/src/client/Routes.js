import React from "react";
import App from "./App";
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
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...Home,
      },
      {
        path: "/users",
        ...UsersList,
      },
    ],
  },
];
