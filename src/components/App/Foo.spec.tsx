import React from "react";
import { mount } from "enzyme";

import { Foo } from "@/components/Foo";

describe("<Foo />", () => {
  it("pタグが1つある", () => {
    const wrapper = mount(<Foo />);
    expect(wrapper.find("p").length).toBe(1);
  });
});
