'use strict';

import { request } from 'request';
import { Constants, VotesConstants } from '../lib/constants';

export class VoteController { 
    route_url: string;
    voter_info: string;
    vote_totals: string;

    constructor() {
        this.route_url = Constants.API_BASE_URL + VotesConstants.API_ENDPOINT;
        this.voter_info = this.route_url + VotesConstants.VOTER_INFO_QUERY_STR;
        this.vote_totals = this.route_url + VotesConstants.VOTE_TOTALS_QUERY_STR;
    }

    voteById(req, reply) {
        request(this.route_url + this.voter_info + '&roll_id=' + req.params.id,
            (err, response, body) => {
                 reply(err || JSON.parse(body));
            });
    };

    votesByChamber(req, reply) {
        request(this.route_url + this.vote_totals + '&chamber=' + req.params.chamber + '&per_page=' + req.query.count + '&page=' + req.query.page, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };
};
