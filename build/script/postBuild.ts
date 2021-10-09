// #!/usr/bin/env node

import { runBuildConfig } from './buildConf';
import chalk from 'chalk';

// @ts-ignore
import pkg from '../../package.json';

export const runBuild = async () => {
  try {
    // eslint-disable-next-line no-undef
    const argvList = process.argv.splice(2);

    // Generate configuration file
    if (!argvList.includes('disabled-config')) {
      await runBuildConfig();
    }

    console.log(`✨ ${chalk.cyan(`[${pkg.name}]`)}` + ' - build successfully!');
  } catch (error) {
    console.log(chalk.red('vite build error:\n' + error));
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};
runBuild();
