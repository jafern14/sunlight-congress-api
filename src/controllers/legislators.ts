'use strict';

import { request } from 'request';
import { Constants, LegislatorsConstants } from '../lib/constants';

export class LegislatorController {
    route_url: string;
    route_url_location: string;

    constructor() {
        this.route_url = Constants.API_BASE_URL + LegislatorsConstants.API_ENDPOINT;
        this.route_url_location = this.route_url + LegislatorsConstants.LOCATE_BY_ZIP;
    }

    legislators(req, reply) {
        request(this.route_url + '?query=' + req.query.search, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    legislatorById(req, reply) {
        request(this.route_url + '?bioguide_id=' + req.params.id, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    legislatorByZip(req, reply) {
        request(this.route_url_location + req.params.zip, 
        (err, response, body) => {
            reply(err || JSON.parse(body));
        });
    };
};
