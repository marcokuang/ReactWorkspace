import React, { useState, useEffect } from "react";
import axios from "axios";

// resource is passed as a prop
const ResourceList = (props) => {
  const { resource } = props;
  console.log(props);
  // Use Hook
  // initialize the state of resources with empty array and setup the setter method
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    // same as updating the state by calling setState() in class based component
    setResources(response.data);
  };

  // the second argument is the dependency:
  // only if the resource prop has updated, the effect will be recreated.
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map((record) => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
