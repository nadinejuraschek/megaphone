module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options:{url: false}}
        ]
      }
    ],
  }
};
