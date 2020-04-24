/* eslint-disable no-console, import/no-dynamic-require */
function getConfig(mode) {
  return mode === 'development' ? 'dev.js' : 'prod.js';
}

module.exports = (env, options) => {
  const os = require('os');
  function smartConsoleLog(msgArg, isError) {
    const msg = msgArg || os.EOL;
    const method = isError ? 'error' : 'log';
    console[method](msg);
  }

  if (process.versions.node.split('.')[0] < 10) {
    smartConsoleLog('ERROR: This tool requires Node.js v10 or higher.', true);
    process.exit(1);
  }

  return require(`./${getConfig(options.mode)}`);
};
