import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import scss from "rollup-plugin-scss";

const rootDir = ".";
const outputDir = "dist/app";

export default {
  input: `${rootDir}/src/index.ts`,
  output: [
    {
      file: `${outputDir}/${pkg.main}`,
      name: pkg.name,
      format: "umd",
      sourcemap: true,
      globals: {
        "lodash-es": "_"
      }
    },
    { file: `${outputDir}/${pkg.module}`, format: "es", sourcemap: true }
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
    "d3-transition"
  ],
  watch: {
    include: `${rootDir}/**`
  },
  plugins: [
    copy({
      targets: [{ src: `${rootDir}/package.json`, dest: `${outputDir}` }]
    }),
    scss(),
    typescript({
      tsconfig: `${rootDir}/tsconfig.json`,
      exclude: ["*.d.ts", "**/*.d.ts", "**/test/**", "**/*.test.ts"]
    }),
    commonjs(),
    resolve()
  ]
};
