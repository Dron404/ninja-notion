import React from "react";
import styles from "./ContentCover.module.scss";
import { ContentCoverSettings } from "../ContentCoverSettings";
import { main } from "../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";

export const ContentCover: React.FC = () => {
  const dispatch = useAppDispatch();
  const { updateActivePageCoverPosition } = userSlice.actions;

  const { lang, activePage } = useAppSelector((store) => store.userReducer);

  const data = main[lang];

  const styleFullWidth = activePage?.property?.full_width
    ? styles.cover__fullWidth
    : styles.cover__defaultWidth;

  const ref = React.useRef<HTMLDivElement>(null);

  const [reposition, setReposition] = React.useState(false);

  const textReposition = reposition
    ? data.text_reposition_on
    : data.text_reposition_off;

  const handleReposition = () => {
    setReposition(!reposition);
  };

  let isMousedown = false;
  let start = Number(activePage?.cover?.position);

  // TESTING
  React.useEffect(() => {
    const element = ref.current;
    const height = element?.offsetHeight;
    const proc = Number(height) / 100;
    element?.addEventListener("mousedown", (e) => {
      isMousedown = true;
      start = e.clientY;
    });

    element?.addEventListener("mousemove", (e) => {
      if (isMousedown) {
        const diff = start - e.clientY;
        const newPosition = diff / proc;

        if (ref.current) {
          ref.current.style.backgroundPosition = `center ${newPosition}%`;
          dispatch(updateActivePageCoverPosition(newPosition));
        }
      }
    });
    element?.addEventListener("mouseup", () => {
      if (isMousedown) {
        isMousedown = false;
      }
    });
  }, [activePage?.cover?.position]);

  return (
    <>
      <div className={styles.cover} data-reposition={reposition}>
        {activePage?.cover?.url && (
          <div
            className={styles.cover__bg}
            ref={ref}
            style={{
              backgroundPosition: `center ${activePage?.cover?.position}%`,
              backgroundImage: `url(${activePage?.cover?.url})`,
            }}
          >
            {activePage._id !== "home" && (
              <div className={styles.cover__wrapper + " " + styleFullWidth}>
                <div className={styles.cover__buttons}>
                  <div className={styles.button} onMouseDown={handleReposition}>
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
