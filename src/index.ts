#!/usr/bin/env node
import program from 'commander';
import chalk from 'chalk';

import { createTemplate } from './commands/new.command';
const VERSION = '1.0.0';
const NAME = 'temp-g';

program.
    version(VERSION).name(NAME)
    .description('FontEnd with Webpack')
    .arguments('<command>')
    .action((command) => {
        console.log('Command %s does not exits',
            chalk.red.bold(command));
    });
// Vì chỉ dùng để thiết kết mẫu nên dùng js => nếu có nhu cầu về TS sẽ sửa lại
program
    .command('new <project>')
    .alias('n')
    .description('Create new Templates')
    .action((project) => createTemplate(project));

program.parse(process.argv);

if (process.argv.length < 3) {
    console.log('Command does not supported!');
}