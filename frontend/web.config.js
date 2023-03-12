module.exports = {
  devServer: {
    headers: {
      "X-Frame-Options": "deny",
    },
  },
};
// devtool: 'eval',
// entry: {
//   app: [
//     'react-hot-loader/patch',
//     'webpack-dev-server/client?http://0.0.0.0' + web_port,
//     'webpack/hot/only-dev-server',
//     './src/index'
//   ],
//   vendor: [
//     'react',
//     'react-dom',
//     'react-router',
//     'react-router-dom',
//     'react-forms-ui',
//     'mobx',
//     'mobx-react',
//     'sockjs-client',
//     'react-table',
//     'react-bootstrap-table',
//   ],
//   fonts: glob.sync("./src/webfonts/*")
// },
// output: {
//   path: path.join(__dirname, 'dist'),
//   filename: '[name].bundle.js',
//   publicPath: '/static/'
// },
