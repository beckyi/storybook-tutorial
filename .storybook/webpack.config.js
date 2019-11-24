module.exports = ({ config, mode }) => {
  //특정규칙을 작성
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]], //svg를 불러오지 못하는 경우 대비
          plugins: [
            [
              require.resolve("babel-plugin-named-asset-import"),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                  }
                }
              }
            ]
          ]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
