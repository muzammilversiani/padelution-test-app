
export interface ICountry {
  id: number;
  name: string;
  code: string;
}

export interface IPage {
  id: number;
  name: string;
  slug: string;
}

export interface IHost {
  id: number;
  name: string;
  slug: string;
  city: string;
  address: string;
}

export interface IEvent {
  id: number;
  name: string;
  description: string;
  start_at: string;
  days: number;
  status: number;
  city: string;
  created_at: string;
  updated_at: string;
  last_sign_up_at: string;
  max_participants: number;
  slug: string;
  start_at_time: string;
  country: ICountry;
  host?: IHost;
}

export interface ISuggestedItem {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface IFavoriteItem {
  id: number;
  type: string; // Can be 'event', 'ranking', 'league', OR 'player'
  icon: string;
  player?: IPlayer | null;
  event?: IEvent | null;
  league?: ILeague | null;
  ranking?: IRanking | null;
}

export interface IMessage {
  uuid: string;
  c_uuid: string;
  sender : {
    id: string;
    name: string;
  }
  content: string;
  message_type: number;
  media_url: string;
  created_at: string;
  updated_at: string;
}

export interface IChatUser {
  uuid: string;
  name: string;
  profile_photo_path: string;
  firstname: string;
  lastname: string;
}

export interface IChat {
  uuid: string;
  name: string;
  profile_photo_path: string;
  last_message?: IMessage;
  participants?: IChatUser[];
  unread_messages_count: number;
  created_at: string;
  updated_at: string;
}

export interface IAdBanner {
  id: number;
  url: string;
}

export interface IMatch {
  id: number;
  date: string;
  court: string;
  league: ILeague;
  team1: ITeam;
  team2: ITeam;
}

export interface ITeam {
  id: number;
  player1: IPlayer;
  player2: IPlayer;
}

export interface IPlayer {
  id: number;
  name: string;
  country: ICountry;
  ranking: number;
  age?: number;
}

export interface ILeague {
  id: number;
  name: string;
  type?: string | null;
  venue?: string | null;
}

export interface IRanking {
  id: number;
  name: string;
  team: string;
}

export interface IChatApiSingleResponse<T> {
  data: T;
}

export interface IChatApiCollectionResponse<T> {
  data: T[];
}
//
// export interface IChatStructure {
//   [uuid: string]: IChat;
// }
//
// export interface IChatsCollection<T> {
//   data: T;
// }

export interface IApiResponse<T> {
  data: T[];
  links?: any;
  meta?: any;
}
