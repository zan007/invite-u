const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pathResolve = (dir) => path.resolve(__dirname, `../${dir}`);

const src = pathResolve("src");
const node_modules = pathResolve("node_modules/");
const scss = pathResolve("src/scss/");
const fonts = pathResolve("src/assets/fonts");
const iconsPath = pathResolve("src/assets/icons");
const images = pathResolve("src/assets/img");
const webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
  files: glob.sync(path.join(iconsPath, "*.svg")),
  dest: fonts,
  css: true,
  cssDest: path.join(scss, 'icons', 'icons.css'),
  cssFontsUrl: '/assets/fonts/',
  fontName: 'icons',
  html: false,
  templateOptions: {
    baseSelector: '.icon',
    classPrefix: 'icon-'
  }
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
});

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: true,
    importLoaders: 1,
  }
};

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => {
      return [
        require('autoprefixer')({
          browsers: ["> 5%", "last 2 versions"]
        })
      ]
    }
  }
};

const sassLoader = {
  loader: "sass-loader",
  options: {
    includePaths: [
      scss,
      node_modules
    ],
    data: `
      @import "utils/_vars";
      @import "utils/_mixins";
      @import "utils/_animations";
    `
  }
};

module.exports = {
  js: {
    test: /\.tsx?$/,
    loaders: 'ts-loader'
  },
  css: {
    test: /\.css$/,
    use: ['style-loader', cssLoader, postCssLoader],
    include: [node_modules]
  },
  scssExtracted: {
    test: /\.(s*)css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [cssLoader, postCssLoader, sassLoader]
    }),
    include: [src]
  },
  scss: {
    test: /\.(s*)css$/,
    use: ['style-loader', cssLoader, sassLoader],
  },
  fonts: {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    include: [fonts, node_modules],
    loader: 'file-loader?limit=100000&name=assets/fonts/[name].[ext]'
  },
  images: {
    test: /\.(png|svg|jpe?g)$/,
    include: [images],
    loader: 'file-loader?limit=100000&name=assets/img/[name].[ext]'
  }
};
