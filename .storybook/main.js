const path = require('path')

module.exports = {
  // Point at your stories
  stories: ['../components/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Handle SCSS modules
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../styles'),
              path.resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('../next.config.js')
    // Resolve aliases used in project
    baseConfig.resolve = {
      alias: {
        shapes: path.resolve(__dirname, '../shapes'),
        lib: path.resolve(__dirname, '../lib'),
        styles: path.resolve(__dirname, '../styles'),
        public: path.resolve(__dirname, '../public'),
        components: path.resolve(__dirname, '../components'),
      },
    }
    // Needed for SVG importing using svgr
    const indexOfRuleToRemove = baseConfig.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg')
    )
    baseConfig.resolve.extensions = ['.js', '.json', '.jsx'];
    baseConfig.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
    })
    baseConfig.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    })
    baseConfig.plugins.push(new webpack.DefinePlugin({
      'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [],
        path: '/',
        loader: 'default',
      }),
    }));
    // Merge your next webpack config with this base
    return { ...nextConfig.webpack, ...baseConfig }
  },
}