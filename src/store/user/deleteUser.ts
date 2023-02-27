import { API_HOST } from "./../../data/constants";
import getTokens from "./getTokens";

const deletUser = async () => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    console.log(`${API_HOST}user`);
    const resposne = await fetch(`${API_HOST}user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    });
    if (resposne.ok) {
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
      window.location.replace("/");
    }
    if (resposne.status === 401) {
      getTokens();
      deletUser();
    }
  } catch (err) {
    console.log(err);
  }
};

export default deletUser;
