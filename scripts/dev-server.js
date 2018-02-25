import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import chalk from 'chalk';

import config from '../webpack.config.dev';

/*eslint-disable no-console*/

const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, resp) => {
  resp.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {

  if(err){
    console.error(chalk.red(err));
  }else{
    open(`http://localhost:${port}`);
  }
});
