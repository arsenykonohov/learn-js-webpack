"use strict";


// ---------------------------------------------------------------------------------------------------------------------------------------
const webpack  = require("webpack");
const path     = require("path");
const NODE_ENV = process.env.NODE_ENV || "developer";
const myBuild  = {};

// ---------------------------------------------------------------------------------------------------------------------------------------
//const precss        = require("precss");
//const smartImport   = require("postcss-smart-import");
const browserslist       = require("browserslist")
const autoprefixer       = require("autoprefixer");
process.env.BROWSERSLIST = "last 2 version, > 5%";

// ---------------------------------------------------------------------------------------------------------------------------------------
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyle      = new ExtractTextPlugin("../../style/style.css");
//const extractStyle      = new ExtractTextPlugin("../../style/style.css", {allChunks: true});

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
myBuild.watchOptioins = {aggregateTimeout: 2000};

// ---------------------------------------------------------------------------------------------------------------------------------------
// SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP /
myBuild.devtool = NODE_ENV === "developer" ? null : null;

// ---------------------------------------------------------------------------------------------------------------------------------------
// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
myBuild.module = {};
myBuild.module.loaders = [
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
            presets: ["es2015"]
        }
    },
    {
        test: /\.css$/,
        loader: extractStyle.extract("style-loader" ,"css-loader", "postcss-loader")
    }
];

// ---------------------------------------------------------------------------------------------------------------------------------------
// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
myBuild.plugins = [
    new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)}),
    extractStyle
];


// ---------------------------------------------------------------------------------------------------------------------------------------
// PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS / PostCSS /
myBuild.postcss = function () {
    return [autoprefixer({browsers: browserslist("last 2 version, > 5%")})];
};

// ---------------------------------------------------------------------------------------------------------------------------------------
// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild;












