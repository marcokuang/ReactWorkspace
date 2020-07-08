import schema from "./stateSchema";
import Ajv from "ajv";

export default (store) => (next) => (action) => {
  // debugger;
  console.log("previous state", store.getState());
  const temp = next({ ...action, payload: "modified" });
  console.log("next state", store.getState());
  // debugger;
  //validation happens after the action has gone through all other middlewares and reached the reducers.
  const ajv = new Ajv({ allErrors: true });
  const test = ajv.compile(schema);
  // validating the current state of the store
  const isValid = test(store.getState());
  console.log(temp);
  console.log("Validator::" + isValid);
  if (!isValid) {
    console.warn("invalid state detected");
  }

  // const temp2 = next(action);
  // console.log(temp2);

  //return next({ ...action, payload: "modified" });
};
