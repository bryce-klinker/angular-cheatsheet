module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  node: { fs: "empty", child_process: "empty", readline: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: 'tsconfig.cypress.json'
            }
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader"
          }
        ]
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader"
          }
        ]
      }
    ]
  }
};
