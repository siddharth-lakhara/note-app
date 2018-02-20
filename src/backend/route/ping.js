
module.exports = [{
  path: '/ping',
  method: 'GET',
  handler: (req, reply) => {
    reply('pong');
  },
}];
