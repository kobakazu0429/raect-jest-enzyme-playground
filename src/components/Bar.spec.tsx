import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { Bar, IProps } from "@/components/Bar";

const initialProps: IProps = { name: "Taro", age: 10 };

describe("<Bar />", () => {
  const wrapper = shallow(<Bar {...initialProps} />);
  it("pタグが2つある", () => {
    expect(wrapper.find("p").length).toBe(2);
  });

  it("inputタグが1つある", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("#name with initialProps", () => {
    expect(wrapper.find("#name").text()).toBe(`name: ${initialProps.name}`);
  });

  it("#age with initialProps", () => {
    expect(wrapper.find("#age").text()).toBe(`age: ${initialProps.age}`);
  });

  it("#age with setAge()", () => {
    expect(wrapper.find("#age").text()).toBe(`age: ${initialProps.age}`);

    const newAge = 21;
    wrapper.find("input").simulate("change", {
      target: {
        value: newAge
      }
    });
    expect(wrapper.find("#age").text()).toBe(`age: ${newAge}`);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Bar {...initialProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
