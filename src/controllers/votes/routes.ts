'use strict';

import * as Hapi from 'hapi';
import VotesController from './votes';
import { IServerConfigurations } from '../../configurations';

export default function (server: Hapi.Server, configs: IServerConfigurations) {

	const votesController = new VotesController(configs);
	server.bind(votesController);

	server.route({
		method: 'GET',
		path: '/votes/{id}',
		handler: votesController.voteById,
		config: {
			tags: ['api', 'votes'],
			description: 'Get vote by id.'
		}
	});

	server.route({
		method: 'GET',
		path: '/votes/chamber/{chamber}',
		handler: votesController.votesByChamber,
		config: {
			tags: ['api', 'votes'],
			description: 'Get the chamber for a vote by id.'
		}
	});
}
