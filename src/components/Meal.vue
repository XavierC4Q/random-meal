<template>
  <div id="meal-vue"></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
// import fetch from "isomorphic-unfetch";

interface IState {
  loading: boolean;
  error: boolean;
  meal: null | { [key: string]: string | null };
}

export default defineComponent({
  name: "Meals",
  setup() {
    const state = reactive<IState>({
      loading: false,
      error: false,
      meal: null,
    });

    const resetState = () => {
      state.loading = true;
      state.error = false;
      state.meal = null;
    };

    const getMeal = async () => {
      resetState();

      try {
        state.loading = false;
      } catch {
        state.loading = false;
        state.error = true;
      }
    };

    return {
      ...state,
      getMeal,
    };
  },
});
</script>