import React, { ChangeEvent } from "react";
import { Button } from "../Button";
import styles from "./Search.module.scss";
import { ReactComponent as TopbarSearchSVG } from "../../../assets/img/svg/search.svg";
import { ReactComponent as CloseSVG } from "../../../assets/img/svg/close.svg";
import { SearchRow } from "../SearchRow";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { main } from "../../../data/languages/main";
import { IPage, ISearch } from "../../../types/interface";
import { universalIncludes } from "../../../utils/search/universalIncludes";
import { userSlice } from "../../../store/user/user.slice";

export const Search: React.FC<ISearch> = ({
  dataPages,
  text,
  placeholder,
  icon,
  type = "search",
  hotkey = "",
  cName = "",
  handle,
}) => {
  const { lang, modalTarget } = useAppSelector((store) => store.userReducer);
  const { updateModalTarget } = userSlice.actions;
  const dispatch = useAppDispatch();

  const data = main[lang];

  const refSearch = React.useRef<HTMLInputElement>(null);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(
    modalTarget === type
  );

  React.useEffect(() => {
    setIsOpenModal(modalTarget === type);
  }, [modalTarget]);

  const openModal = () => {
    dataPages && dataPages?.length > 0 && setIsOpenModal(true);
  };

  const closeModal = (e: React.MouseEvent<Element>) => {
    if ((e.target as Element).classList.contains("notion__modal")) {
      handleCloseModal("");
      dispatch(updateModalTarget(""));
    }
  };

  const handleCloseModal = (pageId: string) => {
    setIsOpenModal(false);
    dispatch(updateModalTarget(""));
    handle && handle(pageId);
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
    if (dataPages) {
      setDataSearch(
        dataPages.filter((page) => universalIncludes(search, page.name))
      );
    }
  }, [dataPages, search]);

  const hotkeys =
    hotkey || (dataPages && dataPages?.length > 0)
      ? String(dataPages?.length)
      : "";

  return (
    <>
      {icon !== "hide" && (
        <Button icon={icon} text={text} handle={openModal} hotkey={hotkeys} />
      )}
      {isOpenModal && (
        <div className={`notion__modal ${cName}`} onMouseDown={closeModal}>
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
                    placeholder={placeholder}
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
                      type={type}
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
