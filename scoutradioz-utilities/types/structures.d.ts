import { Document as MongoDocument } from 'mongodb';
export declare interface MatchScouting extends MongoDocument {
    year: number;
    event_key: EventKey;
    org_key: OrgKey;
    match_key: MatchKey;
    match_number: number;
    time: number;
    alliance: 'red' | 'blue';
    team_key: TeamKey;
    match_team_key: MatchTeamKey;
    assigned_scorer: string;
    actual_scorer?: string;
    data?: AnyDict;
    useragent?: UserAgent;
}
export declare interface Match extends MongoDocument {
    key: MatchKey;
    event_key: EventKey;
    comp_level: CompLevel;
    set_number: number;
    match_number: number;
    alliances: {
        red: MatchAllianceInfo;
        blue: MatchAllianceInfo;
    };
    winning_alliance: 'red' | 'blue' | '';
    score_breakdown: {
        red: AnyDict;
        blue: AnyDict;
    };
    videos: Array<MatchVideo>;
    time: number;
    actual_time: number;
    predicted_time: number;
    post_result_time?: number;
}
export declare interface Ranking extends MongoDocument {
    dq: number;
    extra_stats: any[];
    matches_played: number;
    qual_average: any;
    rank: number;
    record: {
        losses: number;
        ties: number;
        wins: number;
    };
    sort_orders: number[];
    team_key: TeamKey;
    event_key: EventKey;
}
export declare interface Team extends MongoDocument {
    address: string | null;
    city: string | null;
    country: string | null;
    gmaps_place_id: any;
    gmaps_url: any;
    key: TeamKey;
    lat: any;
    lng: any;
    location_name: any;
    motto: string | null;
    name: string;
    nickname: string;
    postal_code: string | null;
    rookie_year: number | null;
    school_name: string | null;
    state_prov: string | null;
    team_number: number;
    website: string | null;
}
export declare interface AggRange extends MongoDocument {
    org_key: OrgKey;
    event_key: EventKey;
    key: string;
    MINmin: number;
    MINmax: number;
    AVGmin: number;
    AVGmax: number;
    VARmin: number;
    VARmax: number;
    MAXmin: number;
    MAXmax: number;
}
export declare interface Upload extends MongoDocument {
    org_key: OrgKey;
    year: number;
    team_key: TeamKey;
    uploader: {
        name: string;
        id: string;
        useragent: UserAgent;
        upload_time: number;
    };
    s3_key: string;
    index: number;
    removed?: boolean;
}
declare class MatchVideo {
    type: string;
    key: string;
}
declare class MatchAllianceInfo {
    team_keys: Array<TeamKey>;
    score: number;
    surrogate_team_keys: Array<TeamKey>;
    dq_team_keys: Array<TeamKey>;
}
export declare type OrgKey = string;
export declare type EventKey = string;
export declare type MatchKey = string;
export declare type MatchTeamKey = string;
export declare type TeamKey = string;
export declare type CompLevel = 'qm' | 'qf' | 'sf' | 'f';
declare interface AnyDict {
    [key: string]: string | number | boolean | null | undefined;
}
export declare interface UserAgent {
    ip: string;
    device: string;
    os: string;
    browser: string;
}
export {};