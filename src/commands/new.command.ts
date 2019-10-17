import chalk from 'chalk';
import * as path from 'path';
import { isExists, copyDir } from './utils/file';

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

    console.log('\t %s Project ready!\n', chalk.green.bold(name));
}