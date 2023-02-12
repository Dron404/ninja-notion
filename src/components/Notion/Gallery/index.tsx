import React from "react";
import styles from "./Gallery.module.scss";
import { dataGallery } from "../../../data/dataGalery";
import { useAppDispatch } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";

export const Gallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { updateActivePageCoverUrl } = userSlice.actions;

  const handleSetBackground = (url: string) => {
    dispatch(updateActivePageCoverUrl(url));
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
