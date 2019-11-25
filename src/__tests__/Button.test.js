import React from "react";
import { shallow } from "enzyme";
import Button from "../components/Button";

describe("Button component", () => {
  //   beforeEach(() => {
  //     wrapper = shallow(<Button />); // shallow permet de tester en isolation un composant React (sans état)
  //   });

  it("should render correctly", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find(".btn")).toHaveLength(1);
  });

  it("should have the 'btn-primary' class", () => {
    const className = "btn-primary";
    const wrapper = shallow(<Button className={className} color="primary" />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it("should have the 'float-right' class when the props position 'right' is passed to the component", () => {
    const expectedClassName = "float-right";
    const wrapper = shallow(
      <Button className={expectedClassName} position="right" />
    );
    expect(wrapper.hasClass(expectedClassName)).toBe(true);
  });

  it("shouldn't have the 'float-right' class when the props position 'center' is passed to the component", () => {
    const expectedClassName = "float-right";
    const wrapper = shallow(
      <Button className={expectedClassName} position="center" />
    );
    expect(wrapper.hasClass(expectedClassName)).toBe(false);
  });

  it("shouldn't have the 'float-left' class when no props position is passed to the component", () => {
    const expectedClassName = "float-left";
    const wrapper = shallow(<Button className={expectedClassName} />);
    expect(wrapper.hasClass(expectedClassName)).toBe(false);
  });

  it("should render correctly the type of button", () => {
    const wrapper = shallow(<Button type="submit" />);
    expect(wrapper.props().type).toEqual("submit");
  });

  it("should display the label", () => {
    const wrapper = shallow(<Button label="Add" />);
    expect(typeof wrapper.text()).toBe("string");
    expect(wrapper.text()).toEqual("Add");
  });

  it("should call mock function twice on button click", () => {
    const mockFnClick = jest.fn();
    const wrapper = shallow(<Button handleClick={mockFnClick} />);
    wrapper.simulate("click");
    wrapper.simulate("click");
    expect(mockFnClick).toHaveBeenCalled();
    expect(mockFnClick.mock.calls.length).toEqual(2); // car 2 clicks simulés
  });
});
