'use strict';

export class Constants {
	public static readonly API_BASE_URL: string = 'https://congress.api.sunlightfoundation.com/';
}

export class VotesConstants {
	public static readonly API_ENDPOINT: string = 'votes';
	public static readonly VOTER_INFO_QUERY_STR: string = '?breakdown&fields=chamber,congress,number,question,required,result,roll_id,roll_type,source,url,vote_type,voted_at,year,voters,breakdown';
	public static readonly VOTE_TOTALS_QUERY_STR: string = '?chamber=senate&order=voted_at&breakdown&fields=chamber,congress,number,question,required,result,roll_id,roll_type,source,url,vote_type,voted_at,year,breakdown.total';
}

export class LegislatorsConstants {
	public static readonly API_ENDPOINT: string = 'legislators';
	public static readonly LOCATE_BY_ZIP: string = '/locate?zip=';
}

export class BillsConstants {
	public static readonly API_ENDPOINT: string = 'bills';
}
