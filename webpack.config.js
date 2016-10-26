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
// define some plugins:
const envDefinition = new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)});
const uglifyPlugin  = new webpack.optimize.UglifyJsPlugin({compress: compressConfig});
const errorsPlugin  = new webpack.NoErrorsPlugin();
const commonsChunk  = new webpack.optimize.CommonsChunkPlugin(CommonsChunkPluginConfig);
// LimitChunkCountPlugin, MinChunkSizePlugin, AggressiveMergingPlugin
const contextReplPl = new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en/);
const ignorePlugin  = new webpack.IgnorePlugin(/en-au|en-ca|en-ie|en-nz/); // not very cool way for exclude
const providePlugin = new webpack.ProvidePlugin(ProvidePluginConfig);





// ---------------------------------------------------------------------------------------------------------------------------------------
// define some loaders:
const babelLoader = {
    test: /\.js$/,
    //exclude: /(node_modules)/,
    // instead exclude:
    include: path.resolve(__dirname + "/_sourse"),
    loader: "babel",
    query: {
        plugins: ["transform-runtime"],
        presets: ["es2015", "stage-0"]
    }
};
const importExportLoaders = {
    test: /extlib.js$/,
    loader: "imports?globalLegacySettings=>'global-config-for-legacy-code'!exports?Legacy",
}





// ---------------------------------------------------------------------------------------------------------------------------------------
// DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT / DYNAMIC ENTRY & OUTPUT /
myBuild.context = path.resolve(__dirname + "/_sourse/5_external");
myBuild.entry = {
    app: "./app"
};
myBuild.output = {
    path: path.resolve(__dirname + "/public/scripts/5_external/"),
    filename: "[name].js",
    library: "[name]",
};
//myBuild.externals = {
//    jquery: "jQuery"
//}





// ---------------------------------------------------------------------------------------------------------------------------------------
// RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING / RESOLVING /
myBuild.resolve = {
    root: path.resolve(__dirname + "/_vendors"),
    alias: {
        extlib: "legacy/library/extlib.js",
    },
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
//myBuild.devtool = "inline-cheap-source-map";
myBuild.devtool = NODE_ENV === "developer" ? "cheap-inline-module-source-map" : null;





// ---------------------------------------------------------------------------------------------------------------------------------------
// PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS / PLUGINS /
myBuild.plugins = [envDefinition, errorsPlugin];
// commonsChunk, contextReplPl, ignorePlugin, providePlugin
if (NODE_ENV === "public") {
    myBuild.plugins.push(uglifyPlugin);
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS / LOADERS /
myBuild.module = {};
myBuild.module.loaders = [babelLoader, importExportLoaders];

// ---------------------------------------------------------------------------------------------------------------------------------------
// NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE / NOPARSE /
//myBuild.module.noParse = [/node_modules[\/\\]angular[\/\\]angular.js/];

// ---------------------------------------------------------------------------------------------------------------------------------------
// EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE / EXPORT MODULE /
module.exports = myBuild;






