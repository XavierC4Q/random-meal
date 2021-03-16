<template>
  <div
    class="flex sm:flex-row flex-col sm:w-4/5 mt-4 sm:justify-between mx-auto"
  >
    <h4><span class="font-bold font-mono">Region:</span> {{ meal.strArea }}</h4>
    <h4>
      <span class="font-bold font-mono">Category:</span>
      {{ meal.strCategory }}
    </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { IMeal } from "../types/index";

export default defineComponent({
  name: "MealInfo",
  props: {
    meal: {
      type: Object as () => IMeal,
      required: true,
    },
  },
});
</script>