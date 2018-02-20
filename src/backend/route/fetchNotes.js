const Models = require('../models');

const fetchNotes = () => {
  Models.notes.findAll({ where: {} })
    .then(allNotes => allNotes);
};

module.exports = [{
  method: 'GET',
  path: '/fetch',
  handler: (req, reply) => {
    fetchNotes().then((allNotes) => {
      reply(allNotes);
    });
  },
}];
