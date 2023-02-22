import { API_HOST } from "../../data/constants";
import { getUser } from "./user.action";

const autorization = async () => {
  try {
    const response = await fetch(`${API_HOST}refresh`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    });
    if (response.ok) {
      const body = await response.json();
      console.log(body);
      sessionStorage.setItem("accessToken", body.accessToken);
      localStorage.setItem("refreshToken", body.refreshToken);
    }
  } catch (e) {
    throw new Error("Autorization failed");
  }
};

export default autorization;
