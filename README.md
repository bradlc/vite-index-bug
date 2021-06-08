In this project the `index.html` is [registered as a PostCSS dependency](https://github.com/bradlc/vite-index-bug/blob/main/postcss.config.js#L11-L16):

```js
result.messages.push({
  type: 'dependency',
  file: path.resolve(__dirname, 'index.html'),
  plugin: 'plugin',
  parent: result.opts.from,
})
```

Typically when editing the `index.html` file the browser window will automatically reload, but in this example it does not.

### Reproduction Steps

1. `npm install`
2. `npm run dev`
3. Edit `index.html` and notice that the browser window does not reload as expected
