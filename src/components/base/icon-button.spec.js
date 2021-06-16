import Vue from "vue";

import { render } from "@testing-library/vue";
import { Quasar, QBtn, QIcon } from "quasar";
import BaseIconButton from "./icon-button.vue";

Vue.use(Quasar, { components: { QBtn, QIcon } });

const _render = (props) => {
  return render(BaseIconButton, {
    props: {
      icon: "eva-cloud-upload-outline",
      ...props,
    },
  });
};

describe("BaseIconButton", () => {
  it("defaults", () => {
    const wrapper = _render();

    expect(wrapper.container.querySelector("i")).toHaveClass(
      "eva-cloud-upload-outline"
    );

    expect(wrapper.container.querySelector("svg")).toBeNull(); // should not render loading spinner

    expect(wrapper.container.querySelector("button")).not.toHaveAttribute(
      "disabled"
    ); // should not be in disabled state

    expect(wrapper.container.querySelector("button")).toHaveClass("bg-primary"); // should have default color

    expect(wrapper.container.querySelector("button")).not.toHaveClass(
      "q-btn--flat"
    ); // should not have flat style
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

  it("dense", () => {
    const wrapper = _render({ isDense: true });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "q-btn--dense"
    );
  });

  it("color", () => {
    const wrapper = _render({ color: "secondary" });
    expect(wrapper.container.querySelector("button")).toHaveClass(
      "bg-secondary"
    );
  });
});
