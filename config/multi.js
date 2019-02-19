const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => {
  if (relativePath instanceof Array) {
    return path.resolve(appDirectory, ...relativePath);
  }

  return path.resolve(appDirectory, relativePath);
};

const files = () => {
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

  fs.readdirSync(path.resolve(root, './views')).map(item => {
    const target = resolveApp([root, './views', item, 'index.js']);
    fs.statSync(target);
    result.push({
      name: item,
      path: target,
    });
  });

  console.log('======================================');
  console.log(result);
  console.log('======================================');

  return result;
};

const entry = (config, name) => {
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

const plugins = (config, name) => {
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

const rewrites = (config, name) => {
  const rewrites = [];

  config[name].map(item =>
    rewrites.push({
      from: new RegExp(`^/${item.name}/*`),
      to: `/${item.name}.html`,
    }),
  );

  return rewrites;
};

module.exports = {
  rewrites,
  files,
  entry,
  plugins,
};
