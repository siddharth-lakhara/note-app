const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/fetch',
  handler: (req, reply) => {
    Models.notes.findAll().then((allNotes) => {
      reply(allNotes);
    });
  },
}];
