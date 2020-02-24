#!/usr/bin/env node
import program from 'commander';
import chalk from 'chalk';

import { createTemplate } from './commands/new.command';
import { createGulpTemplate } from './commands/gulp.command';
import { createTSTemplate } from './commands/ts.command';

const VERSION = '2.0.0';
const NAME = 'create';

program.
    version(VERSION).name(NAME)
    .description('Generator Boilerplate')
    .arguments('<command>')
    .action((command) => {
        console.log('Command %s does not exits',
            chalk.red.bold(command));
    });
// Vì chỉ dùng để thiết kết mẫu nên dùng js => nếu có nhu cầu về TS sẽ sửa lại
// create new-wp <project>
program
    .command('new-wp <project>')
    .alias('w')
    .description('Create new Templates')
    .action((project) => createTemplate(project));

// create new-gulp <project>
program
    .command('new-gulp <project>')
    .alias('g')
    .description('Create new Templates with gulpfile')
    .action((project) => createGulpTemplate(project));

// create new-ts <project>
program
    .command('new-ts <project>')
    .alias('t')
    .description('Create new Typescript project')
    .action((project) => createTSTemplate(project));

program.parse(process.argv);

if (process.argv.length < 3) {
    console.log('Command does not supported!');
}