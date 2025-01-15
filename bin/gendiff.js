#!/usr/bin/env node

import { Command } from 'commander';
import runGendiff from '../src/functions/gendiff.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const result = runGendiff(filepath1, filepath2);
    console.log(result);
  });

program.parse(process.argv);
