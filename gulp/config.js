// @file config.js
var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var saveLicense = require('uglify-save-license');

var dest = './dist';
var src = './src';

module.exports = {
    entry: src + 'js/entry.js',
    js: {
        src: src + '/js/**',
        dest: dest + "/js",
        uglify: true
    },
    uglify: {
        output: {
            comments: saveLicense
        }
    },
    webpack: {
        entry: {
            app: src + '/js/app.js',
        },
        output: {
            filename: '[name].bundle.js'
        },
        resolve: {
            root: [path.join(__dirname, "bower_components")],
            extensions: ["", ".js"]
        },
        /* plugins: [
            new webpack.ResolverPlugin(
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
            )
            ]*/
        plugins: [new BowerWebpackPlugin(),
                  new webpack.optimize.DedupePlugin(),
                  new webpack.optimize.AggressiveMergingPlugin()
                 ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
    }
    }
}
