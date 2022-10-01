import { ICurrentUser } from '../../types';

export interface IMessageList {
  fetchMessages: () => Promise<any>;
  removeMessage: (userId: string, messageId: string) => void;
  messages: any;
  currentUser: ICurrentUser;
}
