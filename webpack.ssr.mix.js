const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config')

mix
  .options({ manifest: false })
  .ts('resources/ts/ssr.js', 'public/js')
  .react()
  .alias({ '@': path.resolve('resources/ts') })
  .webpackConfig({
    ...webpackConfig,
    target: 'node',
    externals: [nodeExternals()],
  })
