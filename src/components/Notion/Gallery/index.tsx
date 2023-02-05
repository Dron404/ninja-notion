import React from "react";
import styles from "./Gallery.module.scss";

import { dataGallery } from "../../../data/dataGalery";

// test state
import { StateContext } from "../../../pages/NoutionPage";
import { copyObject } from "../../../utils/object/copyObject";

export const Gallery: React.FC = () => {
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
      <div className={styles.gallery}>
        {dataGallery.map((collection, index) => (
          <div className={styles.gallery__row} key={index}>
            <div className={styles.gallery__title}>{collection.title}</div>
            <div className={styles.gallery__items}>
              {collection.backgrounds.map((background, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${background})` }}
                  className={styles.gallery__item}
                  data-url={background}
                  onClick={() => handleSetBackground(background)}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
