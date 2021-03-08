import { mount } from "@vue/test-utils";
import Meal from "../components/Meal.vue";

describe("Meal Test Suite", () => {
  test("mounts Meal successfully", () => {
    const wrapper = mount(Meal);
    wrapper.get("#meal-vue");
  });
});
