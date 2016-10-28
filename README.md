# Learn Webpack

[Screencast - I. Kantor](https://www.youtube.com/playlist?list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn)




***
**Build:**
```
$ npm i
$ webpack
$ NODE_ENV=public webpack
```

**Build info:**
```
$ webpack --display-modules -v
$ webpack --json --profile > stats.json
$ webpack --profile --display-modules
$ webpack --profile --display-modules --display-reasons
```

[upload stats.json here](https://webpack.github.io/analyse/)

babel config (like `.babelrc`) inside `package.json`




***
### HINTS:

[troubleshooting for watch and windows paths](https://webpack.github.io/docs/troubleshooting.html#windows-paths)

[following for resource above](https://webpack.github.io/docs/configuration.html#resolve-root)




***
### STATUS:

+ 1.0. Introduction - complete;

***
+ 2.1. Easy build | Easy Config   - *complete*;
+ 2.2. Easy build | Module Access - *complete*;
+ 2.3. Easy build | Watcher       - *complete*;
+ 2.4. Easy build | Source Maps   - *complete*;
+ 2.5. Easy build | ENV variable  - *complete*;
+ 2.6. Easy build | BABEL (+2.7)  - *complete*;
+ 2.7. Easy build | Resolving     - *complete*;
+ 2.8. Easy build | UglifyJs      - *complete*;

***
+ 3.1. Multiple scripts | Multiple Entries              - *complete*;
+ 3.2. Multiple scripts | NoErrorsPlugin                - *complete*;
+ 3.3. Multiple scripts | CommonsChunkPlugin            - *complete*;
+ 3.4. Multiple scripts | Build Info                    - *complete*;
+ 3.5. Multiple scripts | Adjust CommonsChunkPlugin     - *i just realized*;
+ 3.6. Multiple scripts | shared.js as moule and entry  - *complete*;
+ 3.7. Multiple scripts | Multi-Compilation and Summary - *i just realized*;

***
+ 4.1. Advanced require | Dynamic require          - *complete*;
+ 4.2. Advanced require | Merge Fragments          - *complete*;
+ 4.3. Advanced require | require(expression)      - *complete*;
+ 4.4. Advanced require | require.context          - *complete*;
+ 4.5. Advanced require | dynamic require.context  - *complete*;
+ 4.6. Advanced require | ContextReplacementPlugin - *complete*;
+ 4.7. Advanced require | IgnorePlugin + summary   - *complete*;

***
+ 5.1. External libraries | CDN and myBuild: externals                          - *complete*;
+ 5.2. External libraries | Local: ProvidePlugin                                - *complete*;
+ 5.3. External libraries | Optimisation: noParse, include(babel-loader config) - *complete*;
+ 5.4. External libraries | Legacy: pathes, imports/exports                     - *complete*;
+ 5.5. External libraries | expose & script-loader                              - *i just realized*;

***
+ 6.1. Styles and assets | `nav`, style-loader            - *complete*;
+ 6.2. Styles and assets | css-loader, file-loader        - *complete*;
+ 6.3. Styles and assets | `header`, `footer`, url-loader - *complete*;
+ 6.4. Styles and assets | `main`, jade-loader            - *complete*;
+ 6.5. Styles and assets | post-css, sass-loader (scss)   - *complete*;
+ 6.6. Styles and assets | ExtractTextPlugin              - *complete*;

***
+ 7.1. Browser cache | config - *get started*;









