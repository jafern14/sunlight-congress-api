'use strict';

import * as Hapi from 'hapi';
import LegislatorsController from './legislators';
import { IServerConfigurations } from '../../configurations';

export default function (server: Hapi.Server, configs: IServerConfigurations) {

	const legislatorsController = new LegislatorsController(configs);
	server.bind(legislatorsController);

	server.route({
		method: 'GET',
		path: '/legislator',
		handler: legislatorsController.legislators,
		config: {
			tags: ['api', 'legislators'],
			description: 'Get all legislators.'
		}
	});

  server.route({
		method: 'GET',
		path: '/legislator/{id}',
		handler: legislatorsController.legislatorById,
		config: {
			tags: ['api', 'legislators'],
			description: 'Get a legislator by id.'
		}
	});

  server.route({
		method: 'GET',
		path: '/legislator/zip/{zip}',
		handler: legislatorsController.legislatorByZip,
		config: {
			tags: ['api', 'legislators'],
			description: 'Get all legislators in a zip code.'
		}
	});
}
