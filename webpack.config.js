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
// plugin configs:
const compressConfig = {
    warnings:     false,
    drop_console: true,
    unsafe:       false
};

//    minChunks: Infinity,
const chunkConfig = {
    name: "shared",
    filename: "shared.js"
};

// ---------------------------------------------------------------------------------------------------------------------------------------
// define plugins:
const envDefinition = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});
const uglifyPlugin  = new webpack.optimize.UglifyJsPlugin({compress: compressConfig});
const errorsPlugin  = new webpack.NoErrorsPlugin();
const commonsChunk  = new webpack.optimize.CommonsChunkPlugin(chunkConfig);



// ---------------------------------------------------------------------------------------------------------------------------------------
// define loaders:
const babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: "babel",
    query: {
        plugins: ['transform-runtime'],
        presets: ["es2015", "stage-0"]
    }
};



// ---------------------------------------------------------------------------------------------------------------------------------------
// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
//myBuild.entry = "./_sourse/_unidirection";
//
//myBuild.output = {
//    path: "./public/script",
//    filename: "main.js",
//    library: "app"
//};



// ---------------------------------------------------------------------------------------------------------------------------------------
// MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT /
// https://webpack.github.io/docs/troubleshooting.html#windows-paths
// https://webpack.github.io/docs/configuration.html#resolve-root
myBuild.context = path.resolve(__dirname + "/_sourse/_multiple");

myBuild.entry = {
    home: "./home",
    about: "./about",
    shared: ["./shared", "./welcome"]
};

myBuild.output = {
    path: __dirname + "/public/multiple_scripts",
    filename: "[name].js",
    library: "[name]"
};



// ---------------------------------------------------------------------------------------------------------------------------------------
// WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER / WATCHER /
myBuild.watch = (NODE_ENV === "developer");

myBuild.watchOptioins = {
    aggregateTimeout: 300
};



// ---------------------------------------------------------------------------------------------------------------------------------------
// SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP / SOURCE MAP /
//myBuild.devtool = "inline-cheap-source-map";
myBuild.devtool = NODE_ENV === "developer" ? "cheap-inline-module-source-map" : null;



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
// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
myBuild.plugins = [envDefinition, commonsChunk, errorsPlugin];

if (NODE_ENV === "public") {
    myBuild.plugins.push(uglifyPlugin);
}



// ---------------------------------------------------------------------------------------------------------------------------------------
// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
myBuild.module = {};
myBuild.module.loaders = [babelLoader];



// ---------------------------------------------------------------------------------------------------------------------------------------
// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild;
















