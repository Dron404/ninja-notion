import React, { ChangeEvent } from "react";
import { Button } from "../Button";
import styles from "./Search.module.scss";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as CloseSVG } from "../../../assets/img/svg/close.svg";
import { dataPrivate } from "../../../data/dataPrivate";
import { SearchRow } from "../SearchRow";

import { main } from "../../../data/languages/main";

export const Search: React.FC = () => {
  const lang = "en";
  const data = main[lang];

  const refSearch = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).classList.contains("notion__modal")) {
      setIsOpen(false);
    }
  };

  const [value, setValue] = React.useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <Button
        icon={<TopbarSearchSVG />}
        text={data.text_search}
        handle={openModal}
      />
      {isOpen && (
        <div className="notion__modal" onMouseDown={closeModal}>
          <div className="notion__modal_body">
            <div className={styles.search}>
              <div className={styles.search__header}>
                <div className={styles.search__icon}>
                  <TopbarSearchSVG />
                </div>
                <div className={styles.search__panel}>
                  <input
                    ref={refSearch}
                    className={styles.search__input}
                    placeholder={`${data.text_search} Иван Воробьёв ${data.text_s_notion}`}
                    type="search"
                    name="search"
                    onChange={handleSearch}
                    value={value}
                  />
                  {value.length > 0 && (
                    <div className={styles.search__clear} onClick={handleClear}>
                      <CloseSVG />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.search__body}>
                {dataPrivate?.pages ? (
                  dataPrivate.pages.map((page, index) => (
                    <SearchRow key={index} page={page} />
                  ))
                ) : (
                  <div className={styles.search__notResult}>
                    <strong>{data.text_no_results}</strong>
                    <span>{data.text_some_results}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};