"use strict";

const webpack = require("webpack");
const myBuild = {};



// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
myBuild.entry = "./_sourse/index";

myBuild.output = {
    path: "./public/script",
    filename: "main.js",
    library: "application"
};


// WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS / WATCHERS /
//myBuild.watch = "",
//myBuild.watchOptioins = {};


// RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING /
//myBuild.resolve = {};
//myBuild.resolveLoader = {};


// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / 
//myBuild.plugins = [];


// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / 
//myBuild.module = {};
//myBuild.module.loaders: []


// EXPORT MODULE: 
module.exports = myBuild