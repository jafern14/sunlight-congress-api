'use strict';

import * as request from 'request';
import { Constants } from '../../lib/constants';
import { IServerConfigurations } from '../../configurations';

export default class BillsController {
	private configs: IServerConfigurations;

	constructor(configs: IServerConfigurations) {
		this.configs = configs;
	}

	public fetchAllBills() {
		return {};
	}

}
