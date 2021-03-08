<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import fetch from "isomorphic-unfetch";

export default defineComponent({
  name: "Meals",
  setup() {
    const meal = ref<null | object>(null);
  },
});
</script>