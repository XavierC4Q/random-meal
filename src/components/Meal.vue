<template>
  <div id="meal-vue"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import fetch from "isomorphic-unfetch";
import { IAsyncState, Reducer } from "../types/index";
import asyncReducer from "../composables/asyncReducer";

export default defineComponent({
  name: "Meals",
  setup() {
    const initialState = {
      loading: false,
      error: false,
      meal: null,
    };

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

    const [state, dispatch] = asyncReducer(reducer, initialState);

    const getMeal = async () => {
      dispatch({ type: "loading" });

      try {
        const req = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await req.json();

        dispatch({ type: "success", payload: data.meals[0] });
      } catch {
        dispatch({ type: "error" });
      }
    };

    return {
      ...state,
      dispatch,
      getMeal
    };
  },

  mounted() {
    this.getMeal();
  }
});
</script>