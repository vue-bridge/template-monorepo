import { mount, nextTick } from "@vue-bridge/testing";
import { describe, it, expect } from "vitest";
import Input from "../components/MyInput.vue";

describe("Input", () => {
  it("v-model works", async () => {
    const newValue = "Hello You!";

    // mount() has the sameAPI as `@vue/test-utils@2` (for Vue 3)
    const wrapper = mount(Input, {
      // @ts-ignore - would be propsData in normal vue 2 test-utils
      props: {
        modelValue: "Hello World",
      },
    });

    // We use `nextTick` from `@vue-bridge/testing` because we can't import it in an interoperable way from 'vue'
    await nextTick();

    const input = wrapper.find("input");
    expect(wrapper.props().modelValue).toBe("Hello World");
    expect((wrapper.vm as any).model).toBe("Hello World");
    expect((input!.element as HTMLInputElement).value).toBe("Hello World");

    input.setValue(newValue);
    await nextTick();

    expect(wrapper.emitted()["update:modelValue"]?.length).toEqual(1);
    expect((wrapper.emitted()["update:modelValue"]?.[0] as any)?.[0]).toEqual(
      newValue
    );
  });
});
