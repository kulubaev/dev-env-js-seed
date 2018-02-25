//register babel to transpile before tests are run
require('babel-register')();
//disable webpack features for mocha, since mocha will not understand
require.extensions['.css'] = () => {};
