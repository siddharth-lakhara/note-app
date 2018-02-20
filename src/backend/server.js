const Hapi = require('hapi');
const Routes = require('./route');

const Server = new Hapi.Server();
Server.connection({
  host: 'localhost',
  port: 8080,
});

Server.start((err) => {
  if (err) { console.log(err); }
  console.log('Server started');
});

Server.route(Routes);
