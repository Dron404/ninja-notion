import React, { MouseEvent, MutableRefObject, useRef } from "react";
import styles from "./ContentCover.module.scss";
import { ContentCoverSettings } from "../ContentCoverSettings";
import { main } from "../../../../data/languages/main";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { IPage } from "../../../../types/interface";
import { userSlice } from "../../../../store/user/user.slice";

export const ContentCover: React.FC = () => {
  const dispatch = useAppDispatch();
  const { updatePagesState, updateArrayPage } = userSlice.actions;

  const { lang, activePage } = useAppSelector((store) => store.userReducer);

  const data = main[lang];

  const styleFullWidth = activePage?.property?.full_width
    ? styles.cover__fullWidth
    : styles.cover__defaultWidth;

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

  const ref = React.useRef<HTMLDivElement>(null);

  const [reposition, setReposition] = React.useState(false);

  const textReposition = reposition
    ? data.text_reposition_on
    : data.text_reposition_off;

  const prev: MutableRefObject<null | number> = useRef(null);
  const handleReposition = () => {
    setReposition(!reposition);
    dispatch(updateArrayPage());
  };

  const position = Number(activePage?.cover?.position);
  const move = useRef(false);

  const moveCover = (e: MouseEvent) => {
    if (e.type === "mousedown" && reposition === true) {
      move.current = true;
    } else if (e.type === "mousemove" && move.current === true) {
      const current = e.clientY;
      let dif: number;
      if (typeof prev.current === "number") {
        current < prev.current ? (dif = position + 3) : (dif = position - 3);
        if (dif > 10 && dif < 110) {
          updatePageStateFn({ cover: { ...activePage?.cover, position: dif } });
        }
        prev.current = current;
      } else {
        dif = position;
        prev.current = current;
      }
    } else {
      move.current = false;
    }
  };

  return (
    <>
      <div className={styles.cover} data-reposition={reposition}>
        {activePage?.cover?.url && (
          <div
            className={styles.cover__bg}
            onMouseDown={(e: MouseEvent) => moveCover(e)}
            onMouseUp={(e: MouseEvent) => moveCover(e)}
            onMouseMove={(e: MouseEvent) => moveCover(e)}
            ref={ref}
            style={{
              backgroundPosition: `center ${activePage?.cover?.position}%`,
              backgroundImage: `url(${activePage?.cover?.url})`,
            }}
          >
            {activePage._id !== "home" && (
              <div className={styles.cover__wrapper + " " + styleFullWidth}>
                <div className={styles.cover__buttons}>
                  <div className={styles.button} onClick={handleReposition}>
                    {textReposition}
                  </div>
                  <ContentCoverSettings cName={styles.button} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
