import webpack from 'webpack';
import path from 'path';

export let statics = {
    src: 'src',
    dist: 'dist',
    componentName: 'Component'
};

let config = {
    entry: [
        `./${statics.src}/main.js`
    ],
    output: {
        path: path.join(__dirname, statics.dist),
        publicPath: `/${statics.dist}/`,
        filename: `${statics.componentName}.js`
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'react-hot!babel',
                include: path.join(__dirname, statics.src)
            }
        ]
    },
    plugins: [],
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        noInfo: true,
        publicPath: `/${statics.dist}/`
    }
};

if (process.env.NODE_ENV === 'production') {
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
}
else {
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
}

export default config;