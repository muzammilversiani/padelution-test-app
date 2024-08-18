
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
  host?: IPage,
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
