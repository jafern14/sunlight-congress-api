'use strict';

import * as request from 'request';
import { Constants, VotesConstants } from '../../lib/constants';
import { IServerConfigurations } from '../../configurations';

export default class VotesController {
    private route_url: string;
    private voter_info: string;
    private vote_totals: string;
    private configs: IServerConfigurations;

    constructor(configs: IServerConfigurations) {
        this.route_url = Constants.API_BASE_URL + VotesConstants.API_ENDPOINT;
        this.voter_info = VotesConstants.VOTER_INFO_QUERY_STR;
        this.vote_totals = VotesConstants.VOTE_TOTALS_QUERY_STR;
        this.configs = configs;
    }

    public voteById(req: any, reply: any) {
        request(this.route_url + this.voter_info + '&roll_id=' + req.params.id,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };

    public votesByChamber(req: any, reply: any) {
        request(this.route_url + this.vote_totals + '&chamber=' + req.params.chamber + '&per_page=' + req.query.count + '&page=' + req.query.page,
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    };
};
