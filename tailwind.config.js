module.exports = {
  content: [
    'public/**/*.html',
  ],
  important: false,
  corePlugins: {
    preflight: false,
  },
  presets: [require("@maggioli-design-system/styles")],
};
