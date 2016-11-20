import webpack from 'webpack';
import path from 'path';
import config, { statics } from './webpack.config.base.babel.js';

config.devtool = 'source-map';
config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass?outputStyle=expanded',
        include: path.join(__dirname, 'node_modules')
    }
);
config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass?outputStyle=expanded',
        include: path.join(__dirname, statics.src)
    }
);
config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
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