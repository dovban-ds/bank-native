const path = require("path");

module.exports = function (api) {
  const plugins = [
    [
      "module-resolver",
      {
        root: ["."],
        resolvePath(sourcePath, currentFile, opt) {
          if (
            sourcePath === "react-native" &&
            !(
              (
                currentFile.includes("node_modules/react-native/") || // macos/linux paths
                currentFile.includes("node_modules\\react-native\\")
              ) // windows path
            ) &&
            !(
              currentFile.includes("resolver/react-native/") ||
              currentFile.includes("resolver\\react-native\\")
            )
          ) {
            return path.resolve(__dirname, "resolver/react-native");
          }
          var resolve = require("babel-plugin-module-resolver").resolvePath(
            sourcePath,
            currentFile,
            opt
          );
          return resolve;
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".ts",
          ".tsx",
          ".json",
          ".ios.tsx",
          ".android.tsx",
        ],
        alias: {
          assets: "./src/assets",
          images: "./src/assets/images",
          components: "./src/components",
          services: "./src/services",
          constants: "./src/constants",
          store: ["src/store/*"],
          models: ["src/models/*"],
          config: "./src/config",
          screens: "./src/screens",
          hooks: "./src/hooks",
          models: "./src/models",
          helpers: "./src/helpers",
          navigation: "./src/navigation",
          providers: "./src/providers",
          utils: "./src/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ];

  // const babelEnv = api.env();
  // if (babelEnv !== 'development') {
  //   plugins.push('transform-remove-console');
  // }

  return {
    presets: ["module:@react-native/babel-preset"],
    plugins,
  };
};
