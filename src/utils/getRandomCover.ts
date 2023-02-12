import { dataGallery } from "../data/dataGalery";
import getRandomInt from "./getRandomInt";

const getRandomCover = (): string => {
  const index = getRandomInt(0, dataGallery.length - 1);
  return dataGallery[index].backgrounds[
    getRandomInt(0, dataGallery[index].backgrounds.length - 1)
  ];
};

export default getRandomCover;
