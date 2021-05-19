import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: {
    button: 'lib/button/index.js',
    icon: 'lib/icon/index.js'
  },
  output: {
    dir: 'dist',
    entryFileNames: '[name]/index.js',
    chunkFileNames: '[name]-shared.js',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    postcss({ extract: 'index.css' }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**'
      // plugins: ['@babel/plugin-transform-runtime']
    })
  ],
  external: ['react', 'prop-types']
};
