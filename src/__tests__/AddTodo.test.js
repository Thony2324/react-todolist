import React from "react";
import { shallow } from "enzyme";
import AddTodo from "../components/AddTodo";

describe("AddTodo component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
