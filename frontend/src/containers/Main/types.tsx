import { Errors, ICurrentUser } from '../../types';

export interface IMain {
  authUser: () => Promise<void>;
  currentUser: ICurrentUser;
  errors: Errors;
  removeError: () => void;
}
