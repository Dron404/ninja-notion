import {
  IUserData,
  IUserPagesReplace,
  IUserState,
} from "../../types/interface";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/strorage/localStorage";
import pagesToArray from "../../utils/search/pagesToArray";
import dateHomePage from "../../data/dateHomePage";
import findActivePage from "../../utils/search/findActivePage";
import { updateUserPagesUtils } from "../../utils/update/updateUserPagesUtils";

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: "",
  navigate: true,
  activePage: null,
  favoritePage: null,
  trashPage: null,
  arrayPage: null,
  breadcrumbs: null,
  lang: getLocalStorage("lang"),
  theme: getLocalStorage("theme"),
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
      const pageIdUrl = pathname.split("/")[2];
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      const activeData = findActivePage(state.user.pages, pageIdUrl);
      state.activePage = activeData.activePage;
      state.breadcrumbs = activeData.breadcrumbs;
      state.arrayPage = pagesToArray(state.user.pages) || null;
      if (state.activePage) {
        const activeUrl = `/pages/${state.activePage._id}`;
        if (pathname !== activeUrl) {
          window.location.replace(activeUrl);
        }
      } else if (pathname === "/pages/home") {
        state.activePage = dateHomePage;
        state.breadcrumbs = null;
      } else {
        window.location.replace("/404");
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
      } else if (state?.user?.pages) {
        const data = findActivePage(state.user.pages, pageIdUrl);
        state.activePage = data.activePage;
        state.breadcrumbs = data.breadcrumbs;
      }
    },
    updateArrayPage(state) {
      if (state?.user) state.arrayPage = pagesToArray(state.user.pages) || null;
    },
    updateUser(state, action: PayloadAction<IUserData>) {
      state.user = action.payload;
    },
    updateUserPages(state, action: PayloadAction<IUserPagesReplace>) {
      const payload = action.payload;
      if (state?.user) {
        const props = {
          replaceObject: payload.replaceObject,
          pageId: payload.pageId,
          accessToken: payload.user.accessToken,
          userPages: payload.user.pages,
        };

        state.user = {
          ...state.user,
          ...{ pages: updateUserPagesUtils(props) },
        };
      }
    },
    updateUserName(state, action: PayloadAction<string>) {
      if (state?.user) {
        state.user.name = action.payload;
      }
    },
    updateUserPassword(state, action: PayloadAction<string>) {
      if (state?.user) {
        state.user.password = action.payload;
      }
    },
    updateTheme(state) {
      state.theme = getLocalStorage("theme");
    },
    updateLanguage(state) {
      state.lang = getLocalStorage("lang");
    },
    toggleNavigate(state, action: PayloadAction<boolean>) {
      const navigate = { ...state };
      navigate.navigate = action.payload;
      state.navigate = navigate.navigate;
    },

    updateActivePageIcon(state, action: PayloadAction<string>) {
      if (state?.activePage) {
        state.activePage.icon = action.payload;
      }
    },

    updateActivePageCoverUrl(state, action: PayloadAction<string>) {
      if (state?.activePage?.cover) {
        state.activePage.cover.url = action.payload;
      }
    },

    updateActivePageCoverPosition(state, action: PayloadAction<number>) {
      if (state?.activePage?.cover) {
        state.activePage.cover.position = action.payload;
      }
    },

    updateActivePageFont(state, action: PayloadAction<string>) {
      if (state?.activePage?.property) {
        state.activePage.property.font = action.payload;
      }
    },
    updateActivePageFullWidth(state, action: PayloadAction<boolean>) {
      if (state?.activePage?.property)
        state.activePage.property.full_width = action.payload;
    },
    updateActivePageSmallText(state, action: PayloadAction<boolean>) {
      if (state?.activePage?.property)
        state.activePage.property.small_text = action.payload;
    },
    updateActivePageFavorite(state, action: PayloadAction<boolean>) {
      if (state?.activePage) state.activePage.favorite = action.payload;
    },
  },
});

export default userSlice.reducer;
