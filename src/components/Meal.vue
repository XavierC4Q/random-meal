<template>
  <div id="meal-vue" class="">
    <div
      v-if="loading"
      class="animate-spin m-auto w-10 h-10 text-green-600"
    ></div>
    <div v-if="!loading && meal">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="h-96 mx-auto mt-6 rounded-md w-96"
      />
    </div>
  </div>
</template>

<script lang="ts">
import useFetchMeal from "@/composables/useFetchMeal";
import { IAsyncState, Reducer } from "@/types";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Meals",
  setup() {
    const initState = () => ({
      loading: false,
      error: false,
      meal: null,
    });

    const reducer: Reducer<IAsyncState> = (state, action) => {
      switch (action.type) {
        case "loading":
          return {
            loading: true,
            error: false,
            meal: null,
          };
        case "error":
          return {
            loading: false,
            error: true,
            meal: null,
          };
        case "success":
          return {
            loading: false,
            error: false,
            meal: action.payload,
          };
        default:
          return state;
      }
    };

    const state = useFetchMeal(reducer, initState());

    const loading = computed(() => state.loading);
    const error = computed(() => state.error)
    const meal = computed(() => state.meal)

    return {
      loading,
      error,
      meal
    };
  },
});
</script>

<style lang="css">
#meal-vue {
  min-height: calc(100% - 90px);
}
</style>