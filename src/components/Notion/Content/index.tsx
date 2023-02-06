import React from "react";
import styles from "./Content.module.scss";
import { Cover } from "../Cover";
import { ContentRow } from "../ContentRow";
import { UserAvatar } from "../../User/UserAvatar";
import { ReactComponent as EmojiSVG } from "../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../assets/img/svg/cover.svg";
import { Button } from "../Button";

// test state
import { StateContext } from "../../../pages/NoutionPage";

export const Content = (): React.ReactElement => {
  // test data
  const avatarUrl =
    "https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100";
  const avatarSize = "25";
  const { context } = React.useContext(StateContext);

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
        <Cover />

        <div
          className={styles.content}
          data-font={context?.pageState.property.font}
        >
          <div
            className={styles.content__wrapper + " " + styleContentFullWidth}
          >
            <div className={styles.content__header}>
              {context?.pageState.icon && (
                <div className={styles.content__icon}>
                  <span className={styles.content__emoji}>
                    {context?.pageState.icon}
                  </span>
                </div>
              )}

              <div className={styles.content__toolbar}>
                <div>
                  <Button
                    text="Add icon"
                    cName={styles.content__toolbar_button}
                    icon={<EmojiSVG />}
                  />
                </div>
                <div>
                  <Button
                    text="Add cover"
                    cName={styles.content__toolbar_button}
                    icon={<CoverSVG />}
                  />
                </div>
              </div>

              <div className={styles.content__title}>Object pages</div>
              <div className={styles.content__comment}>
                <UserAvatar url={avatarUrl} size={avatarSize} />
                <div
                  className={styles.content__comment_input}
                  placeholder="Add a comment…"
                >
                  Add a comment…
                </div>
              </div>
            </div>

            <ContentRow
              block="notion-text-block"
              color="#f90000"
              placeholder="Type '/' for commands"
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
