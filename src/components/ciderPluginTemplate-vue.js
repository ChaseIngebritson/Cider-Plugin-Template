import { debug } from '../utils/debug'

Vue.component('plugin.cider-plugin-template-ui', {
  template: `
    <h1>
      Hello

      <world />
    </h1>
  `,
  mounted () {
    debug('Hello World!')
  }
})

Vue.component('world', {
  template: `
    <h1>World</h1>
  `
})