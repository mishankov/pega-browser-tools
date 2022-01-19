import typescript from "@rollup/plugin-typescript";

export default [{
    input: ['src/content-scripts/index.ts'],
    output: [
        { file: 'dist/content-scripts.js', format: 'iife' },
    ],
    plugins: [typescript()]
}];
