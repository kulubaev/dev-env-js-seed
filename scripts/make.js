import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

/*eslint-disable no-console */
webpack(config).run((err, stats) => {
  if(err){
    console.error(chalk.red(err));
    return 1;
  }

  const statistics = stats.toJson();

  switch(true){
    case statistics.hasErrors:
      return statistics.errors.map(err => console.error(chalk.red(err)));
    case statistics.hasWarnings:
      console.warning(chalk.yellow('following erros has been generated by webpack'));
      statistics.warnings.map(warning => console.log(chalk.yellow(warning)));
      break;
    default:
      console.log(`webpack stats: ${stats}`);
      console.log(chalk.green('app build phase successfully finalized and result files reside inside "/dist" folder'))
      break;
  }
  return 0;
});
