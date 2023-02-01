export interface IUserAvatar {
  url: string;
  size: string;
}

export interface INotionButton {
  text?: string;
  src?: string;
  link?: string;
  width?: string;
}

export interface IAsideStatus {
  asideStatus: boolean;
  setAsideStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
