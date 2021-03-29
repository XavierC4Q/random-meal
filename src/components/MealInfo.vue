<template>
  <div
    class="flex sm:flex-row flex-col sm:w-4/5 mt-4 sm:justify-between mx-auto flex-wrap"
  >
    <h4><span class="font-bold font-mono">Region:</span> {{ meal.strArea }}</h4>
    <h4>
      <span class="font-bold font-mono">Category:</span>
      {{ meal.strCategory }}
    </h4>
  </div>
  <youtube-iframe :video-id="videoId"></youtube-iframe>
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
    videoId: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="css">
@media screen and (min-width: 768px) {
  h4 {
    min-width: 50%;
  }
}

#vue-youtube-iframe-1, #vue-youtube-iframe-2 {
  width: 100% !important;
  padding: 0px 16px;
}
</style>