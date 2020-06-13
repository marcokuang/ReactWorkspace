import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
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

  return resources;
};

export default useResources;
