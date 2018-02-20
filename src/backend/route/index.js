const ping = require('./ping');
const fetch = require('./fetchNotes');
const save = require('./saveNotes');

module.exports = [].concat(ping, fetch, save);
