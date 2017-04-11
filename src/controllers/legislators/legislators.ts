'use strict';

import * as request from 'request';
import { Constants, LegislatorsConstants } from '../../lib/constants';
import { IServerConfigurations } from '../../configurations';

export default class LegislatorController {
    private route_url: string;
    private route_url_location: string;
    private configs: IServerConfigurations;

    constructor(configs: IServerConfigurations) {
        this.route_url = Constants.API_BASE_URL + LegislatorsConstants.API_ENDPOINT;
        this.route_url_location = this.route_url + LegislatorsConstants.LOCATE_BY_ZIP;
        this.configs = configs;
    }

    public legislators(req: any, reply: any) {
        request(this.route_url + '?query=' + req.query.search,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    public legislatorById(req: any, reply: any) {
        request(this.route_url + '?bioguide_id=' + req.params.id,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    public legislatorByZip(req: any, reply: any) {
        request(this.route_url_location + req.params.zip,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };
};
