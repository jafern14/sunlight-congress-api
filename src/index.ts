'use strict';

import * as Server from './server';
import * as Configs from './configurations';

console.log(`Running enviroment ${process.env.NODE_ENV || 'dev'}`);

// starting application server
const serverConfigs = Configs.getServerConfigs();
const server = Server.init(serverConfigs);

server.route({ method: 'GET', path: '/health', handler: (request, reply) => { reply('Server is running!'); } });

server.start(() => {
    console.log('Server running at:', server.info.uri);
});
