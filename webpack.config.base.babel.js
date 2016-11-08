import webpack from 'webpack';
import path from 'path';

let filename = 'Component';
let src = 'src';
let dist = 'dist';
let host = '0.0.0.0';
let port = 3000;

let config = {
    entry: [
        `./${src}/main.js`
    ],
    output: {
        path: path.resolve(__dirname, dist),
        publicPath: `/${dist}/`,
        filename: `${filename}.js`
    },
    module: {
        loaders: [
            { 
                test: /\.(js|jsx)$/,
                loader: 'react-hot!babel',
                include: path.join(__dirname, src)
            },
            { 
                test: /\.(css|scss)$/,
                loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!sass?outputStyle=expanded',
                include: path.join(__dirname, src)
            }
        ]
    },
    plugins: [],
    devServer: {
        host: host,
        port: port,
        noInfo: true,
        publicPath: `/${dist}/`
    }
};

export default config;