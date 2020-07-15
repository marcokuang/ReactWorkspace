export default {
  first: function () {
    console.log("first method");
    return "first method";
  },
  second: function (e) {
    const string = `second thing is ${e.target.textContent}`;
    console.log(string);
    return string;
  },
};
