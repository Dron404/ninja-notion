import dataNewPage from "../data/dataNewPage";

import { IPage } from "../types/interface";
import { Tlanguage } from "../types/types";
import { getLocalStorage } from "./strorage/localStorage";
const date = String(new Date());

const getRandomNewPage = async (): Promise<IPage> => {
  const lang = getLocalStorage<Tlanguage>("lang") || "en";
  const cover = await import("../utils/getRandomCover");
  const emojis = await import("../utils/getRandomEmojis");
  const langImport = await import("../data/languages/main");
  const data = langImport.main[lang];
  return {
    ...dataNewPage,
    ...{
      name: data.text_newpage,
      icon: emojis.default(),
      dataAdd: date,
      dataMod: date,
      cover: { url: cover.default(), position: 100 },
    },
  };
};

export default getRandomNewPage;
