import React from "react";
import useResource from "./useResources";

// resource is passed as a prop

const ResourceList = (props) => {
  const { resource } = props;
  // console.log(props);
  // Use Hook
  // initialize the state of resources with empty array and setup the setter method
  const resources = useResource(resource);

  return (
    <ul>
      {resources.map((record) => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
