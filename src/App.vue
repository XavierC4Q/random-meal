<template>
  <div class="h-full">
    <greeting-vue />
    <meal-vue />
    <footer-vue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterVue from "./components/Footer.vue";
import GreetingVue from "./components/Greeting.vue";
import MealVue from "./components/Meal.vue";

export default defineComponent({
  name: "App",
  components: {
    MealVue,
    FooterVue,
    GreetingVue,
  },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  height: calc(100vh - 60px);
}
</style>
