module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["**/__tests__/*.spec.{j,t}s?(x)"],
};
