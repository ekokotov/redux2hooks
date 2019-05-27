import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

const prodBuild = () => ({
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    babel(),
    // typescript(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs(),
  ],
});

const devBuild = () => ({
  input: './example-app/src/index.jsx',
  output: [
    {
      file: './example-app/public/bundle.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
    },
  ],
  plugins: [
    // external(),
    json(),
    typescript(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    }),
    builtins(),
    babel({
      exclude: ['node_modules/**'],
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
          'useLayoutEffect',
          'useEffect',
          'useMemo',
          'useRef',
          'useContext',
          'useReducer',
          'Fragment',
          'createContext',
          'Suspense'
        ],
        'node_modules/react-dom/index.js': [
          'render',
          'unstable_batchedUpdates',
        ],
        'node_modules/react-is/index.js': [
          'isValidElementType',
          'isContextConsumer',
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});

export default [prodBuild(), devBuild()];
