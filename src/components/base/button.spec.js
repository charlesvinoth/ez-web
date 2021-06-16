import Vue from "vue";

import { render } from "@testing-library/vue";
import { Quasar, QBtn, QIcon } from "quasar";
import BaseButton from "./button";

Vue.use(Quasar, { components: { QBtn, QIcon } });

const _render = function (props) {
  return render(BaseButton, {
    props: { label: "button", ...props },
  });
};

describe("BaseButton", () => {
  it("check defaults", () => {
    const wrapper = _render();
    wrapper.getByText("button");

    expect(wrapper.container.querySelector("i")).toBeNull(); // should not render icons

    expect(wrapper.container.querySelector("svg")).toBeNull(); // should not render loading spinner

    expect(wrapper.container.querySelector("button")).not.toHaveAttribute(
      "disabled"
    ); // should not be in disabled state

    expect(wrapper.container.querySelector("button")).toHaveClass("bg-primary"); // should have default color

    expect(wrapper.container.querySelector("button")).not.toHaveClass(
      "q-btn--rounded q-btn--flat q-btn--no-uppercase"
    ); // should not have rounded style, flat style and should have uppercase label
  });

  it("left icon", () => {
    const wrapper = _render({ iconLeft: "eva-cloud-outline" });

    expect(wrapper.container.querySelector("i")).toHaveClass(
      "eva-cloud-outline"
    );
  });

  it("right icon", () => {
    const wrapper = _render({ iconRight: "eva-cube-outline" });

    expect(wrapper.container.querySelector("i")).toHaveClass(
      "eva-cube-outline"
    );
  });

  it("spinner", () => {
    const wrapper = _render({ isLoading: true });
    expect(wrapper.container.querySelector("svg")).toHaveClass("q-spinner");
  });

  it("disable", () => {
    const wrapper = _render({ isDisabled: true });
    expect(wrapper.container.querySelector("button")).toHaveAttribute(
      "disabled"
    );
  });

  it("flat", () => {
    const wrapper = _render({ isFlat: true });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "q-btn--flat"
    );
  });

  it("color", () => {
    const wrapper = _render({ color: "secondary" });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "bg-secondary"
    );
  });

  it("rounded", () => {
    const wrapper = _render({ isRounded: true });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "q-btn--rounded"
    );
  });

  it("no uppercase label", () => {
    const wrapper = _render({ noCaps: true });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "q-btn--no-uppercase"
    );
  });
});
