export interface IUserAvatar {
  url: string;
  size: string;
}

export interface INotionButton {
  text?: string;
  icon?: React.ReactNode;
  link?: string;
  cName?: string;
  toggle?: boolean | undefined;
  hotkey?: string;
}

export interface INotionButtonMini {
  icon?: React.ReactNode;
  link?: string;
  cName?: string;
}

export interface IAsideStatus {
  asideStatus: boolean;
  setAsideStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContentRow {
  block: string;
  color: string;
  placeholder: string;
  content: string;
}

export interface IStateContext {
  handleAsideToggle: () => void;
  asideStatus: boolean;
}
