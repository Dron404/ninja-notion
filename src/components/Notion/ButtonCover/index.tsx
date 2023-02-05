import React from "react";
import styles from "./ButtonCover.module.scss";
import { Menu } from "@headlessui/react";
import { ButtonTab } from "../ButtonTab/";
import { Button } from "../Button/";
import { Gallery } from "../Gallery/";
import { UploadFile } from "../UploadFile/";
import { LinkUrl } from "../LinkUrl/";

// test state
import { StateContext } from "../../../pages/NoutionPage";
import { copyObject } from "../../../utils/object/copyObject";

export const ButtonCover = ({
  cName,
}: {
  cName: string;
}): React.ReactElement => {
  const [tab, setTab] = React.useState("gallery");
  const { context } = React.useContext(StateContext);

  const handleRemoveBackground = () => {
    const newPagaState = copyObject(context?.pageState);
    if (context && newPagaState && newPagaState.cover) {
      newPagaState.cover.url = null;
      newPagaState.cover.position = 100;
      context.setPageState(newPagaState);
    }
  };

  return (
    <>
      <Menu as="div" className="notion-popup__menu">
        <Menu.Button>
          <div className={cName}>Change cover</div>
        </Menu.Button>
        <Menu.Items className={styles.popup + " notion-popup__body"}>
          <div className={styles.container}>
            <div className={styles.control}>
              <div className={styles.control__tab}>
                <ButtonTab
                  text="Gallery"
                  target="gallery"
                  tab={tab}
                  handle={setTab}
                />
                <ButtonTab
                  text="Upload"
                  target="upload"
                  tab={tab}
                  handle={setTab}
                />
                <ButtonTab
                  text="Link"
                  target="link"
                  tab={tab}
                  handle={setTab}
                />
              </div>
              <div className={styles.control__button}>
                <Button text="Remove" handle={handleRemoveBackground} />
              </div>
            </div>

            <div className={styles.body}>
              {tab === "gallery" && <Gallery />}
              {tab === "upload" && <UploadFile />}
              {tab === "link" && <LinkUrl />}
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};
