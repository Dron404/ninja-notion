import React from "react";
import styles from "./Content.module.scss";
import { ContentCover } from "../ContentCover";
import { ContentRow } from "../ContentRow";
import { UserAvatar } from "../../User/UserAvatar";
import { ReactComponent as EmojiSVG } from "../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../assets/img/svg/cover.svg";
import { ReactComponent as CommentSVG } from "../../../assets/img/svg/comment.svg";
import { Button } from "../Button";
import { useParams } from "react-router-dom";

import { main } from "../../../data/languages/main";

// test state
import { StateContext } from "../../../pages/NoutionPage";
import { ContentIconSettings } from "../ContentIconSettings";
import { AVATAR_SIZE_L } from "../../../data/constants";

export const Content = (): React.ReactElement => {
  const lang = "en";
  const data = main[lang];

  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";

  const { context } = React.useContext(StateContext);

  const { pageId } = useParams();

  // console.log(pageId);

  // example remove state
  const styleContentFullWidth = context?.pageState.property.full_width
    ? styles.content__full
    : "";

  return (
    <>
      <div
        className={styles.body}
        data-width={context?.pageState.property.full_width}
        data-small={context?.pageState.property.small_text}
      >
        <ContentCover />

        <div
          className={styles.content__wrapperIcon + " " + styleContentFullWidth}
        >
          <ContentIconSettings />
        </div>

        <div
          className={styles.content}
          data-font={context?.pageState.property.font}
        >
          <div
            className={styles.content__wrapper + " " + styleContentFullWidth}
          >
            <div className={styles.content__header}>
              <div className={styles.content__toolbar}>
                <div>
                  <Button
                    text={data.text_add_icon}
                    cName={styles.content__toolbar_button}
                    icon={<EmojiSVG />}
                  />
                </div>
                <div>
                  <Button
                    text={data.text_add_cover}
                    cName={styles.content__toolbar_button}
                    icon={<CoverSVG />}
                  />
                </div>

                <div>
                  <Button
                    text={data.text_add_comment}
                    cName={styles.content__toolbar_button}
                    icon={<CommentSVG />}
                  />
                </div>
              </div>

              <h1 className={styles.content__title}>Object pages</h1>
              <div className={styles.content__comment}>
                <UserAvatar url={avatarUrl} size={AVATAR_SIZE_L} />
                <div
                  className={styles.content__comment_input}
                  placeholder={data.text_add_a_comment}
                >
                  {data.text_add_a_comment}
                </div>
              </div>
            </div>

            <ContentRow
              block="notion-text-block"
              color="#f90000"
              placeholder={data.text_type_for_commands}
              content="👋 Welcome to my ninja notion clone!"
            />

            <ContentRow
              block="notion-h1-block"
              color=""
              placeholder="Heading 1"
              content="👋 Welcome to my ninja notion clone!"
            />

            <ContentRow
              block="notion-h2-block"
              color=""
              placeholder="Heading 2"
              content="👋 Welcome to my ninja notion clone!"
            />

            <ContentRow
              block="notion-h3-block"
              color=""
              placeholder="Heading 3"
              content="👋 Welcome to my ninja notion clone!"
            />

            <ContentRow
              block="notion-code-block"
              color=""
              placeholder="Code ..."
              content="cover': { 'link': { 'url': 'https://url.com' }}"
            />
          </div>
        </div>
      </div>
    </>
  );
};
