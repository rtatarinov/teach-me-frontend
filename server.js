const redirect = require('fastify')({
  logger: true,
});

const path = require('path');

const fastify = require('fastify')({
  logger: true,
  http2: true,
  ignoreTrailingSlash: true,
  allowHTTP1: true,
  cert: path.join(__dirname, './.ssl/certificate.crt'),
});

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'build'),
});

const listenCallback = function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
};

redirect.all('/*', (req, res) => {
  res.redirect(`https://${req.hostname}${req.req.url}`);
});

fastify.get('/', function (req, reply) {
  reply.sendFile('index.html', path.join(__dirname, 'build'));
});

fastify.get('/env.js', function (req, reply) {
  reply
    .header('Content-Type', 'application/javascript; charset=utf-8')
    .send(`window.__TEACH_ME_CONFIG__ = ${JSON.stringify(require('./env'))};`);
});

fastify.setNotFoundHandler(function (request, reply) {
  reply.sendFile('index.html', path.join(__dirname, 'build'));
});

redirect.listen(80, '0.0.0.0');
fastify.listen(443, '0.0.0.0', listenCallback);
