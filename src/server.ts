'use strict';

import * as Hapi from 'hapi';
import { IServerConfigurations } from './configurations';
import * as Votes from './controllers/votes';
import * as Legislators from './controllers/legislators';

export function init(configs: IServerConfigurations) {
    const port = process.env.port || configs.port;
    const server = new Hapi.Server();

    server.connection({
        port: port,
        routes: {
            cors: true
        }
    });

    // setup Hapi Plugins
    const plugins: Array<string> = configs.plugins;
    const pluginOptions = {
        serverConfigs: configs
    };

    /*plugins.forEach((pluginName: string) => {
        var plugin: IPlugin = (require('./plugins/' + pluginName)).default();
        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
        plugin.register(server, pluginOptions);
    });*/

    // init Features
    Votes.init(server, configs);
    Legislators.init(server, configs);
    server.route({ method: 'GET', path: '/health', handler: (request, reply) => { reply('Server is running!'); } });

    return server;
};
