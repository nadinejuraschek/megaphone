import { ICurrentUser } from '../../types';

export interface IMessageTimeline {
  profileImageUrl: string;
  username: string;
}

export interface INewMessage {
  currentUser: ICurrentUser;
}
