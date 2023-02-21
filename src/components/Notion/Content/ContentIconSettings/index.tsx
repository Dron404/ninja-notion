import React, { ChangeEvent } from "react";
import styles from "./ContentIconSettings.module.scss";
import { Menu } from "@headlessui/react";
import { ButtonTab } from "../../buttons/ButtonTab";
import { Button } from "../../buttons/Button";
import EmojiesList from "../../EmojiesList";
import { ReactComponent as RandomSVG } from "../../../../assets/img/svg/random.svg";
import { ReactComponent as CloseSVG } from "../../../../assets/img/svg/close.svg";

import { ButtonMini } from "../../buttons/ButtonMini";
import { main } from "../../../../data/languages/main";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userSlice } from "../../../../store/user/user.slice";
import getRandomEmojis from "../../../../utils/getRandomEmojis";
import { IPage } from "../../../../types/interface";

export const ContentIconSettings = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { activePage, lang } = useAppSelector((store) => store.userReducer);
  const { updatePagesState, updateArrayPage } = userSlice.actions;

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

  const data = main[lang];

  const [tab, setTab] = React.useState("emojis");
  const [search, setSearch] = React.useState("");

  const handleChangeSerch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleRemoveIcon = () => {
    const replaceObject = { icon: "" };
    updatePageStateFn(replaceObject);
  };
  const handleRandomIcon = () => {
    const replaceObject = { icon: getRandomEmojis() };
    updatePageStateFn(replaceObject);
  };

  return (
    <>
      <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
        <Menu.Button>
          <div className={styles.icon}>
            <span className={styles.emoji}>{activePage?.icon}</span>
          </div>
        </Menu.Button>
        {activePage?._id !== "home" && (
          <Menu.Items className={`${styles.popup} notion-popup__body`}>
            <div className={styles.container}>
              <div className={styles.control}>
                <div className={styles.control__tab}>
                  <ButtonTab
                    text={data.text_emojis}
                    target="emojis"
                    tab={tab}
                    handle={setTab}
                  />
                </div>
                <Menu.Item>
                  {({ close }) => (
                    <div className={styles.control__button} onClick={close}>
                      <Button
                        text={data.text_remove}
                        handle={handleRemoveIcon}
                      />
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className={styles.control__row}>
                <div className={styles.control__search}>
                  <input
                    className={styles.control__input}
                    placeholder={data.text_filter}
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

                <Button
                  text={data.text_random}
                  icon={<RandomSVG />}
                  handle={handleRandomIcon}
                />
              </div>

              <div className={styles.body}>
                {tab === "emojis" && <EmojiesList value={search} />}
              </div>
            </div>
          </Menu.Items>
        )}
      </Menu>
    </>
  );
};
