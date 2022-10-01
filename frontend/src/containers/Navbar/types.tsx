import { ICurrentUser } from '../../types';

export interface IDesktopNav {
  currentUser: ICurrentUser;
  signout: () => void;
}

export interface IMenuBtn {
  currentUser: ICurrentUser;
  signout: () => void;
  toggleNav: () => void;
  open: boolean;
}

export interface IMobileNav {
  currentUser: ICurrentUser;
}
