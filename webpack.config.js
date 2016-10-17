"use strict";

// DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE /

// "NODE_ENV=public webpack" - exmple for production;
// just "webpack" - in developer mode;

const webpack       = require("webpack");
const myBuild       = {};
const NODE_ENV      = process.env.NODE_ENV || "developer";
const envDefinition = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});



// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
myBuild.entry = "./_sourse";

myBuild.output = {
    path: "./public/script",
    filename: "main.js",
    library: "app"
};



// WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER /
//myBuild.watch = true,
myBuild.watch = (NODE_ENV === "developer");

myBuild.watchOptioins = {
//    aggregateTimeout: 500
};



// SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP /
//myBuild.devtool = "inline-cheap-source-map";
myBuild.devtool = NODE_ENV === "developer" ? "cheap-inline-module-source-map" : null;



// RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING /
//myBuild.resolve = {};
//myBuild.resolveLoader = {};



// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
myBuild.plugins = [envDefinition];



// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
//myBuild.module = {};
//myBuild.module.loaders: []



// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild









