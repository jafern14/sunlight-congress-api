'use strict';

import * as Hapi from 'hapi';
import { request } from 'request';
import { Constants, LegislatorsConstants } from '../lib/constants';

export class LegislatorController {
    private route_url: string;
    private route_url_location: string;

    constructor() {
        this.route_url = Constants.API_BASE_URL + LegislatorsConstants.API_ENDPOINT;
        this.route_url_location = this.route_url + LegislatorsConstants.LOCATE_BY_ZIP;
    }

    public legislators(req: Hapi.Request, reply: Hapi.IReply) {
        request(this.route_url + '?query=' + req.query.search,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    public legislatorById(req: Hapi.Request, reply: Hapi.IReply) {
        request(this.route_url + '?bioguide_id=' + req.params.id,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    public legislatorByZip(req: Hapi.Request, reply: Hapi.IReply) {
        request(this.route_url_location + req.params.zip,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
        };
};
