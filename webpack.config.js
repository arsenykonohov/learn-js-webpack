"use strict";

// DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE / DEFINE /
const webpack = require("webpack");
const myBuild = {};


// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
myBuild.entry = "./_sourse";

myBuild.output = {
    path: "./public/script",
    filename: "main.js",
    library: "app"
};


// WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER /
myBuild.watch = true,
myBuild.watchOptioins = {
//    aggregateTimeout: 500
};


// SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP /
myBuild.devtool = "inline-cheap-source-map";


// RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING /
//myBuild.resolve = {};
//myBuild.resolveLoader = {};


// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
//myBuild.plugins = [];


// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
//myBuild.module = {};
//myBuild.module.loaders: []


// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild