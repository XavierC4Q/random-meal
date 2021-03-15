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
        class="h-96 mx-auto mt-6 rounded-md md:w-96 w-72"
      />
      <h2 class="text-xl font-mono font-bold">{{ meal.strMeal }}</h2>
      <div
        class="flex md:flex-row flex-col md:w-96 mt-4 md:justify-between mx-auto"
      >
        <h4>
          <span class="font-bold font-mono">Region:</span> {{ meal.strArea }}
        </h4>
        <h4>
          <span class="font-bold font-mono">Category:</span>
          {{ meal.strCategory }}
        </h4>
      </div>
      <ingredients-vue :meal="meal" />
    </div>
  </div>
</template>

<script lang="ts">
import useFetchMeal from "@/composables/useFetchMeal";
import { IAsyncState, Reducer } from "@/types";
import { computed, defineComponent } from "@vue/runtime-core";
import IngredientsVue from "./Ingredients.vue";

export default defineComponent({
  name: "Meals",
  components: {
    IngredientsVue,
  },
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
    const error = computed(() => state.error);
    const meal = computed(() => state.meal);

    return {
      loading,
      error,
      meal,
    };
  },
});
</script>

<style lang="css">
#meal-vue {
  min-height: calc(100% - 90px);
}
</style>