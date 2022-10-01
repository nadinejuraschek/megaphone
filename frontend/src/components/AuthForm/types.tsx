import { AuthType, Errors, User } from '../../types';

export interface IAuthForm {
  buttonText: string;
  errors: Errors;
  heading: string;
  history: any;
  onAuth: (type: AuthType, user: User) => Promise<void>;
  register: boolean;
  removeError: () => void;
}
