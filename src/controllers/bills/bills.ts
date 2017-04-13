'use strict';

import * as request from 'request';
import { Constants, BillsConstants } from '../../lib/constants';
import { IServerConfigurations } from '../../configurations';
var data = require('./bills.json');

export default class BillsController {
	private configs: IServerConfigurations;
	private route_url: string;

	constructor(configs: IServerConfigurations) {
		this.configs = configs;
		this.route_url = Constants.API_BASE_URL + BillsConstants.API_ENDPOINT; 
	}

	public fetchAllBills(req: any, reply: any) {
		reply(data);
	}

}
