import React from "react";
import { shallow } from "enzyme";
import AddTodo from "../components/AddTodo";

describe("<AddTodo />", () => {
  function makeRender(customProps) {
    return shallow(<AddTodo {...customProps} />);
  }

  describe("rendering", () => {
    it("should render correctly", () => {
      const wrapper = makeRender();
      expect(wrapper.exists()).toBe(true);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find("form")).toHaveLength(1);
      expect(wrapper.find("label")).toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(1);
      expect(wrapper.find("Button")).toHaveLength(1);
    });
  });

  describe("interactions", () => {
    it("should change the state on input change", () => {
      const wrapper = makeRender();
      const input = wrapper.find("input").at(0);
      input.simulate("change", {
        target: { value: "Learn PHP" }
      });
      expect(wrapper.state("title")).toEqual("Learn PHP");
      // input.instance().value = "Learn PHP";
      // input.simulate("change");
      // expect(wrapper.state().title).toEqual("Learn PHP");
    });

    it("should prevent default on submit form", () => {
      const event = {
        preventDefault: jest.fn()
      };
      const mockAddTodo = jest.fn();
      const wrapper = makeRender({ addTodo: mockAddTodo });
      //const spy = jest.spyOn(wrapper.instance(), "setState");
      wrapper.find("form").simulate("submit", event);
      // Test prevent default
      expect(event.preventDefault).toHaveBeenCalled();
      // Test reinit state
      expect(wrapper.state().title).toEqual("");
      //expect(spy).toHaveBeenCalledWith({ title: "" });
      // Test call addTodo
      expect(mockAddTodo).toHaveBeenCalled();
    });
  });
});
