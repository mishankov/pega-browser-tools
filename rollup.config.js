import typescript from "@rollup/plugin-typescript";
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';

export default [{
    input: ['src/content-scripts/index.ts'],
    output: [
        { file: 'dist/content-scripts.js', format: 'iife' },
    ],
    plugins: [typescript()]
}, {
    input: ['src/background.ts'],
    output: [
        { file: 'dist/background.js', format: 'iife' },
    ],
    plugins: [typescript()]
}, {
    input: ['src/popup/index.ts'],
    output: [
        { file: 'dist/popup/bundle.js', format: 'iife', name: 'app' }
    ],
    plugins: [
        svelte({ preprocess: sveltePreprocess() }),
        css({ output: 'bundle.css' }),
        resolve({
			browser: true,
			dedupe: ['svelte']
		}),
        typescript()
    ]
}];
