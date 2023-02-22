import { Tlanguage, Ttheme } from "./types";

import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "react-query";
import { InlineStyle } from "../editor/TextEditor/config";
import { BlockType } from "../editor/TextEditor/config";

export interface IUserAvatar {
  url: string;
  size: string;
}

export interface IEmoji {
  emoji: string;
}

export interface INotionButton {
  _id?: string;
  text?: string;
  icon?: React.ReactNode;
  src?: string;
  link?: string;
  cName?: string;
  name?: string;
  toggle?: boolean | string;
  disabled?: boolean;
  hotkey?: React.ReactNode;
  target?: string;
  InlineStyle?: InlineStyle;
  blockType?: BlockType;
  state?: string;
  dataPage?: IPage | null;
  padding?: number;
  handle?: () => void;
  onClick?: () => void;
  handleInlineStyle?: (InlineStyle: InlineStyle) => void;
  handleBlockType?: (blockType: BlockType) => void;
  handleEvent?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IButtonModal {
  text?: string;
  type?: string;
  hotkey?: string;
  icon?: React.ReactNode;
  cName?: string;
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
  _id?: string;
  content: string;
  name: string;
  icon: string;
  comment: string;
  favorite: boolean;
  property: {
    font?: string;
    small_text?: boolean;
    full_width?: boolean;
  };
  dataTrash: string;
  dataAdd: string;
  dataMod: string;
  cover: {
    url?: string;
    position?: number;
  };
  children_page: IPage[] | null;
  prev?: IPage | null;
}

export interface IPages {
  pages: IPage[];
}

export interface IUserData {
  id?: string;
  email?: string;
  password?: string;
  diskSpace?: number;
  usetSpace?: number;
  avatar: string;
  name: string;
  active: boolean;
  token?: string;
  language: Tlanguage;
  theme: Ttheme;
  pages: IPage[];
  refreshToken?: string;
  accessToken?: string;
}

export interface IUser {
  user: IUserData;
}

export interface IUserReturn {
  data: IUser;
  status: number;
}

export interface IUserResponseMessage {
  pages?: IPage[];
  message: string;
  status?: number;
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
  userLogin: IUserEmailPassword | null;
  isLoading: boolean;
  error: string;
  navigate: boolean;
  modalTarget: string;
  activePage: IPage | null;
  arrayPage: IPage[] | null;
  favoritePage: IPage[] | null;
  trashPage: IPage[] | null;
  breadcrumbs: IPage[] | null;
  lang: Tlanguage;
  theme: Ttheme;
}

export interface ISearch {
  dataPages: IPage[] | null;
  text: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
  hotkey?: string;
  disabled?: boolean;
  target?: string;
  cName?: string;
  handle?: (pageId: string) => void;
  handleButton?: (pageId: string) => void;
}

export interface ISearchRow {
  page: IPage;
  type?: string;
  disabled?: boolean;
  handle?: (pageId: string) => void;
  handleButton?: (pageId: string) => void;
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

export interface IStyleTool {
  button: { opacity: number; y: number };
  format: { opacity: number; y: number };
}

export type EditorChangeType =
  | "adjust-depth"
  | "apply-entity"
  | "backspace-character"
  | "change-block-data"
  | "change-block-type"
  | "change-inline-style"
  | "move-block"
  | "delete-character"
  | "insert-characters"
  | "insert-fragment"
  | "redo"
  | "remove-range"
  | "remove-block"
  | "spellcheck-change"
  | "split-block"
  | "undo";
