import React from "react";
import styles from "./Gallery.module.scss";
import { dataGallery } from "../../../../data/dataGalery";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userSlice } from "../../../../store/user/user.slice";
import { IPage } from "../../../../types/interface";

export const Gallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { updatePagesState } = userSlice.actions;
  const { activePage } = useAppSelector((store) => store.userReducer);

  function updatePageStateFn(replaceObject: Partial<IPage>) {
    if (activePage?._id) {
      const pageId = activePage._id;
      dispatch(
        updatePagesState({
          replaceObject,
          pageId,
        })
      );
    }
  }

  const handleSetBackground = (url: string) => {
    if (url.length > 0) {
      const replaceObject = { cover: { url: url } };
      updatePageStateFn(replaceObject);
      console.log(activePage);
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
