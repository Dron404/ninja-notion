import React from "react";
import styles from "./EmojiesList.module.scss";
import emojisEn from "emojibase-data/en/data.json";
import emojisRu from "emojibase-data/ru/data.json";
import emojisPl from "emojibase-data/pl/data.json";
import { universalIncludes } from "../../../utils/search/universalIncludes";
import { IValue } from "../../../types/interface";
import { useAppSelector } from "../../../hooks/redux";
import { main } from "../../../data/languages/main";
import { EmojiesListItem } from "./EmojiesListItem";

export const EmojiesList: React.FC<IValue> = ({ value }) => {
  const { lang } = useAppSelector((store) => store.userReducer);

  const data = main[lang];

  const dataLangEmojies = {
    ru: emojisRu,
    pl: emojisPl,
    en: emojisEn,
  };

  const dataEmojies = dataLangEmojies[lang].filter((emoji) =>
    universalIncludes(value, emoji.tags)
  );

  return (
    <>
      <div className={styles.emoji}>
        <div className={styles.emoji__items}>
          {dataEmojies.length > 0 ? (
            dataEmojies.map((item) => (
              <EmojiesListItem emoji={item.emoji} key={item.hexcode} />
            ))
          ) : (
            <div className={styles.emoji__notResult}>
              {data.text_not_result}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
