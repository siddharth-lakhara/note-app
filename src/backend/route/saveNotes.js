const Models = require('../models');

const saveNotes = notes => new Promise((resolve) => {
  const PromiseArray = [];
  Models.notes.destroy({ where: {} }).then(() => {
    const notesJSON = JSON.parse(notes);
    notesJSON.map((elem) => {
      PromiseArray.push([
        Models.notes.create({
          keyid: elem.key,
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
    saveNotes(req.payload).then(() => {
      reply('Save notes called');
    });
  },
}];
