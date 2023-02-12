import React, { ChangeEvent } from "react";
import { Button } from "../Button";
import styles from "./Search.module.scss";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as CloseSVG } from "../../../assets/img/svg/close.svg";
import { SearchRow } from "../SearchRow";
import { useAppSelector } from "../../../hooks/redux";
import { main } from "../../../data/languages/main";
import { IPage } from "../../../types/interface";
import { universalIncludes } from "../../../utils/search/universalIncludes";

export const Search: React.FC = () => {
  const { user, arrayPage, lang } = useAppSelector(
    (store) => store.userReducer
  );

  const name = user?.name;
  const data = main[lang];

  const refSearch = React.useRef<HTMLInputElement>(null);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).classList.contains("notion__modal")) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const [search, setSearch] = React.useState<string>("");

  const [dataSearch, setDataSearch] = React.useState<IPage[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  React.useEffect(() => {
    if (arrayPage) {
      setDataSearch(
        arrayPage.filter((page) => universalIncludes(search, page.name))
      );
    }
  }, [arrayPage, search]);

  return (
    <>
      <Button
        icon={<TopbarSearchSVG />}
        text={data.text_search}
        handle={openModal}
      />
      {isOpenModal && (
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
                    placeholder={`${data.text_search} ${name} ${data.text_s_notion}`}
                    type="search"
                    name="search"
                    onChange={handleSearch}
                    value={search}
                  />
                  {search.length > 0 && (
                    <div className={styles.search__clear} onClick={handleClear}>
                      <CloseSVG />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.search__body}>
                {dataSearch ? (
                  dataSearch.map((page, index) => (
                    <SearchRow
                      key={index}
                      page={page}
                      handle={handleCloseModal}
                    />
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
