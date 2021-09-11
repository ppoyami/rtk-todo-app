// craco.config.js
const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: { source: 'jsconfig', jsConfigPath: 'jsconfig.paths.json' },
    },
  ],
};
