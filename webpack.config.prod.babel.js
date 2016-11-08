import webpack from 'webpack';
import config from './webpack.config.base.babel.js';

config.devtool = 'source-map';
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify("production")
        }
    })
);
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

export default config;