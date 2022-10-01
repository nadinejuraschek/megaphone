export interface IMessageItem {
  date: Date;
  isCorrectUser: boolean;
  profileImageUrl: string;
  removeMessage: () => void;
  text: string;
  username: string;
}
