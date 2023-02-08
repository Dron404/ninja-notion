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
  target?: string;
  state?: string;
  id?: number;
  childrenPages?: INotionButton[] | null;
  padding?: number;
  handle?: () => void;
}

export interface IButtonDefault {
  text: string;
  type: string;
  cName?: string;
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
  id: number;
  cover: null | ICoverUrlPosition;
  icon: null | string;
  favorite: boolean;
  property: {
    font: string;
    small_text: boolean;
    full_width: boolean;
  };
  comment: string;
  content: string;
  name: string;
  date_add: string;
  date_mod: string;
  date_trash: string;
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

export interface IButtonFont {
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

export interface ISettingsTab {
  text: string;
  icon?: React.ReactNode;
  target: string;
  state: string;
  handle: (state: string) => void;
}

export interface ILanguage {
  code: string;
  name: string;
  description: string;
}

export interface ILanguageList {
  ru: string;
  en: string;
  by: string;
}

export interface ITheme {
  code: string;
  name: ILanguageList;
  description: ILanguageList;
}
