export interface IUserAvatar {
  url: string;
  size: string;
}

export interface INotionButton {
  text?: string;
  icon?: React.ReactNode;
  link?: string;
  cName?: string;
  toggle?: boolean;
  hotkey?: string;
  id?: number;
  childrenPages?: INotionButton[] | null;
  padding?: number;
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

export interface ICoverUrlPosition {
  url: string | null;
  position: number;
}

export interface IPage {
  object: string;
  id: number;
  cover: null | ICoverUrlPosition;
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
    pageState: IPage;
    setPageState: React.Dispatch<React.SetStateAction<IPage>>;
  };
}

export interface IButtonStyle {
  description: string;
  font: string;
  target: string;
  handle: (font: string) => void;
}

export interface IButtonSwitch {
  text?: string;
  status: boolean;
  handle?: () => void;
}

export interface ISwitch {
  status: boolean;
}

export interface IButtonTab {
  text: string;
  tab: string;
  target: string;
  handle: React.Dispatch<React.SetStateAction<string>>;
}
