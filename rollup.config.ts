import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: "umd",
      sourcemap: true,
      globals: {
        "lodash-es": "_",
      },
    },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  external: [
    "lodash-es",
    "d3-array",
    "d3-axis",
    "d3-color",
    "d3-format",
    "d3-scale",
    "d3-selection",
    "d3-shape",
    "d3-time-format",
    "d3-transition",
  ],
  watch: {
    include: "src/**",
  },
  plugins: [
    typescript({
      exclude: ["*.d.ts", "**/*.d.ts", "**/test/**", "**/*.test.ts"],
    }),
    commonjs(),
    resolve(),
  ],
};
