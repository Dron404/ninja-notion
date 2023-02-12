import React from "react";
import styles from "./HeaderTopbar.module.scss";
import { Menu } from "@headlessui/react";
import { ButtonFont } from "../ButtonFont";
import { ButtonSwitch } from "../ButtonSwitch";
import { ReactComponent as FavoriteSVG } from "../../../assets/img/svg/favorite.svg";
import { ReactComponent as FavoriteActiveSVG } from "../../../assets/img/svg/favorite_active.svg";
import { ReactComponent as TrashSVG } from "../../../assets/img/svg/trash.svg";
import { ReactComponent as CopySVG } from "../../../assets/img/svg/copy.svg";
import { ReactComponent as MoreSVG } from "../../../assets/img/svg/more.svg";
import { ReactComponent as MoveToSVG } from "../../../assets/img/svg/move_to.svg";

import { ButtonMini } from "../ButtonMini";
import { Button } from "../Button";
import { main } from "../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import copy from "copy-to-clipboard";
import SkeletonButtonMini from "../Skeleton/SkeletonButtonMini";

export const HeaderTopbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const {
    updateActivePageSmallText,
    updateActivePageFullWidth,
    updateActivePageFavorite,
    updateActivePageFont,
  } = userSlice.actions;

  const { activePage, lang, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  const data = main[lang];

  const favorite = Boolean(activePage?.favorite);
  const smallText = Boolean(activePage?.property?.small_text);
  const fullWidth = Boolean(activePage?.property?.full_width);
  const font = activePage?.property?.font || "default";

  const handelSmallText = () => dispatch(updateActivePageSmallText(!smallText));
  const handelFullWidth = () => dispatch(updateActivePageFullWidth(!fullWidth));
  const handleFont = (fontData: string) => {
    dispatch(updateActivePageFont(fontData));
  };
  const handleFavorite = () => dispatch(updateActivePageFavorite(!favorite));

  const hendleCopyUrl = () => {
    copy(window.location.href);
  };
  const handleDelete = () => {
    console.log("handleDelete");
  };

  return (
    <>
      <div className={styles.topbar}>
        {isLoading ? (
          <SkeletonButtonMini />
        ) : (
          <ButtonMini
            icon={favorite ? <FavoriteSVG /> : <FavoriteActiveSVG />}
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
                <Button
                  icon={<MoveToSVG />}
                  text={data.text_move_to}
                  cName={styles.topbar__button}
                  hotkey="Ctrl+Shft+P"
                />
              </div>
              <div className="hr-line"></div>

              <Button
                icon={<FavoriteSVG />}
                text={
                  favorite ? data.text_add_favorite : data.text_remove_favorite
                }
                cName={styles.topbar__button}
                handle={handleFavorite}
              />

              <Button
                icon={<CopySVG />}
                text={data.text_copy_link}
                cName={styles.topbar__button}
                hotkey="Ctrl+Alt+L"
                handle={hendleCopyUrl}
              />

              {activePage?._id !== "home" && (
                <Button
                  icon={<TrashSVG />}
                  text={data.text_delete}
                  cName={styles.topbar__button}
                  handle={handleDelete}
                />
              )}
            </Menu.Items>
          </Menu>
        )}
      </div>
    </>
  );
};
