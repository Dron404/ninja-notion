import React from "react";
import styles from "./Content.module.scss";
import { ContentCover } from "../ContentCover";
import { UserAvatar } from "../UserAvatar";
import { ReactComponent as EmojiSVG } from "../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../assets/img/svg/cover.svg";
import { ReactComponent as CommentSVG } from "../../../assets/img/svg/comment.svg";

import { Button } from "../Button";
import { main } from "../../../data/languages/main";
import { useParams } from "react-router-dom";

import { ContentIconSettings } from "../ContentIconSettings";
import { AVATAR_SIZE_L } from "../../../data/constants";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import getRandomEmojis from "../../../utils/getRandomEmojis";
import getRandomCover from "../../../utils/getRandomCover";
import { SidebarPage } from "../SidebarPage";
import { IPage } from "../../../types/interface";
import { ButtonTrash } from "../ButtonTrash";
import UserService from "../../../store/user/user.action";
import TextEditor, { TextEditorProvider } from "../../../editor/TextEditor";
import ToolType from "../../../editor/ToolType";
import ToolFormat from "../../../editor/ToolFormat";

export const Content = (): React.ReactElement => {
  const { user, activePage, lang } = useAppSelector(
    (store) => store.userReducer
  );
  const data = main[lang];

  const { pageId } = useParams();

  const dispatch = useAppDispatch();
  const { updateActivePage, updateArrayPage, updatePagesState } =
    userSlice.actions;

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

  React.useEffect(() => {
    if (pageId && user) {
      dispatch(updateActivePage());
      dispatch(updateArrayPage());
      UserService.updatePages(user.pages);
    }
  }, [pageId]);

  const [commentStatus, setCommentStatus] = React.useState(
    !!activePage?.comment
  );

  const avatarUrl = user?.avatar || "";

  const styleContentFullWidth = activePage?.property?.full_width
    ? styles.content__full
    : "";

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

  const handleChangeComment = () => {
    console.log("123");
  };

  const handleChangeTitle = () => {
    console.log("123");
  };

  const refComment = React.useRef(null);

  const [editing, setEditing] = React.useState(false);

  return (
    <TextEditorProvider>
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
            activePage?.dataTrash && !!activePage?.dataTrash
              ? "arhive"
              : "active"
          }
        >
          <ContentCover />
          <div className="containerIcon">
            <div className="wrapperIcon">
              <ContentIconSettings />
            </div>
          </div>
          <div
            className={styles.content}
            data-font={activePage?.property?.font}
          >
            <div className="containerHeader">
              <div className="wrapperHeader">
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
                  {activePage?._id !== "home" && (
                    <div>
                      <h1
                        className={styles.content__title}
                        onClick={() => setEditing(true)}
                        contentEditable={editing}
                        onBlur={() => setEditing(false)}
                        suppressContentEditableWarning={true}
                      >
                        {activePage?.name || ""}
                      </h1>
                      {activePage?._id !== "home" && commentStatus && (
                        <div className={styles.content__comment}>
                          <div className={styles.content__commentAvatar}>
                            <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
                          </div>
                          <div
                            className={styles.content__commentInput}
                            placeholder={data.text_add_a_comment}
                            ref={refComment}
                            onClick={() => setEditing(true)}
                            contentEditable={editing}
                            onBlur={() => setEditing(false)}
                            suppressContentEditableWarning={true}
                          >
                            {activePage?.comment}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {activePage?._id === "home" && (
                  <div className="">
                    <h2>{data.text_you_pages}</h2>
                    <div>
                      {user?.pages?.map((data) => (
                        <SidebarPage
                          icon={data.icon}
                          text={data.name}
                          dataPage={data}
                          key={data._id}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="containerEditor">
              <div className="wrapperEditor">
                <div className={styles.editor} id="editor">
                  <ToolType />
                  <ToolFormat />
                  <div className={styles.editor__block}>
                    <TextEditor />
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </TextEditorProvider>
  );
};
