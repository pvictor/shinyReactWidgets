var path = require('path');
const Uglify = require("uglifyjs-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'srcjs', 'select_input.jsx'),
    output: {
        path: path.join(__dirname, 'inst', 'www', '${package}', 'select_input'),
        path: path.join(__dirname, 'inst/www/shinyReactWidgets/select_input'),
        filename: 'select_input.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new Uglify()
    ],
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
