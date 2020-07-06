import React from "react";
import { mount } from "enzyme";
// use moxios to replace actual network calls as JSOM does not support those APIs.
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

// componnet to be mounted to the JSDOM
let wrapped;

beforeEach(() => {
  moxios.install();
  // find the request and substitutes the response with a mockup one
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "abc" }, { name: "123" }, { name: "XYZ" }],
  });

  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it("can fetch a list of comments and display them", (done) => {
  //console.log(wrapped.debug());
  wrapped.find("button").at(1).simulate("click");
  /*setTimeout(() => {
    // update the wrapper after the click event completes fetching data
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);
    console.log(wrapped.debug());
    done();
  }, 100);
  */
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);
    done();
  });
});
