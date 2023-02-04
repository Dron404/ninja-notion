export interface IUserAvatar {
  url: string;
  size: string;
}

export interface INotionButton {
  text?: string | undefined;
  icon?: React.ReactNode | undefined;
  link?: string | undefined;
  cName?: string | undefined;
  toggle?: boolean | undefined;
  hotkey?: string | undefined;
  id?: number | undefined;
  childrenPages?: INotionButton[] | null | undefined;
  padding?: number | undefined;
  handle?: () => void;
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

export interface IPage {
  object: string;
  id: number;
  cover: null | string;
  icon: null | string;
  favorite: boolean;
  property: {
    font: string;
    small_text: boolean;
    full_width: boolean;
  };
  name: string;
  url: string;
  children: IPage[] | null;
}

export interface IData {
  pages: IPage[] | null;
}

export interface IStateContext {
  context: {
    handleAsideToggle: () => void;
    asideStatus: boolean;
  };
}

export interface IButtonStyle {
  name?: string;
  description: string;
  cName?: string;
  status: boolean;
  handle?: () => void;
}

export interface IButtonCheckbox {
  text?: string;
  status: boolean;
  handle?: () => void;
}
