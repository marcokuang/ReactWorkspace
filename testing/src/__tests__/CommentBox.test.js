import React from "react";
import { mount } from "enzyme";
// import App from "components/App";
import CommentBox from "components/CommentBox";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";

// componnet to be mounted to the JSDOM
let wrapped;

beforeEach(() => {
  // set up the tests by mounting the component to the JSDOM
  wrapped = mount(
    <Provider store={createStore(reducers)}>
      <CommentBox />
    </Provider>
  );
});

// To clean up of the component is done in afterEach funtion
afterEach(() => {
  wrapped.unmount();
});

it("shows a text area and a submit button", () => {
  // asserts the text area exists on the DOM
  expect(wrapped.find("textarea").length).toEqual(1);
  // asserts the button exists on the DOM
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    let textArea = wrapped.find("textarea");
    //simulate a change event -> it's a FAKE event
    //    textArea.simulate('change')
    //provide a fake event object -> second argument is a mock-up event object
    textArea.simulate("change", {
      target: {
        value: "new comment",
      },
    });
    // force the component to update -> React will use batch update for the setState() method,
    // therefore we need to force component to update
    // NOTE: can only be called on a wrapper instance that is also the root instance.
    wrapped.update();
  });

  it("handles a change of text in the text area", () => {
    //find the textarea element

    let textArea = wrapped.find("textarea");
    // assert the textarea's value has changed
    expect(textArea.prop("value")).toEqual("new comment");
  });

  it("submits the form and the textarea is empty", () => {
    // simulate the button is clicked
    let form = wrapped.find("form");
    form.simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
