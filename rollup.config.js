import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy2'
import zip from 'rollup-plugin-zip'

export default {
  input: 'src/index.ts',
  output: { 
    dir: 'dist', 
    format: 'cjs' 
  },
  external: ['path', 'fs', 'electron'],
  plugins: [
    typescript({ 
      lib: ["es2021", "dom"],
      target: "es5",
      moduleResolution: "node"
    }),
    copy({
      assets: ['package.json']
    }),
    zip({
      dir: 'dist'
    })
  ]
}