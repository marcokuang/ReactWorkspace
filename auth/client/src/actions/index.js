import axios from "axios";

export const signUp = (user) => (dispatch) => {
  axios
    .post("http://localhost:4000/signup", user)
    .then((response) => {
      console.log(response);
      dispatch({
        type: "SIGN_UP",
        payload: user.email,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
