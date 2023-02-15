import React from "react";
import styles from "./HeaderTopbar.module.scss";
import { Menu } from "@headlessui/react";
import { ButtonFont } from "../../buttons/ButtonFont";
import { ButtonSwitch } from "../../buttons/ButtonSwitch";
import { ReactComponent as FavoriteSVG } from "../../../../assets/img/svg/favorite.svg";
import { ReactComponent as FavoriteActiveSVG } from "../../../../assets/img/svg/favorite_active.svg";
import { ReactComponent as MoreSVG } from "../../../../assets/img/svg/more.svg";
import { ReactComponent as MoveToSVG } from "../../../../assets/img/svg/move_to.svg";

import { ButtonMini } from "../../buttons/ButtonMini";
import { main } from "../../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userSlice } from "../../../../store/user/user.slice";

import SkeletonButtonMini from "../../Skeleton/SkeletonButtonMini";
import { IPage } from "../../../../types/interface";
import { ButtonTrash } from "../../buttons/ButtonTrash";
import { ButtonCopyLink } from "../../buttons/ButtonCopyLink";
import { ButtonFavorite } from "../../buttons/ButtonFavorite";
import { ButtonModal } from "../../buttons/ButtonModal";

export const HeaderTopbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { updatePagesState, updateArrayPage } = userSlice.actions;

  const { activePage, lang, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  const data = main[lang];

  const favorite = Boolean(activePage?.favorite);
  const smallText = Boolean(activePage?.property?.small_text);
  const fullWidth = Boolean(activePage?.property?.full_width);
  const font = activePage?.property?.font || "default";

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

  const handelSmallText = () => {
    const replaceObject = {
      property: {
        small_text: !smallText,
        full_width: fullWidth,
        font: font,
      },
    };
    updatePageStateFn(replaceObject);
  };

  const handelFullWidth = () => {
    const replaceObject = {
      property: {
        small_text: smallText,
        full_width: !fullWidth,
        font: font,
      },
    };
    updatePageStateFn(replaceObject);
  };
  const handleFont = (fontData: string) => {
    const replaceObject = {
      property: {
        small_text: smallText,
        full_width: fullWidth,
        font: fontData,
      },
    };
    updatePageStateFn(replaceObject);
  };
  const handleFavorite = () => {
    const replaceObject = { favorite: !favorite };
    updatePageStateFn(replaceObject);
    dispatch(updateArrayPage());
  };

  return (
    <>
      <div className={styles.topbar}>
        {isLoading ? (
          <SkeletonButtonMini />
        ) : (
          <ButtonMini
            icon={favorite ? <FavoriteActiveSVG /> : <FavoriteSVG />}
            handle={handleFavorite}
          />
        )}
        {isLoading ? (
          <SkeletonButtonMini />
        ) : (
          <Menu
            as="div"
            className={`${styles.topbar__menu} notion-popup__menu`}
          >
            <Menu.Button className={styles.topbar__more}>
              <ButtonMini icon={<MoreSVG />} />
            </Menu.Button>

            <Menu.Items
              className={`${styles.topbar__popup} notion-popup__body`}
            >
              <div className={styles.topbar__style}>
                <div className={styles.topbar__title}>{data.text_style}</div>
                <div className={styles.topbar__row}>
                  <ButtonFont
                    description={data.text_style_dafault}
                    font={font}
                    target="default"
                    handle={handleFont}
                  />

                  <ButtonFont
                    description={data.text_style_serif}
                    font={font}
                    target="serif"
                    handle={handleFont}
                  />
                  <ButtonFont
                    description={data.text_style_mono}
                    font={font}
                    target="mono"
                    handle={handleFont}
                  />
                </div>
              </div>
              <div className="hr-line"></div>
              <div className={styles.topbar__wrapper}>
                <ButtonSwitch
                  text={data.text_small_text}
                  status={smallText}
                  handle={handelSmallText}
                />
                <ButtonSwitch
                  text={data.text_full_width}
                  status={fullWidth}
                  handle={handelFullWidth}
                />
              </div>
              <div className="hr-line"></div>
              <div className={styles.topbar__wrapper}>
                <ButtonModal
                  hotkey="Ctrl+Shft+P"
                  icon={<MoveToSVG />}
                  text={data.text_move_to}
                  type="move"
                />
              </div>
              <div className="hr-line"></div>

              <ButtonCopyLink dataPage={activePage} />
              <ButtonFavorite dataPage={activePage} />

              {activePage?._id !== "home" && (
                <ButtonTrash dataPage={activePage} />
              )}
            </Menu.Items>
          </Menu>
        )}
      </div>
    </>
  );
};
