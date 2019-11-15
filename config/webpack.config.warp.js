const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const config = require('./webpack.config.dev');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(config);
