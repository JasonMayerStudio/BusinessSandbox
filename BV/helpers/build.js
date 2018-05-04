/* eslint-disable func-names, prefer-arrow-callback, no-console, no-else-return */
/* eslint-disable import/no-extraneous-dependencies */

import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.babel';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // Fatal error. Stop here.
    console.log(chalk.red(err));
    return 1;
  } else {
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      return jsonStats.errors.map((error) => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      jsonStats.warnings.map((warning) => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(chalk.green('Your app has been built for production and to /dist'));
    return 0;
  }
});

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable func-names, prefer-arrow-callback, no-console, no-else-return */
