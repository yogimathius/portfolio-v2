import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { builderDevTools } from "@builder.io/dev-tools/vite";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), builderDevTools()],
});
