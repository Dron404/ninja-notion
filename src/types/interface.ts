import { Tlanguage, Ttheme } from "./types";

import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "react-query";

export interface IUserAvatar {
  url: string;
  size: string;
}

export interface IEmoji {
  emoji: string;
}

export interface INotionButton {
  text?: string;
  icon?: React.ReactNode;
  link?: string;
  cName?: string;
  name?: string;
  toggle?: boolean;
  hotkey?: string;
  target?: string;
  state?: string;
  _id?: string;
  children_page?: INotionButton[] | null;
  padding?: number;
  fav?: boolean;
  favorite?: boolean;
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
  code: Tlanguage;
  name: string;
  description: string;
}

export interface ILanguageList {
  ru: string;
  en: string;
  pl: string;
}

export interface ITheme {
  code: Ttheme;
  name: ILanguageList;
  description: ILanguageList;
}

export interface IValue {
  value: string;
}

export interface IPage {
  _id: string;
  content: string;
  name: string;
  icon: string;
  comment: string;
  favorite: boolean;
  property: {
    font: string;
    small_text: boolean;
    full_width: boolean;
  };
  dataTrash: string;
  dataAdd: string;
  dataMod: string;
  cover: {
    url: string;
    position: number;
  };
  children_page: IPage[];
}

export interface IPages {
  pages: IPage[];
}

export interface IUserData {
  id: string;
  email?: string;
  password?: string;
  diskSpace?: number;
  usetSpace?: number;
  avatar: string;
  name: string;
  active: boolean;
  token?: string;
  accessToken: string;
  language: Tlanguage;
  theme: Ttheme;
  pages: IPage[];
}

export interface IUser {
  user: IUserData;
}

export interface IUserReturn {
  data: IUser;
  status: number;
}

export interface IUserResponseMessage {
  message: string;
  status: number;
}

export interface IReactQuery<T> {
  isLoading: boolean;
  data: T | undefined;
  error: unknown;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<T | undefined, unknown>>;
}

export interface IUserEmailPassword {
  email: string;
  password: string;
  name?: string;
}

export interface IUserPages {
  pages: IPage[];
  accessToken: string;
}

export interface IUserState {
  user: IUserData | null;
  isLoading: boolean;
  error: string;
  navigate: boolean;
  activePage: IPage | null;
  favoritePage: IPage[] | null;
  trashPage: IPage[] | null;
  arrayPage: IPage[] | null;
  breadcrumbs: IPage[] | null;
  lang: Tlanguage;
  theme: Ttheme;
}

export interface ISearchRow {
  page: IPage;
  handle: () => void;
}

export interface IActivePage {
  activePage: IPage | null;
  breadcrumbs: IPage[] | null;
}

export interface IUserPagesReplace {
  replaceObject: Partial<IPage>;
  pageId: string;
  user: IUserData;
}

export interface IUpdateUserPages {
  replaceObject: Partial<IPage>;
  pageId: string;
  accessToken: string;
  userPages: IPage[];
}
