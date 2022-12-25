import typescript from "@rollup/plugin-typescript";
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';

export default [{
    input: ['src/content-scripts/index.ts'],
    output: [
        { file: 'dist/chrome/content-scripts.js', format: 'iife' },
        { file: 'dist/firefox/content-scripts.js', format: 'iife' },
    ],
    plugins: [typescript()]
}, {
    input: ['src/background.ts'],
    output: [
        { file: 'dist/chrome/background.js', format: 'iife' },
        { file: 'dist/firefox/background.js', format: 'iife' },
    ],
    plugins: [typescript()]
}, {
    input: ['src/popup/index.ts'],
    output: [
        { file: 'dist/chrome/popup/bundle.js', format: 'iife', name: 'app' }
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
}, {
    input: ['src/popup/index.ts'],
    output: [
        { file: 'dist/firefox/popup/bundle.js', format: 'iife', name: 'app' }
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
