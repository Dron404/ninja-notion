import React, { ChangeEvent } from "react";
import styles from "./ContentIconSettings.module.scss";
import { Menu } from "@headlessui/react";
import { ButtonTab } from "../ButtonTab";
import { Button } from "../Button";
import { EmojiesList } from "../EmojiesList";
import { ReactComponent as RandomSVG } from "../../../assets/img/svg/random.svg";
import { ReactComponent as CloseSVG } from "../../../assets/img/svg/close.svg";

import { StateContext } from "../../../pages/NoutionPage";
import { ButtonMini } from "../ButtonMini";

export const ContentIconSettings = (): React.ReactElement => {
  const [tab, setTab] = React.useState("emojis");
  const [search, setSearch] = React.useState("");
  const { context } = React.useContext(StateContext);

  const handleChangeSerch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
        <Menu.Button>
          <div className={styles.icon}>
            {context?.pageState.icon && (
              <span className={styles.emoji}>{context?.pageState.icon}</span>
            )}
          </div>
        </Menu.Button>
        <Menu.Items className={`${styles.popup} notion-popup__body`}>
          <div className={styles.container}>
            <div className={styles.control}>
              <div className={styles.control__tab}>
                <ButtonTab
                  text="Emojis"
                  target="emojis"
                  tab={tab}
                  handle={setTab}
                />
              </div>
              <div className={styles.control__button}>
                <Button text="Remove" />
              </div>
            </div>
            <div className={styles.control__row}>
              <div className={styles.control__search}>
                <input
                  className={styles.control__input}
                  placeholder="Filter…"
                  type="text"
                  value={search}
                  onChange={handleChangeSerch}
                  autoFocus={true}
                  tabIndex={0}
                />
                {search.length > 0 && (
                  <ButtonMini
                    cName={styles.control__close}
                    icon={<CloseSVG />}
                    handle={() => setSearch("")}
                  />
                )}
              </div>
              <Button text="random" icon={<RandomSVG />} />
            </div>

            <div className={styles.body}>
              {tab === "emojis" && <EmojiesList value={search} />}
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};
