<template>
  <div class="mt-4 sm:w-4/5 text-left mx-auto">
    <h4 class="font-bold font-mono">Ingredients</h4>
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="i">{{ ingredient }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { IMeal } from '../types/index';

export default defineComponent({
  name: "Ingredients",
  props: {
    meal: {
      required: true,
      type: Object as () => IMeal,
    },
  },
  setup(props) {
    const ingredients = computed(() => {
      const res: string[] = [];
      let count = 1;

      while (count <= 20) {
        const measure = props.meal[`strMeasure${count}`];
        const ingredient = props.meal[`strIngredient${count}`];

        if (measure && ingredient) {
          res.push(`${measure} of ${ingredient}`);
        }
        count++;
      }

      return res;
    });

    return {
      ingredients,
    };
  },
});
</script>