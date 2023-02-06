import React from "react";
import styles from "./Cover.module.scss";

import { ButtonCover } from "../ButtonCover";

//test state
import { StateContext } from "../../../pages/NoutionPage";

export const Cover: React.FC = () => {
  const { context } = React.useContext(StateContext);

  const styleFullWidth = context?.pageState.property.full_width
    ? styles.cover__fullWidth
    : styles.cover__defaultWidth;

  const ref = React.useRef<HTMLDivElement>(null);

  const [reposition, setReposition] = React.useState(false);

  const data = {
    text_reposition_off: "Reposition",
    text_reposition_on: "Save position",
  };

  const textReposition = reposition
    ? data.text_reposition_on
    : data.text_reposition_off;

  const handleReposition = () => {
    setReposition(!reposition);
  };

  let isMousedown = false;
  let start = Number(context?.pageState.cover?.position);

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
        }
      }
    });
    element?.addEventListener("mouseup", () => {
      if (isMousedown) {
        isMousedown = false;
      }
    });
  }, [context?.pageState.cover?.position]);

  return (
    <>
      <div className={styles.cover} data-reposition={reposition}>
        {context?.pageState.cover?.url && (
          <div
            className={styles.cover__bg}
            ref={ref}
            style={{
              backgroundPosition: `center ${context?.pageState.cover?.position}%`,
              backgroundImage: `url(${context?.pageState.cover?.url})`,
            }}
          >
            <div className={styles.cover__wrapper + " " + styleFullWidth}>
              <div className={styles.cover__buttons}>
                <div className={styles.button} onMouseDown={handleReposition}>
                  {textReposition}
                </div>
                <ButtonCover cName={styles.button} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
