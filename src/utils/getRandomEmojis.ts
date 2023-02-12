import emojisEn from "emojibase-data/en/data.json";
import getRandomInt from "./getRandomInt";

const getRandomEmojis = (): string =>
  emojisEn[getRandomInt(0, emojisEn.length - 1)].emoji;

export default getRandomEmojis;
