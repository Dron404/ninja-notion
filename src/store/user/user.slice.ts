import {
  IPage,
  IUserData,
  IUserEmailPassword,
  IUserState,
} from "../../types/interface";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import pagesToArray from "../../utils/update/pagesToArray";
import dateHomePage from "../../data/dateHomePage";
import findActivePage from "../../utils/update/findActivePage";
import replacePageObject from "../../utils/update/replacePageObject";
import filterTrashPage from "../../utils/update/filterTrashPage";
import filterFavoritePage from "../../utils/update/filterFavoritePage";
import { Tlanguage, Ttheme } from "../../types/types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/strorage/localStorage";

const initialState: IUserState = {
  userLogin: null,
  user: null,
  isLoading: false,
  error: "",
  navigate: true,
  modalTarget: "",
  activePage: null,
  arrayPage: null,
  favoritePage: null,
  trashPage: null,
  breadcrumbs: null,
  lang: getLocalStorage<Tlanguage>("lang") || "en",
  theme: getLocalStorage<Ttheme>("theme") || "light",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state) {
      state.isLoading = true;
    },
    getUserSuccess(state, action: PayloadAction<IUserData>) {
      const pathname = window.location.pathname;
      const homePage = "/pages/home";
      const loginPage = "/login";
      const pageIdUrl = pathname.split("/")[2];
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      const activeData = findActivePage(state.user.pages, pageIdUrl);
      if (
        !activeData?.activePage?._id &&
        pathname !== homePage &&
        pathname !== loginPage
      ) {
        window.location.pathname = "/404";
      }
      state.activePage = activeData.activePage;
      // state.breadcrumbs = activeData.breadcrumbs;
      state.arrayPage = pagesToArray(state.user.pages) || null;
      if (state.arrayPage) {
        state.favoritePage = filterFavoritePage(state.arrayPage);
        state.trashPage = filterTrashPage(state.arrayPage);
      }
      if (state.activePage) {
        const activeUrl = `/pages/${state.activePage._id}`;
        if (pathname !== activeUrl) {
          window.location.replace(activeUrl);
        }
      } else if (pathname === "/pages/home") {
        state.activePage = dateHomePage;
        state.breadcrumbs = null;
      }
    },
    getUserError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    updateActivePage(state) {
      const pathname = window.location.pathname;
      const pageIdUrl = pathname.split("/")[2];
      if (pathname === "/pages/home") {
        state.activePage = dateHomePage;
        state.breadcrumbs = null;
      }
      if (state?.user?.pages) {
        const data = findActivePage(state.user.pages, pageIdUrl);
        state.activePage = data.activePage;
        // state.breadcrumbs = data.breadcrumbs;
      }
    },

    replaceActivePage(state, action: PayloadAction<IPage>) {
      state.activePage = action.payload;
    },

    updateArrayPage(state) {
      if (state?.user) {
        state.arrayPage = pagesToArray(state.user.pages) || null;
      }
      if (state.arrayPage) {
        state.favoritePage = filterFavoritePage(state.arrayPage);
        state.trashPage = filterTrashPage(state.arrayPage);
      }
    },

    updateModalTarget(state, action: PayloadAction<string>) {
      state.modalTarget = action.payload;
    },

    updateUserLogin(state, action: PayloadAction<IUserEmailPassword>) {
      state.userLogin = action.payload;
    },

    updateTheme(state, action: PayloadAction<Ttheme>) {
      setLocalStorage("theme", action.payload);
      state.theme = action.payload;
    },

    updateLanguage(state, action: PayloadAction<Tlanguage>) {
      localStorage.setItem("lang", action.payload);
      state.lang = action.payload;
    },

    toggleNavigate(state, action: PayloadAction<boolean>) {
      const navigate = { ...state };
      navigate.navigate = action.payload;
      state.navigate = navigate.navigate;
    },

    updateUserState(state, action: PayloadAction<Partial<IUserData>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    updatePagesState(
      state,
      action: PayloadAction<{ replaceObject: Partial<IPage>; pageId: string }>
    ) {
      if (state.user) {
        const props = action.payload;
        const replaceObject = props.replaceObject;
        const pageId = props.pageId;

        if (state.activePage?._id === pageId) {
          state.activePage = { ...state.activePage, ...replaceObject };
        }

        const pages = replacePageObject(
          state.user.pages,
          replaceObject,
          pageId
        );

        state.user = { ...state.user, pages };
      }
    },
  },
});

export default userSlice.reducer;
