import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  splitting: false,
  sourcemap: true,
  clean: true,
  skipNodeModulesBundle: true,
  dts: true,
  shims: true,
  minify: true,
});
