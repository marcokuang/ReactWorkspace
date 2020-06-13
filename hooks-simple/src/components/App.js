import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  // Array destructuring: same as const resource = useState('posts')[0];
  const [resource, setResource] = useState("posts");
  // console.log(useState("posts"));
  // everything the state value is updated, the component is going to automatically re-render

  return (
    <div className="App">
      <div>
        <button onClick={() => setResource("Posts")}>Posts</button>
        <button onClick={() => setResource("Todos")}>Todos</button>
      </div>
      <UserList />
      <ResourceList
        resource={resource}
        uselessProp={["red", "blue", "green"]}
      />
    </div>
  );
};

export default App;
