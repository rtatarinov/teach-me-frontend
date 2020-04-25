const fastify = require('fastify')({
  logger: true,
});

const path = require('path');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'build'),
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

fastify.listen(80, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});
