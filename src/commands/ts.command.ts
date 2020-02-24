import chalk from 'chalk';
import * as path from 'path';
import { isExists, copyDir, writeFile } from './utils/file';
import { lastest } from './utils/latestversion';
import { ts } from './configfile/tscript.package';

export const createTSTemplate = async (name: string) => {
    // copy vao la xong
    if (await isExists(name)) {
        console.error(
            chalk.red.bold('Error!'), `\t Directory ${name} already exist!`
        );
        process.exit(1);
    }

    // copy Templates
    console.log(chalk.green.bold('\n\t Copy Templates:'));
    let srcBackend = path.resolve(__dirname, '../templates.tscript');
    await copyDir(srcBackend, name);
    await createPackage(name);
    console.log('\t %s Project ready!\n', chalk.green.bold(name));
    // Install dependencies
    console.log('\t Run command: %s %s; %s to install the Dependencies\n',
        chalk.green.bold("cd"),
        chalk.red.bold(name),
        chalk.green.bold("npm install"));
}

async function createPackage(projectDir: string) {

    ts.devDependencies["nodemon"] = (await lastest('nodemon')) as string;
    ts.devDependencies["ts-node"] = (await lastest('ts-node')) as string;
    ts.devDependencies["typescript"] = (await lastest('typescript')) as string;


    // ghi file package
    try {
        let pkgFile = path.resolve(projectDir, 'package.json');

        await writeFile(pkgFile, JSON.stringify(ts, undefined, 5));
        console.log('\t File ',
            chalk.green.bold('package.json'),
            ' created succesfully!'
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
