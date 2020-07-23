const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin');

module.exports = {
  entry: ['webpack/hot/poll?100', './src/server.js'],
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app.js'),
      '@api': path.resolve(__dirname, './src/api'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@database': path.resolve(__dirname, './src/database'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@config': path.resolve(__dirname, './src/config')
    },
    extensions: ['.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new SwaggerJSDocWebpackPlugin({
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'U Payments - Switch',
          version: '1.0.0'
        },
        servers: [
          {
            url: 'http://localhost:7000/v1',
            description: 'Local server'
          },
          {
            url: 'https://sandbox-switch-api.u-payments.com/v1',
            description: 'Sandbox'
          },
          {
            url: 'https://switch-api.u-payments.com/v1',
            description: 'Production'
          }
        ]
      },
      apis: [
        './src/api/**/*.js'
      ]
    })
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  }
};
