import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { Foo } from "@/components/Foo";

describe("<Foo />", () => {
  it("pタグが1つある", () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find("p").length).toBe(1);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Foo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
