import {
  API_HOST,
  ROUT_LOGIN,
  ROUT_SAVE_PAGES,
  ROUT_USER,
} from "../../data/constants";
// import { dataTestUser } from "../../data/dataTestUser";

import { IUserEmailPassword, IPage, IUserData } from "../../types/interface";

import { AppDispatch } from "../store";
import { userSlice } from "./user.slice";

export const gerUset =
  (userLogin: IUserEmailPassword) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.getUser());
      const url = `${API_HOST}${ROUT_LOGIN}`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userLogin),
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
      });

      const data: IUserData = await response.json();
      // const data = dataTestUser; // demo
      if (response.status === 500) {
        throw new Error("Server is not available");
      }
      if (
        response.status === 200 &&
        data &&
        data.accessToken &&
        data.refreshToken
      ) {
        sessionStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      dispatch(userSlice.actions.getUserSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(userSlice.actions.getUserError(error?.message));
      }
    }
  };

const UserService = {
  async createUser(email: string, password: string, name: string) {
    try {
      const url = `${API_HOST}${ROUT_USER}}`;
      const body = { email, password, name };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const status = response.status;
      const message: string = await response.json();

      return { message, status };
    } catch (err) {
      console.error(err);
    }
  },

  async updateUser(updateData: IUserData) {
    try {
      const url = `${API_HOST}${ROUT_USER}/`;
      const accessToken = sessionStorage.getItem("accessToken");
      const body = { ...updateData, accessToken };
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const status = response.status;

      const message: string = await response.json();
      return { message, status };
    } catch (err) {
      console.error(err);
    }
  },

  async updatePages(pages: IPage[]) {
    try {
      const url = `${API_HOST}${ROUT_SAVE_PAGES}`;
      const accessToken = sessionStorage.getItem("accessToken");
      const body = { accessToken: accessToken, pages };
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const status = response.status;
      const message = await response.json();
      return { message, status };
    } catch (err) {
      console.error("Error updatePages");
    }
  },

  async activeteUser(id: string) {
    try {
      const url = `${API_HOST}${ROUT_USER}/${id}`;
      const response = await fetch(url);
      const status = response.status;
      const message = await response.json();
      return { message, status };
    } catch (err) {
      console.error(err);
    }
  },
};

export default UserService;
