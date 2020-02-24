
class WPPackage {
    name = 'fontend-mit-webpack';

    version = "0.0.0";

    description = "";

    main = "./src/index.js";

    scripts = {
        "build": "webpack --config webpack.prod.js",
        "serve": "webpack-dev-server --open --config webpack.dev.js",
        "dev": "nodemon --watch webpack.dev.js  dev-serve/serve.js"
    };

    keywords = [];
    author = "tranvd2010 <tranvd2010@gmail.com>";
    homepage = "";
    license = "ISC";

    devDependencies = {
        "webpack": "latest",
        "webpack-cli": "latest",
        "style-loader": "latest",
        "css-loader": "latest",
        "node-sass": "latest",
        "sass-loader": "latest",
        "postcss-loader": "latest",
        "autoprefixer": "latest",
        "file-loader": "latest",
        "html-loader": "latest",
        "html-webpack-plugin": "latest",
        "mini-css-extract-plugin": "latest",
        "nodemon": "latest",
        "webpack-dev-server": "latest",
        "express": "latest",
        "webpack-dev-middleware": "latest",
        "webpack-hot-middleware": "latest"
    };
}

export const wp = new WPPackage();