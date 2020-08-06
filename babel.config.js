module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // you can also read from a file, e.g. `variables.scss`
              // use `data` here if sass-loader version < 8
              prependData: `
                  $xs: "only screen and (max-width : 575px)";
                  $sm: "only screen and (min-width : 576px)";
                  $md: "only screen and (min-width : 768px)";
                  $lg: "only screen and (min-width : 992px)";
                  $xl: "only screen and (min-width : 1200px)";
                    `
            },
          },
        ],
      },
    ],
  },
};
