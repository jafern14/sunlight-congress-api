'use strict';

import * as Hapi from 'hapi';
import BillsController from './bills';
import { IServerConfigurations } from '../../configurations';

export default function (server: Hapi.Server, configs: IServerConfigurations) {

	const billsController = new BillsController(configs);
	server.bind(billsController);

	server.route({
		method: 'GET',
		path: '/bills',
		handler: billsController.fetchAllBills,
		config: {
			tags: ['api', 'bills'],
			description: 'Get all bills.'
		}
	});
}
