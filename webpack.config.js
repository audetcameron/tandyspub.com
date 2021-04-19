// webpack.config.js

const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: {
      app: './docs/assets/js/main.js'
    },
    output: {
      path: path.resolve(__dirname, 'docs/assets/js/'),
      filename: '[name].scripts.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          //exclude: /node_modules\/(?!(vue-mapbox)\/).*/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    debug: true,
                    useBuiltIns: 'usage'
                  }],
                ],
                // plugins: [
                //    '@babel/plugin-proposal-object-rest-spread',
                //    '@babel/plugin-transform-spread'
                // ]
              }
            }
          ]
        }
      ]
    },
    devServer: {
      host: '0.0.0.0',
      public: 'tandys.test',
      contentBase: './',
      hot: true,
      compress: true,
      port: 3000
    },
    devtool: 'source-map'
  }
}