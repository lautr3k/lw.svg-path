let path = require('path')

let output_library  = "SVGPath"
let output_filename = "lw.svg-path.js"

let src_path  = path.resolve('./src')
let dist_path = path.resolve('./dist')

module.exports = {
    debug: true,
    context: src_path,
    devtool: "source-map",
    entry: [
        "./path.js"
    ],
    output: {
        path: dist_path,
        filename: output_filename,
        library: output_library,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
    },
    devServer: {
        contentBase: dist_path
    }
};
