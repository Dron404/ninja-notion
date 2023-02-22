import React from "react";
import styles from "./Home.module.scss";
import { ContentCover } from "../Content/ContentCover";
import { main } from "../../../data/languages/main";
import { ContentIconSettings } from "../Content/ContentIconSettings";
import { useAppSelector } from "../../../hooks/redux";
import { SidebarPage } from "../Sidebar/SidebarPage";
import { ButtonTrash } from "../buttons/ButtonTrash";

export const Home = (): React.ReactElement => {
  const { user, lang, activePage } = useAppSelector(
    (store) => store.userReducer
  );

  const data = main[lang];

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
              <div className="">
                <h2>{data.text_you_pages}</h2>
                <div>
                  {user?.pages?.map((data) => (
                    <SidebarPage
                      icon={data.icon}
                      text={data.name}
                      dataPage={data}
                      key={data._id + "_home"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
