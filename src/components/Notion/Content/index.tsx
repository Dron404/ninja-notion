import React, { ChangeEvent } from "react";
import styles from "./Content.module.scss";
import { ContentCover } from "../ContentCover";
import { UserAvatar } from "../UserAvatar";
import { ReactComponent as EmojiSVG } from "../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../assets/img/svg/cover.svg";
import { ReactComponent as CommentSVG } from "../../../assets/img/svg/comment.svg";
import { Button } from "../Button";
import { main } from "../../../data/languages/main";

import { ContentIconSettings } from "../ContentIconSettings";
import { AVATAR_SIZE_L } from "../../../data/constants";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import getRandomEmojis from "../../../utils/getRandomEmojis";
import getRandomCover from "../../../utils/getRandomCover";
import { useParams } from "react-router-dom";
import UserService from "../../../store/user/user.action";
import { SidebarPage } from "../SidebarPage";

export const Content = (): React.ReactElement => {
  const { user, activePage, lang } = useAppSelector(
    (store) => store.userReducer
  );
  const data = main[lang];

  const { pageId } = useParams();

  const dispatch = useAppDispatch();
  const {
    updateActivePageIcon,
    updateActivePageCoverUrl,
    updateActivePageCoverPosition,
    updateActivePage,
    updateArrayPage,
    updateUserPages,
  } = userSlice.actions;

  React.useEffect(() => {
    if (window.location.pathname && user) {
      //  dispatch(updateUserPages({ replaceObject: activePage, pageId, user }));
      dispatch(updateActivePage());
      dispatch(updateArrayPage());
    }
  }, [window.location.pathname]);

  const [commentStatus, setCommentStatus] = React.useState(
    !!activePage?.comment
  );

  const avatarUrl = user?.avatar || "";

  const styleContentFullWidth = activePage?.property?.full_width
    ? styles.content__full
    : "";

  const handleAddRandomEmojis = () =>
    dispatch(updateActivePageIcon(getRandomEmojis()));

  const handleAddCove = () => {
    dispatch(updateActivePageCoverUrl(getRandomCover()));
    dispatch(updateActivePageCoverPosition(100));
  };

  const handleAddComment = () => {
    setCommentStatus(true);
  };

  const handleChangeComment = (event: ChangeEvent<HTMLDivElement>) => {
    console.log(event.target);
  };

  return (
    <>
      <div
        className={styles.body}
        data-width={activePage?.property?.full_width}
        data-small={activePage?.property?.small_text}
      >
        <ContentCover />
        <div
          className={styles.content__wrapperIcon + " " + styleContentFullWidth}
        >
          <ContentIconSettings />
        </div>
        <div className={styles.content} data-font={activePage?.property?.font}>
          <div
            className={styles.content__wrapper + " " + styleContentFullWidth}
          >
            <div className={styles.content__header}>
              {activePage?._id !== "home" && (
                <div className={styles.content__toolbar}>
                  {!activePage?.icon && (
                    <Button
                      text={data.text_add_icon}
                      cName={styles.content__toolbar_button}
                      icon={<EmojiSVG />}
                      handle={handleAddRandomEmojis}
                    />
                  )}

                  {!activePage?.cover.url && (
                    <Button
                      text={data.text_add_cover}
                      cName={styles.content__toolbar_button}
                      icon={<CoverSVG />}
                      handle={handleAddCove}
                    />
                  )}

                  {!commentStatus && (
                    <Button
                      text={data.text_add_comment}
                      cName={styles.content__toolbar_button}
                      icon={<CommentSVG />}
                      handle={handleAddComment}
                    />
                  )}
                </div>
              )}
              <h1 className={styles.content__title}>
                {activePage?.name || ""}
              </h1>
              {activePage?._id !== "home" && commentStatus && (
                <div className={styles.content__comment}>
                  <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
                  <div
                    className={styles.content__comment_input}
                    placeholder={data.text_add_a_comment}
                    onChange={handleChangeComment}
                  >
                    {activePage?.comment}
                  </div>
                </div>
              )}
            </div>

            <div>{activePage?.content || ""}</div>

            {activePage?._id === "home" && (
              <div className="">
                <h2>{data.text_you_pages}</h2>
                <div>
                  {user?.pages?.map((data) => (
                    <SidebarPage
                      icon={data.icon}
                      text={data.name}
                      _id={data._id}
                      children_page={data?.children_page}
                      key={data._id}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
