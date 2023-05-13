import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    excludeSpecPattern: [
      "cypress/e2e/campaign/apocalypse/**/*.{cy,spec}.{js,jsx,ts,tsx}",
      "cypress/e2e/campaign/awakenings/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    ],
    baseUrl: "http://localhost:4173/drunagor-helper/",
    video: false,
    screenshotOnRunFailure: false,
  },
});
