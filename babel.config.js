module.exports = {
  // Presets for compiling JavaScript and React code
  presets: [
    // Preset for compiling modern JavaScript syntax to target environments
    "@babel/preset-env",

    // Preset for compiling React JSX syntax with automatic runtime
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
