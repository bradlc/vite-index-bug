const path = require('path')

module.exports = {
  plugins: [plugin],
}

function plugin() {
  return {
    postcssPlugin: 'plugin',
    Once(_root, { result }) {
      result.messages.push({
        type: 'dependency',
        file: path.resolve(__dirname, 'index.html'),
        plugin: 'plugin',
        parent: result.opts.from,
      })
    },
  }
}

plugin.postcss = true
