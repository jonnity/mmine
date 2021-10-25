import { mount } from "@vue/test-utils";
import Main from "@/components/Main.vue";

describe("Main", () => {
  test("", () => {
    const wrapper = mount(Main);
    expect(wrapper.html()).toBe("<h1>Hello Nuxt</h1>");
  });
});
