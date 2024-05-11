/**
 * This webpack configuration is only for development environment.
 * 
 * NOTE:
 * The "mode" key inside the "config" object is in 'development' mode, for production switch to 'production'.
 * 
 * The "devtool" key inside the "config" object is in 'source-map' mode which is good for development environment, for production switch the "devtool" value to 'inline-source-map', so the bundle size will decrease.
 * 
 * By Michele Mincone.
 * 4 May 2024 - 23:17
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = {
  entry: {
    index: ['@babel/polyfill', path.resolve(__dirname, './src/index.tsx')]
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:6].js',
    clean: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: "defaults", modules: false}], 
              ['@babel/preset-react', {runtime: "automatic"}], 
              '@babel/preset-typescript'
            ],
            plugins: ['react-refresh/babel']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
			{
				test: /\.(bmp|png|jpe?g|gif|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash:8][ext]',
				},
			},
			{
				test: /\.svg$/,
				issuer: /\.(pc|sc|sa|c)ss$/,
				type: 'asset/inline',
			},
      {
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash:8][ext]',
				},
			}
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.jsx','.js']
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      minify: true,
      inject: true,
      hash: true,
      template: path.resolve(__dirname, './src/index.html'),
      title: 'Graphene CMS',
      meta: {
        author: "Michele Mincone",
        description: "Graphene is a simple but powerful CMS based on typescript and react."
      }
    })
  ]
};

module.exports = config;