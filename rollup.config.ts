import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/public-api.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      sourcemap: true,
      globals: {
        'lodash-es': '_'
      }
    },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: ['lodash-es'],
  watch: {
    include: 'src/**'
  },
  plugins: [
    typescript({
      exclude: ['*.d.ts', '**/*.d.ts', '**/test/**', '**/*.test.ts']
    }),
    commonjs(),
    resolve()
  ]
};