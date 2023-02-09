import {
  API_HOST,
  ROUT_LOGIN,
  ROUT_SAVE_PAGES,
  ROUT_USER,
} from "../data/constants";
import { IPage, IUser, IUserMessage, IUserReturn } from "../types/interface";

const UserService = {
  async user(
    email: string,
    password: string,
    name: string
  ): Promise<IUserMessage | undefined> {
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

  async login(
    email: string,
    password: string
  ): Promise<IUserReturn | undefined> {
    try {
      const url = `${API_HOST}${ROUT_LOGIN}}`;
      const body = { email, password };
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });
      //const status = response.status;
      const status = 200; // test status
      // const data = await response.json();
      const data: IUser = {
        user: {
          email: "mandrei@itjob.by",
          password: "11111",
          diskSpace: 1000,
          usetSpace: 2000,
          avatar: "",
          name: "Alex",
          active: true,
          token: "d34234adwq434324",
          language: "en",
          theme: "light",
          pages: [
            {
              id: "hashdasdas",
              content: "",
              name: "Name page",
              icon: "1F605",
              comment: "",
              favorite: false,
              property: {
                font: "default",
                small_text: false,
                full_width: false,
              },
              dataTrash: "",
              dataAdd: "2023-01-01",
              dataMod: "2023-01-01",
              cover: {
                url: "",
                position: 100,
              },
              children_page: [],
            },
          ],
        },
      }; // test data

      return { data, status };
    } catch (err) {
      console.error(err);
    }
  },

  async update(updateData: IUser): Promise<IUserMessage | undefined> {
    try {
      const url = `${API_HOST}${ROUT_USER}}`;
      const body = { ...updateData };
      const response = await fetch(url, {
        method: "PUT",
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

  async savePages(
    id: string,
    pages: IPage[]
  ): Promise<IUserMessage | undefined> {
    try {
      const url = `${API_HOST}${ROUT_SAVE_PAGES}`;
      const body = { id, pages };
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const status = response.status;
      const message = await response.json();
      return { message, status };
    } catch (err) {
      console.error(err);
    }
  },

  async activation(id: string): Promise<IUserMessage | undefined> {
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
