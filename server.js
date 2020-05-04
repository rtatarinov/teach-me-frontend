const redirect = require('fastify')({
  logger: true,
});

const path = require('path');
const fs = require('fs');

const fastify = require('fastify')({
  logger: true,
  http2: true,
  https: {
    cert: fs.readFileSync('teachme.crt', 'utf8'),
    key: fs.readFileSync('teachme.key', 'utf8'),
  },
});

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

redirect.all('/*', (req, res) => {
  res.redirect(`https://${req.hostname}${req.req.url}`);
});

redirect.listen(80, '0.0.0.0');

fastify.listen(443, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err);
  }

  fastify.log.info(`server listening on ${address}`);
});
