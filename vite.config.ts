import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import { splitVendorChunkPlugin } from "vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteYaml(),
    splitVendorChunkPlugin(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  base: "/drunagor-helper/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["@/locales/**/*.yaml"],
  },
});
