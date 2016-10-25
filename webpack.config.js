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

const CommonsChunkPluginConfig = {
    name: "shared",
    filename: "shared.js"
};

const ProvidePluginConfig = {
    map: "lodash/map"
};

// ---------------------------------------------------------------------------------------------------------------------------------------
// define plugins:
const envDefinition = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});
const uglifyPlugin  = new webpack.optimize.UglifyJsPlugin({compress: compressConfig});
const errorsPlugin  = new webpack.NoErrorsPlugin();
const commonsChunk  = new webpack.optimize.CommonsChunkPlugin(CommonsChunkPluginConfig);
// LimitChunkCountPlugin, MinChunkSizePlugin, AggressiveMergingPlugin
const contextReplPl = new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en/);
const ignorePlugin  = new webpack.IgnorePlugin(/en-au|en-ca|en-ie|en-nz/); // not very cool way for exclude
const providePlugin = new webpack.ProvidePlugin(ProvidePluginConfig);

// ---------------------------------------------------------------------------------------------------------------------------------------
// define loaders:
const babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: "babel",
    query: {
        plugins: ["transform-runtime"],
        presets: ["es2015", "stage-0"]
    }
};





//// ---------------------------------------------------------------------------------------------------------------------------------------
//// ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT / ENTRY & OUTPUT /
//myBuild.entry = "./_sourse/2_unidirection";
//myBuild.output = {
//    path: "./public/scripts/2_unidirection",
//    filename: "main.js",
//    library: "app"
//};


//// ---------------------------------------------------------------------------------------------------------------------------------------
//// MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT / MULTIPLY ENTRY & OUTPUT /
//myBuild.context = path.resolve(__dirname + "/_sourse/3_multiple");
//myBuild.entry = {
//    home: "./home",
//    about: "./about",
//    shared: ["./welcome", "./shared"]
//};
//myBuild.output = {
//    path: __dirname + "/public/scripts/3_multiple",
//    filename: "[name].js",
//    library: "[name]"
//};


//// ---------------------------------------------------------------------------------------------------------------------------------------
//// DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT /
//myBuild.context = path.resolve(__dirname + "/_sourse/4_dynamic");
//
//myBuild.entry = {
//    app: "./app",
//    moment: "./moment"
//};
//
//myBuild.output = {
//    path: path.resolve(__dirname + "/public/scripts/4_dynamic"),
//    publicPath: "/scripts/4_dynamic/",
//    filename: "[name].js",
//    library: "[name]",
//};


// ---------------------------------------------------------------------------------------------------------------------------------------
// DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT /
myBuild.context = path.resolve(__dirname + "/_sourse/5_external");

myBuild.entry = {
    app: "./"
};

myBuild.output = {
    path: path.resolve(__dirname + "/public/scripts/5_external"),
    filename: "[name].js",
    library: "[name]",
};

//myBuild.externals = {
//    jquery: "jQuery"
//}



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
myBuild.plugins = [envDefinition, errorsPlugin, providePlugin];
// commonsChunk, contextReplPl, ignorePlugin
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
