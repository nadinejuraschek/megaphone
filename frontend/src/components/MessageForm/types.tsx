import { Errors } from '../../types';

export interface IMessageForm {
  postNewMessage: (message: string) => void;
  errors: Errors;
  history: any;
  removeError: () => void;
}
