import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "components/App";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// set up the common variable for each of test cases
let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/add a comment/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("udemy course template test 1", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   expect(div.innerHTML).toContain("CommentList");

//   ReactDOM.unmountComponentAtNode(div);
// });

it("shows a comment box", () => {
  // expect only one commentbox
  // assertion: expect(//test conditions).toEqual(//expect result)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  // expect only one commentbox
  // assertion: expect(//test conditions).toEqual(//expect result)
  expect(wrapped.find(CommentList).length).toEqual(1);
});
new RegExp("d(b+)d", "i");
