"use strict";

// ---------------------------------------------------------------------------------------------------------------------------------------
// "NODE_ENV=public webpack" - exmple for production;
// just "webpack" - in developer mode;

// ---------------------------------------------------------------------------------------------------------------------------------------
const webpack  = require("webpack");
const path     = require("path");
const myBuild  = {};
const NODE_ENV = process.env.NODE_ENV || "developer";





// ---------------------------------------------------------------------------------------------------------------------------------------
// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
const compressConfig = {
    warnings:     false,
    drop_console: true,
    unsafe:       false
};

const ProvidePluginConfig = {
    map: "lodash/map"
};

const envDefinition     = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});
const uglifyPlugin      = new webpack.optimize.UglifyJsPlugin({compress: compressConfig});
const errorsPlugin      = new webpack.NoErrorsPlugin();
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles     = new extractTextPlugin("../../style/style.css");

myBuild.plugins = [envDefinition, errorsPlugin, extractStyles];

if (NODE_ENV === "public") {
    myBuild.plugins.push(uglifyPlugin);
}





// ---------------------------------------------------------------------------------------------------------------------------------------
// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
const babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    include: path.resolve(__dirname + "/_source"),
    loader: "babel",
    query: {
        plugins: ["transform-runtime"],
        presets: ["es2015", "stage-0"]
    }
};

const extractStyleLoader = {
    test: /\.css$/,
    include: path.resolve(__dirname + "/_source"),
    loader: extractStyles.extract("style" ,"css")
}

myBuild.module = {};

myBuild.module.loaders = [babelLoader, extractStyleLoader];





// ---------------------------------------------------------------------------------------------------------------------------------------
// FILES ENTRY & OUTPUT / FILES ENTRY & OUTPUT / FILES ENTRY & OUTPUT / FILES ENTRY & OUTPUT / FILES ENTRY & OUTPUT /
myBuild.context = path.resolve(__dirname + "/_source/6_files");

myBuild.entry = {
    app: "./app"
};

myBuild.output = {
    path: path.resolve(__dirname + "/public/scripts/6_files/"),
    filename: "[name].js",
    library: "[name]",
};





// ---------------------------------------------------------------------------------------------------------------------------------------
// RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING /
myBuild.resolve = {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js"]
};

myBuild.resolveLoader = {
    modulesDirectories: ["node_modules"],
    moduleTemplates: ["*-loader", "*"],
    extensions: ["", ".js"]
};





// ---------------------------------------------------------------------------------------------------------------------------------------
// WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER /
myBuild.watch = (NODE_ENV === "developer");

myBuild.watchOptioins = {
    aggregateTimeout: 300
};

// ---------------------------------------------------------------------------------------------------------------------------------------
// SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP /
myBuild.devtool = NODE_ENV === "developer" ? "cheap-module-source-map" : null;





// ---------------------------------------------------------------------------------------------------------------------------------------
// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild;














