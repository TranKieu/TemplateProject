
class GulpPackage {
    name = 'fontend-mit-gulp';

    version = "0.0.0";

    description = "";

    main = "./src/index.js";

    scripts = {
        "dev": "gulp"
    };

    keywords = [];
    author = "tranvd2010 <tranvd2010@gmail.com>";
    homepage = "";
    license = "ISC";

    devDependencies = {
        "autoprefixer": "latest",
        "browser-sync": "latest",
        "cssnano": "latest",
        "del": "latest",
        "gulp": "latest",
        "gulp-postcss": "latest",
        "gulp-rename": "latest",
        "gulp-sass": "latest",
        "gulp-sourcemaps": "latest",
        "gulp-terser": "latest"
    };
}

export const gulp = new GulpPackage();