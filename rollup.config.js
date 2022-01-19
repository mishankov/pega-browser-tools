import typescript from "@rollup/plugin-typescript";

export default [{
    input: 'src/content-script.ts',
    output: [
        { file: 'dist/content-script.js', format: 'iife' },
    ],
    plugins: [typescript()]
}];
