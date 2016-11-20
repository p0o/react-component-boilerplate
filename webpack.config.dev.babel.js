import path from 'path';
import config, { statics } from './webpack.config.base.babel.js';

config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: 'style!css?sourceMap!sass?sourceMap&outputStyle=expanded',
        include: path.join(__dirname, 'node_modules')
    }
);
config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: 'style!css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]!sass?sourceMap&outputStyle=expanded',
        include: path.join(__dirname, statics.src)
    }
);

export default config;