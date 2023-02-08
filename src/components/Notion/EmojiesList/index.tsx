import React from "react";
import styles from "./EmojiesList.module.scss";
import emojisEn from "emojibase-data/en/data.json";
import emojisRu from "emojibase-data/en/data.json";
import emojisPl from "emojibase-data/en/data.json";

import emoji from "react-easy-emoji";

// test state
import { StateContext } from "../../../pages/NoutionPage";
import { copyObject } from "../../../utils/object/copyObject";
import { universalIncludes } from "../../../utils/search/universalIncludes";

interface IValue {
  value: string;
}

export const EmojiesList: React.FC<IValue> = ({ value }) => {
  const lang = "en";
  const dataLangEmojies = {
    ru: emojisRu,
    pl: emojisPl,
    en: emojisEn,
  };
  let dataEmojies = dataLangEmojies[lang];

  dataEmojies = dataEmojies.filter((emoji) =>
    universalIncludes(value, emoji.tags)
  );

  const { context } = React.useContext(StateContext);
  const handleSetBackground = (url: string) => {
    const newState = copyObject(context?.pageState);
    if (newState && newState.cover) {
      newState.cover.url = url;
      context?.setPageState(newState);
    }
  };

  return (
    <>
      <div className={styles.emoji}>
        <div className={styles.emoji__items}>
          {dataEmojies.length > 0 ? (
            dataEmojies.map((item) => (
              <div className={styles.emoji__item} key={item.hexcode}>
                {emoji(item.emoji)}
              </div>
            ))
          ) : (
            <div className={styles.emoji__notResult}>Not result</div>
          )}
        </div>
      </div>
    </>
  );
};
