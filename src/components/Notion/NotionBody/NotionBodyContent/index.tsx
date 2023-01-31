import React from "react";
import styles from "./NotionBodyContent.module.scss";
import { NotionBodyContentRow } from "./NotionBodyContentRow";
import { ReactComponent as EmojiSVG } from "../../../../assets/img/svg/emoji.svg";
import { ReactComponent as CoverSVG } from "../../../../assets/img/svg/cover.svg";

export const NotionBodyContent = (): React.ReactElement => {
  const widthPageDivision = 2;

  return (
    <>
      <div className={styles.content}>
        <div
          className={styles.content__wrapper}
          style={{ width: `${100 / widthPageDivision}%` }}
        >
          <div className={styles.content__header}>
            <div className={styles.content__icon}>
              <span className={styles.content__emoji}>📗</span>
            </div>
            <div className={styles.content__toolbar}>
              <div
                className={styles.content__toolbar_button + " button_control"}
              >
                <span className={styles.content__toolbar_svg}>
                  <EmojiSVG />
                </span>
                <span className={styles.content__toolbar_text}>Add icon</span>
              </div>

              <div
                className={styles.content__toolbar_button + " button_control"}
              >
                <span className={styles.content__toolbar_svg}>
                  <CoverSVG />
                </span>
                <span className={styles.content__toolbar_text}>Add cover</span>
              </div>
            </div>

            <div className={styles.content__title}>Object pages</div>
            <div className={styles.content__comment}>
              <div className={styles.content__comment_avatar}>
                <img src="https://lh3.googleusercontent.com/a-/AFdZucrnvCnEsd0erWUTqf6_bmSJLRbWfPGvfHrSb5w1yg=s100" />
              </div>
              <div
                className={styles.content__comment_input}
                placeholder="Add a comment…"
              >
                Add a comment…
              </div>
            </div>
          </div>

          <NotionBodyContentRow
            block="notion-text-block"
            color="#f90000"
            placeholder="Type '/' for commands"
            content="👋 Welcome to my ninja notion clone!"
          />

          <NotionBodyContentRow
            block="notion-h1-block"
            color=""
            placeholder="Heading 1"
            content="👋 Welcome to my ninja notion clone!"
          />

          <NotionBodyContentRow
            block="notion-h2-block"
            color=""
            placeholder="Heading 2"
            content="👋 Welcome to my ninja notion clone!"
          />

          <NotionBodyContentRow
            block="notion-h3-block"
            color=""
            placeholder="Heading 3"
            content="👋 Welcome to my ninja notion clone!"
          />

          <NotionBodyContentRow
            block="notion-code-block"
            color=""
            placeholder="Code ..."
            content="cover': { 'link': { 'url': 'https://url.com' }}"
          />
        </div>
      </div>
    </>
  );
};
