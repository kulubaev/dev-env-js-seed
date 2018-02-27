import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';


/*eslint-disable no-console*/

const port = 5000;
const app = express();

app.use(express.static('dist'));

app.get('*.js', (req, resp, next) => {
  req.url = req.url + '.gz';
  resp.set('Content-Encoding', 'gzip');
  next();

});
app.get('/', (req, resp) => {
  resp.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {

  if(err){
    console.error(chalk.red(err));
  }else{
    open(`http://localhost:${port}`);
  }
});
