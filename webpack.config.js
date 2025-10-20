const path = require("path")
const postCSSPlugins = [
    require("postcss-import")
    , require("postcss-mixins")
    , require("postcss-simple-vars")
    , require("postcss-nested")
    , require("autoprefixer")
]

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
devServer: {
    setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
        }
        // HTML файлуудыг хянах
        devServer.watchFiles(["./app/**/*.html"]);
        return middlewares;
    },
    static: {
        directory: path.join(__dirname, 'app'),
    },
    hot: true,
    open: true,
    port: 9000,
    host: "0.0.0.0"
    
},
    mode: "development",
  //  watch: true,
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader", {loader: 
                    'postcss-loader', options: {postcssOptions: {plugins: 
                        postCSSPlugins}}}]
            }
        ]
    }
}
