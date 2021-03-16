<template>
  <div>
    <h1 class="font-mono capitalize font-bold text-2xl px-2">
      Feeling Hungry but not sure what to make? Let me help you out!
    </h1>
    <p class="text-lg px-2">
      Vue-Meals allows you to, well, view meals! Check out a random meal and get some food-spiration!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Greeting",
});
</script>