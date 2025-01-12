#!/usr/bin/env node

import { Command } from 'commander';
import runGendiff from '../src/functions/gendiff.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<firstConfig>', 'path to first configuration file')
  .argument('<secondConfig>', 'path to second configuration file')
  .action((firstConfig, secondConfig) => {
    const result = runGendiff(firstConfig, secondConfig);
    console.log(result);
  });

program.parse(process.argv);
