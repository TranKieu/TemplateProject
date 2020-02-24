import chalk from 'chalk';
import * as path from 'path';
import { isExists, copyDir, writeFile } from './utils/file';
import { lastest } from './utils/latestversion';
import { wp } from './configfile/wp.package';

export const createTemplate = async (name: string) => {
    // copy vao la xong
    if (await isExists(name)) {
        console.error(
            chalk.red.bold('Error!'), `\t Directory ${name} already exist!`
        );
        process.exit(1);
    }

    // copy Templates
    console.log(chalk.green.bold('\n\t Copy Templates:'));
    let srcBackend = path.resolve(__dirname, '../templates');
    await copyDir(srcBackend, name);
    await createPackage(name);
    console.log('\t %s Project ready!\n', chalk.green.bold(name));
}

async function createPackage(projectDir: string) {

    wp.devDependencies["webpack"] = (await lastest('webpack')) as string;

    wp.devDependencies["webpack-cli"] = (await lastest('webpack-cli')) as string;
    wp.devDependencies["style-loader"] = (await lastest('style-loader')) as string;
    wp.devDependencies["css-loader"] = (await lastest('css-loader')) as string;
    wp.devDependencies["node-sass"] = (await lastest('node-sass')) as string;
    wp.devDependencies["sass-loader"] = (await lastest('sass-loader')) as string;
    wp.devDependencies["postcss-loader"] = (await lastest('postcss-loader')) as string;
    wp.devDependencies["autoprefixer"] = (await lastest('autoprefixer')) as string;
    wp.devDependencies["file-loader"] = (await lastest('file-loader')) as string;
    wp.devDependencies["html-loader"] = (await lastest('html-loader')) as string;
    wp.devDependencies["html-webpack-plugin"] = (await lastest('html-webpack-plugin')) as string;
    wp.devDependencies["mini-css-extract-plugin"] = (await lastest('mini-css-extract-plugin')) as string;
    wp.devDependencies["nodemon"] = (await lastest('nodemon')) as string;
    wp.devDependencies["webpack-dev-server"] = (await lastest('webpack-dev-server')) as string;
    wp.devDependencies["express"] = (await lastest('express')) as string;
    wp.devDependencies["webpack-dev-middleware"] = (await lastest('webpack-dev-middleware')) as string;
    wp.devDependencies["webpack-hot-middleware"] = (await lastest('webpack-hot-middleware')) as string;

    // ghi file package
    try {
        let pkgFile = path.resolve(projectDir, 'package.json');

        await writeFile(pkgFile, JSON.stringify(wp, undefined, 5));
        console.log('\t File ',
            chalk.green.bold('package.json'),
            ' created succesfully!'
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}