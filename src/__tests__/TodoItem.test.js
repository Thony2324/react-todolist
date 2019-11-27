import React from "react";
import { shallow, mount } from "enzyme";
import TodoItem from "../components/TodoItem";

describe("<TodoItem />", () => {
  function makeRenderWithShallow(customProps) {
    return shallow(<TodoItem {...customProps} />);
  }

  function makeRenderWithMount(customProps) {
    return mount(<TodoItem {...customProps} />);
  }

  describe("Rendering", () => {
    it("should render correctly", () => {
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: false
        }
      });
      expect(wrapper.exists()).toBe(true);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find("li")).toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(1);
      expect(wrapper.find("span")).toHaveLength(1);
      expect(wrapper.find("Button")).toHaveLength(1);
    });

    it("should have an input checkbox", () => {
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: false
        }
      });
      const checkbox = wrapper.find("input").is({ type: "checkbox" });
      expect(checkbox).toBe(true);
    });

    it("should render the text in span", () => {
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: false
        }
      });
      expect(wrapper.find("span").text()).toEqual("Just do it");
    });

    it("should have the class done when checked", () => {
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: true
        }
      });
      expect(wrapper.find("span").hasClass("done")).toBe(true);
    });
  });

  describe("Interactions", () => {
    it("should call the markAsDone function", () => {
      const mockMarkAsDone = jest.fn();
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: false
        },
        markAsDone: mockMarkAsDone
      });
      const input = wrapper.find("input").at(0);
      input.simulate("change");
      expect(mockMarkAsDone).toHaveBeenCalled();
    });

    it("should check the input", () => {
      const mockMarkAsDone = jest.fn();
      const wrapper = makeRenderWithShallow({
        todo: {
          title: "Just do it",
          done: true
        },
        markAsDone: mockMarkAsDone
      });
      const input = wrapper.find("input").at(0);
      input.simulate("change", {
        target: { checked: "checked" }
      });
      expect(wrapper.find("input").prop("checked")).toEqual("checked");
    });

    it("should delete todo on click button", () => {
      const mockDeleteTodo = jest.fn();
      const wrapper = makeRenderWithMount({
        todo: {
          title: "Just do it",
          done: false
        },
        deleteTodo: mockDeleteTodo
      });
      //console.log(wrapper.debug());
      const button = wrapper.find("Button");
      button.simulate("click");
      expect(mockDeleteTodo).toHaveBeenCalled();
      expect(mockDeleteTodo.mock.calls.length).toEqual(1);
    });
  });

  describe("Lifecycle", () => {});
});
