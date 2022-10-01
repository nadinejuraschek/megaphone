export type User = {
  email: string;
  id?: string;
  password: string;
  profileImageUrl: string;
  username: string;
};

export type Message = {
  _id: string;
  createdAt: Date;
  text: string;
  user: {
    _id: string;
    profileImageUrl: string;
    username: string;
  };
};

export type AuthType = 'register' | 'signin';

export interface ICurrentUser {
  isAuthenticated: boolean;
  user: User;
}

export type Errors = {
  message: string;
};
