import chalk from 'chalk';
import * as path from 'path';
import { isExists, copyDir, writeFile } from './utils/file';
import { lastest } from './utils/latestversion';
import { gulp } from './configfile/gulp.package';

const templatesPath = '../templates/gulp-project';

async function createPackage(projectDir: string) {

    gulp.devDependencies['autoprefixer'] = (await lastest('autoprefixer')) as string;
    gulp.devDependencies["browser-sync"] = (await lastest('browser-sync')) as string;
    gulp.devDependencies["cssnano"] = (await lastest('cssnano')) as string;
    gulp.devDependencies["del"] = (await lastest('del')) as string;
    gulp.devDependencies["gulp"] = (await lastest('gulp')) as string;
    gulp.devDependencies["gulp-postcss"] = (await lastest('gulp-postcss')) as string;
    gulp.devDependencies["gulp-rename"] = (await lastest('gulp-rename')) as string;
    gulp.devDependencies["gulp-sass"] = (await lastest('gulp-sass')) as string;
    gulp.devDependencies["gulp-sourcemaps"] = (await lastest('gulp-sourcemaps')) as string;
    //gulp.devDependencies["gulp-terser"] = (await lastest('gulp-terser')) as string;
    gulp.devDependencies["gulp-javascript-obfuscator"] =
        (await lastest('gulp-javascript-obfuscator')) as string;

    // ghi file package
    try {
        let pkgFile = path.resolve(projectDir, 'package.json');

        await writeFile(pkgFile, JSON.stringify(gulp, undefined, 5));
        console.log('\t File ',
            chalk.green.bold('package.json'),
            ' created succesfully!'
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export const createGulpTemplate = async (name: string) => {

    if (await isExists(name)) {
        console.error(
            chalk.red.bold('Error!'), `\t Directory ${name} already exist!`
        );
        process.exit(1);
    }

    // copy Templates
    console.log(chalk.green.bold('\n\t Copy Templates:'));
    let srcBackend = path.resolve(__dirname, templatesPath);
    await copyDir(srcBackend, name);

    await createPackage(name);
    console.log('\t %s Project ready!\n', chalk.green.bold(name));
    // Install dependencies
    console.log('\t Run command: %s %s; %s to install the Dependencies\n',
        chalk.green.bold("cd"),
        chalk.red.bold(name),
        chalk.green.bold(" npm install"));
    // install gulp
    console.log('\t Run command %s  to install Gulp globally\n',
        chalk.green.bold("npm install -g gulp"));
}