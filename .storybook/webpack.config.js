const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../stories')
  }

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html')

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  })

  // If you use scss,
  //  config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] })

  config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias
      }
    },
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.js$/,
    resourceQuery: /component/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  return config
}