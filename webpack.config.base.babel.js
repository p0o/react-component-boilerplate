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

export default config;