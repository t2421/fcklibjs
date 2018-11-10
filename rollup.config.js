import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'fcklib',
			file: pkg.browser,
			format: 'umd',
			sourcemap:'inline'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			babel()
		]
	},
	{
		input: 'src2/Main.ts',
		output: {
			name: 'fcklib2',
			file: pkg.browser2,
			format: 'umd',
			sourcemap:'inline'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			typescript({
				tsconfigOverride: {
					compilerOptions: {
					module: "es2015"
					}
				}
			})
		]
	}
];
