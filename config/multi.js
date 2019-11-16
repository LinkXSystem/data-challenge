const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

const config = require('./config');

const resolveApp = relativePath => {
  if (relativePath instanceof Array) {
    return path.resolve(appDirectory, ...relativePath);
  }

  return path.resolve(appDirectory, relativePath);
};

const files = function() {
  const root = resolveApp('src');

  const status = fs.statSync(root);
  if (!status.isDirectory()) {
    throw new Error('the path is not directory, please check your config !');
  }

  let term = false;

  try {
    const cache = resolveApp(['src', 'index.js']);
    term = cache;
    fs.statSync(cache);
  } catch (error) {
    term = false;
  }

  if (term) {
    return [
      {
        name: 'index',
        path: term,
      },
    ];
  }

  let result = [];

  fs.readdirSync(path.resolve(root, config.pages)).map(item => {
    const target = resolveApp([root, config.pages, item, 'index.js']);
    fs.statSync(target);
    result.push({
      name: item,
      path: target,
    });
  });

  return result;
};

const entry = function(config, name) {
  let obj = {};

  config[name].map(
    item =>
      (obj[item.name] = [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        item.path,
      ]),
  );

  return obj;
};

const plugins = function(config, name) {
  let temps = [];

  config[name].map(item =>
    temps.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: config.appHtml,
        chunks: [item.name],
        filename: `${item.name}.html`,
      }),
    ),
  );

  return temps;
};

const rewrites = function(pages, name) {
  const rewrites = [];

  pages[name].map(item => {
    rewrites.push({
      from: new RegExp(`^/${item.name}/*`),
      to: `/${item.name}.html`,
    });
  });

  if (config.redirect) {
    rewrites.push(config.redirect);
  }
  
  return rewrites;
};

const isMultiple = function() {
  return config.multi;
};

const logger = function() {};

module.exports = {
  rewrites,
  files,
  entry,
  plugins,
  logger,
  isMultiple,
};
