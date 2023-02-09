import { Tfont, Tlanguage, Ttheme } from "./types";

import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "react-query";

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
  id?: string;
  children_page?: INotionButton[] | null;
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
  pl: string;
}

export interface ITheme {
  code: string;
  name: ILanguageList;
  description: ILanguageList;
}

export interface IValue {
  value: string;
}

export interface IPage {
  id: string;
  content?: string;
  name?: string;
  icon?: string;
  comment?: string;
  favorite?: boolean;
  property?: {
    font?: Tfont;
    small_text?: boolean;
    full_width?: boolean;
  };
  dataTrash?: string;
  dataAdd?: string;
  dataMod?: string;
  cover?: {
    url: string;
    position: number;
  };
  children_page?: IPage[];
}

export interface IPages {
  pages: IPage[] | undefined;
}

export interface IUserData {
  email: string;
  password: string;
  diskSpace?: number;
  usetSpace?: number;
  avatar?: string;
  name?: string;
  active?: true;
  token?: string;
  language?: Tlanguage;
  theme?: Ttheme;
  pages?: IPage[];
}

export interface IUser {
  user: IUserData;
}

export interface IUserReturn {
  data: IUser;
  status: number;
}

export interface IUserMessage {
  status: number;
  message: string;
}

export interface IReactQuery<T> {
  isLoading: boolean;
  data: T | undefined;
  error: unknown;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<T | undefined, unknown>>;
}
