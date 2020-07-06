import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";
import { saveComment } from "actions";

describe("CommentList", () => {
  let wrapped;
  beforeEach(() => {
    const initState = {
      comments: ["Comment 1", "ABC"],
    };

    wrapped = mount(
      <Root initState={initState}>
        <CommentList />
      </Root>
    );
  });

  it("shows a list of comments", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });

  it("creates an li element with expected content", () => {
    //expect(wrapped.find("li").get(1).props.children).toEqual("ABC");
    //console.log(wrapped.find("li").get(1));
    expect(wrapped.find("li").first().render().text()).toEqual("Comment 1");
    expect(wrapped.find("li").at(1).render().text()).toEqual("ABC");
  });
});
