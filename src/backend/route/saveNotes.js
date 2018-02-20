const Models = require('../models');

const saveNotes = notesJSON => new Promise((resolve) => {
  const PromiseArray = [];
  Models.notes.destroy({ where: {} }).then(() => {
    notesJSON.map((elem) => {
      PromiseArray.push([
        Models.notes.create({
          keyId: elem.keyId,
          title: elem.title,
          message: elem.message,
        }),
      ]);
    });
  });
  Promise.all(PromiseArray).then(() => {
    resolve();
  });
});

module.exports = [{
  method: 'POST',
  path: '/save',
  handler: (req, reply) => {
    saveNotes(req.payload.notesJSON).then(() => {
      reply('Save notes called');
    });
  },
}];
