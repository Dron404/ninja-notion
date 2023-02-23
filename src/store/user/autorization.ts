import { AppDispatch } from "../store";
import getTokens from "./getTokens";

const autorization = async (
  callback: (dispatch: AppDispatch) => Promise<void>
) => {
  try {
    await getTokens().then(async () => {
      callback;
    });
  } catch (e) {
    throw new Error("Autorization failed");
  }
};

export default autorization;
