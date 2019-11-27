import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "../components/Button";

describe("<Button />", () => {
  function makeRender(customProps) {
    return shallow(<Button {...customProps} />);
  }

  describe("Rendering", () => {
    it("should render correctly", () => {
      const wrapper = makeRender();
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find("button")).toHaveLength(1);
      expect(wrapper.find(".btn")).toHaveLength(1);
    });

    it("should have the 'btn-primary' class", () => {
      const wrapper = makeRender({ color: "primary" });
      expect(wrapper.hasClass("btn-primary")).toBe(true);
    });

    it("should have the 'float-right' class when the props position 'right' is passed to the component", () => {
      const wrapper = makeRender({ position: "right" });
      expect(wrapper.hasClass("float-right")).toBe(true);
    });

    it("shouldn't have the 'float-right' class when the props position 'center' is passed to the component", () => {
      const wrapper = makeRender({ position: "center" });
      expect(wrapper.hasClass("float-right")).toBe(false);
    });

    it("shouldn't have the 'float-left' class when no props position is passed to the component", () => {
      const wrapper = makeRender();
      expect(wrapper.hasClass("float-left")).toBe(false);
    });

    it("should render correctly the type of button", () => {
      const wrapper = makeRender({ type: "submit" });
      expect(wrapper.props().type).toEqual("submit");
    });

    it("should display the label", () => {
      const wrapper = makeRender({ label: "Add" });
      expect(typeof wrapper.text()).toBe("string");
      expect(wrapper.text()).toEqual("Add");
    });

    it("matches the snapshot", () => {
      const button = create(
        <Button type="submit" label="Add" color="primary" />
      );
      expect(button.toJSON()).toMatchSnapshot();
    });
  });

  describe("Interactions", () => {
    it("should call mock function twice on button click", () => {
      const mockFnClick = jest.fn();
      const wrapper = makeRender({ handleClick: mockFnClick });
      wrapper.simulate("click");
      wrapper.simulate("click");
      expect(mockFnClick).toHaveBeenCalled();
      expect(mockFnClick.mock.calls.length).toEqual(2); // car on simule 2 clicks
    });
  });
});
