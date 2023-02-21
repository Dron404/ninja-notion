import React from "react";
import styles from "./Content.module.scss";
import { ContentCover } from "./ContentCover";
import { UserAvatar } from "../Settings/UserAvatar";
import { ReactComponent as EmojiSVG } from "../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../assets/img/svg/cover.svg";
import { ReactComponent as CommentSVG } from "../../../assets/img/svg/comment.svg";

import { Button } from "../buttons/Button";
import { main } from "../../../data/languages/main";
import { useParams } from "react-router-dom";

import { ContentIconSettings } from "./ContentIconSettings";
import { AVATAR_SIZE_L } from "../../../data/constants";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import getRandomEmojis from "../../../utils/getRandomEmojis";
import getRandomCover from "../../../utils/getRandomCover";
import { IPage } from "../../../types/interface";
import { ButtonTrash } from "../buttons/ButtonTrash";
import TextEditor, { useEditorApi } from "../../../editor/TextEditor";
import ToolType from "../../../editor/ToolType";
import ToolFormat from "../../../editor/ToolFormat";
import { useDebounce } from "../../../hooks/useDebounce";
import Contenteditable from "../Contenteditable";

export const Content = (): React.ReactElement => {
  const { user, activePage, lang } = useAppSelector(
    (store) => store.userReducer
  );
  const { toHtml, handleRerender } = useEditorApi();

  const data = main[lang];

  const { pageId } = useParams();

  const dispatch = useAppDispatch();
  const { updateArrayPage, updatePagesState } = userSlice.actions;

  function updatePageStateFn(replaceObject: Partial<IPage>) {
    if (activePage?._id) {
      const pageId = activePage._id;
      dispatch(
        updatePagesState({
          replaceObject,
          pageId,
        })
      );
      dispatch(updateArrayPage());
    }
  }

  const [commentStatus, setCommentStatus] = React.useState(
    !!activePage?.comment
  );

  const avatarUrl = user?.avatar || "";

  const handleAddRandomEmojis = () => {
    const replaceObject = { icon: getRandomEmojis() };
    updatePageStateFn(replaceObject);
  };

  const handleAddCove = () => {
    const replaceObject = { cover: { url: getRandomCover() } };
    updatePageStateFn(replaceObject);
  };

  const handleAddComment = () => {
    setCommentStatus(true);
  };

  const content = useDebounce(toHtml(), 1000);
  React.useEffect(() => {
    if (activePage) {
      const replaceObject = { content: content };
      const pageId = activePage?._id || "";
      dispatch(updatePagesState({ replaceObject, pageId }));
    }
  }, [content]);

  React.useEffect(() => {
    handleRerender();
  }, [pageId]);

  return (
    <div className={styles.body}>
      {activePage?.dataTrash && !!activePage?.dataTrash && (
        <div className={styles.restore}>
          <div className={styles.restore__button}>
            <ButtonTrash dataPage={activePage} />
          </div>
          <div className={styles.restore__message}>
            <span>{data.text_restore_message}</span>
          </div>
        </div>
      )}
      <div
        data-width={activePage?.property?.full_width}
        data-small={activePage?.property?.small_text}
        data-status={
          activePage?.dataTrash && !!activePage?.dataTrash ? "arhive" : "active"
        }
      >
        <ContentCover />
        <div className="containerIcon">
          <div className="wrapperIcon">
            <ContentIconSettings />
          </div>
        </div>
        <div className={styles.content} data-font={activePage?.property?.font}>
          <div className="containerHeader">
            <div className="wrapperHeader">
              <div className={styles.content__header}>
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

                <Contenteditable
                  text={activePage?.name || ""}
                  tag="h1"
                  pageId={pageId}
                  keyName="name"
                  className={styles.content__nameInput}
                  placeholder={data.text_placeholder_title}
                />

                <div className={styles.content__comment}>
                  <div className={styles.content__commentAvatar}>
                    <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
                  </div>
                  <Contenteditable
                    text={activePage?.comment || ""}
                    tag="div"
                    pageId={pageId}
                    keyName="comment"
                    className={styles.content__commentInput}
                    placeholder={data.text_placeholder_comment}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="containerEditor">
            <div className="wrapperEditor">
              <div className={styles.editor}>
                <ToolFormat />

                <div className={styles.editor__block}>
                  <div className="toolButton" id="toolButton">
                    <ToolType />
                  </div>

                  <TextEditor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
