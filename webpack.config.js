"use strict";

// ---------------------------------------------------------------------------------------------------------------------------------------
// "NODE_ENV=production webpack" - for production;

let NODE_ENV             = process.env.NODE_ENV || "developer";
process.env.BROWSERSLIST = "last 10 versions";

let webpack           = require("webpack");
let path              = require("path");
let myBuild           = {};
let extractTextPlugin = require("extract-text-webpack-plugin");
let autoprefixer      = require("autoprefixer");





// ---------------------------------------------------------------------------------------------------------------------------------------
// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
let compressConfig = {
    warnings:     false,
    drop_console: true,
    unsafe:       false
};

let envDefinition     = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});
let uglifyPlugin      = new webpack.optimize.UglifyJsPlugin({compress: compressConfig});
let errorsPlugin      = new webpack.NoErrorsPlugin();
let extractStyles     = new extractTextPlugin("../../style/style.css");

myBuild.plugins = [envDefinition, errorsPlugin, extractStyles];

(NODE_ENV === "production") ? myBuild.plugins.push(uglifyPlugin) : console.log("DEVELOP MODE ===================================== ");





// ---------------------------------------------------------------------------------------------------------------------------------------
// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    include: path.resolve(__dirname + "/_source"),
    loader: "babel",
    query: {
        plugins: ["transform-runtime"],
        presets: ["es2015", "stage-0"]
    }
};

let cssStyleLoader = {
    test: /(\.css$)|(\.scss$)|(\.sass$)/,
    include: path.resolve(__dirname + "/_source/6_files"),
    loader: "style!css?minimize!postcss!sass"
};

let fileLoader = {
    test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
    exclude: /(node_modules)/,
    loader: "file?name=assets/project/[path][name].[ext]"
};

let vendorFileLoader = {
    test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
    include: path.resolve(__dirname + "/node_modules"),
    loader: "file?name=assets/vendor/[name].[ext]&regExp=_/_/node_modules/(.*)"
};

let urlLoader = {
    test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
    loader: "url?name=assets/[path][name].[ext]&limit=100000"
};

//let extractStyleLoader = {
//    test: /(\.css$)|(\.scss$)|(\.sass$)/,
//    include: path.resolve(__dirname + "/_source/6_files"),
//    loader: extractStyles.extract("style", ["css?minimize", "postcss", "sass"])
//}

myBuild.module = {};

myBuild.module.loaders = [
    babelLoader,
    cssStyleLoader,
    fileLoader,
    vendorFileLoader
//    urlLoader
];





// ---------------------------------------------------------------------------------------------------------------------------------------
// POSTCSS PLUGINS / POSTCSS PLUGINS / POSTCSS PLUGINS / POSTCSS PLUGINS / POSTCSS PLUGINS / POSTCSS PLUGINS / POSTCSS PLUGINS /
myBuild.postcss = function () {
    console.log("POSTCSS RUNS ===================================== ", process.env.BROWSERSLIST);
    return [autoprefixer()];
};





// ---------------------------------------------------------------------------------------------------------------------------------------
// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
myBuild.context = path.resolve(__dirname + "/_source/6_files");

myBuild.entry = {
    app: "./page"
};

myBuild.output = {
    path: path.resolve(__dirname + "/public/resource/scripts/6_files/"),
    publicPath: "/resource/scripts/6_files/",
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




















