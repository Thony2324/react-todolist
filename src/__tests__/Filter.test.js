import React from "react";
import { shallow, mount } from "enzyme";
import Filter from "../components/Filter";

describe("<Filter />", () => {
  function makeRenderWithShallow(customProps) {
    return shallow(<Filter {...customProps} />);
  }

  function makeRenderWithMount(customProps) {
    return mount(<Filter {...customProps} />);
  }

  describe("Rendering", () => {
    it("should render correctly", () => {
      const wrapper = makeRenderWithShallow();
      expect(wrapper.exists()).toBe(true);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find("Button")).toHaveLength(3);
    });
  });

  describe("Interactions", () => {
    it("Should call method to filter all todos", () => {
      const mockFilterAllTodos = jest.fn();
      const wrapper = makeRenderWithMount({
        filterTodos: mockFilterAllTodos
      });
      const button = wrapper.find('[data-test-id="button-all"]');
      button.simulate("click");
      expect(mockFilterAllTodos).toHaveBeenCalledWith("all");
      expect(mockFilterAllTodos.mock.calls.length).toEqual(1);
    });

    it("Should call method to filter done todos", () => {
      const mockFilterDoneTodos = jest.fn();
      const wrapper = makeRenderWithMount({
        filterTodos: mockFilterDoneTodos
      });
      const button = wrapper.find('[data-test-id="button-done"]');
      button.simulate("click");
      expect(mockFilterDoneTodos).toHaveBeenCalledWith("done");
      expect(mockFilterDoneTodos.mock.calls.length).toEqual(1);
    });

    it("Should call method to filter not done todos", () => {
      const mockFilterNotDoneTodos = jest.fn();
      const wrapper = makeRenderWithMount({
        filterTodos: mockFilterNotDoneTodos
      });
      const button = wrapper.find('[data-test-id="button-notdone"]');
      button.simulate("click");
      expect(mockFilterNotDoneTodos).toHaveBeenCalledWith("notdone");
      expect(mockFilterNotDoneTodos.mock.calls.length).toEqual(1);
    });
  });

  describe("Lifecycle", () => {});
});
