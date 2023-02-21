import React, { useState, SetStateAction } from "react";
// import geo from "../../assets/images/home/geography.png";
// import arrowDown from "../../assets/images/home/arrow-down.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/user/user.slice";
import { languages } from "../../data/languages/language";
import { Tlanguage } from "../../types/types";
import { Menu } from "@headlessui/react";
import { Button } from "../Notion/buttons/Button";
import styles from "../Notion/Settings/Language/Language.module.scss";

// function DropDown(props: {
//   selected: string;
//   setSelected: React.Dispatch<SetStateAction<string>>;
// }) {
//   const { selected, setSelected } = props;
//   const [isActive, setIsActive] = useState(false);
//   const options: Array<string> = ["Русский", "Польский", "Английский"];
//   return (
//     <div className="dropdown">
//       {isActive && (
//         <div className="dropdown-content">
//           {options.map((option: string) => (
//             <div
//               tabIndex={0}
//               role="button"
//               key={option}
//               onClick={() => {
//                 setSelected(option);
//                 setIsActive(false);
//               }}
//               onKeyDown={() => {
//                 setSelected(option);
//                 setIsActive(false);
//               }}
//               className="dropdown-item"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//       <div
//         onKeyDown={() => {
//           setIsActive(!isActive);
//         }}
//         tabIndex={0}
//         role="button"
//         className="dropdown-btn"
//         onClick={() => {
//           setIsActive(!isActive);
//         }}
//       >
//         <img src={geo} alt="black-white earth" className="geography" />
//         {selected}
//         <img src={arrowDown} alt="arrow down" className="arrow-down" />
//       </div>
//     </div>
//   );
// }

const DropDown: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((store) => store.userReducer);
  const { updateLanguage } = userSlice.actions;

  const activeLanguage = languages.find((language) => language.code === lang);

  const handleChangeLanguege = async (lang: Tlanguage) => {
    dispatch(updateLanguage(lang));
  };

  return (
    <Menu as="div" className={`${styles.menu} notion-popup__menu`}>
      <Menu.Button className={styles.button}>
        <Button
          text={String(activeLanguage?.name)}
          cName={styles.button__default}
        />
      </Menu.Button>
      <Menu.Items className={`${styles.popup} notion-popup__body`}>
        {languages.map((lang, index) =>
          lang.code !== activeLanguage?.code ? (
            <div
              className={styles.langues}
              key={index}
              onClick={() => handleChangeLanguege(lang.code)}
            >
              <div className={`${styles.langues__name} cursor`}>
                {lang.name}
              </div>
              <div className={`${styles.langues__description} cursor`}>
                {lang.description}
              </div>
            </div>
          ) : (
            <div
              className={`${styles.langues} ${styles.langues__active} cursor`}
              key={index}
              onClick={() => handleChangeLanguege(lang.code)}
            >
              <div className={styles.langues__name}>{lang.name}</div>
              <div className={styles.langues__description}>
                {lang.description}
              </div>
            </div>
          )
        )}
      </Menu.Items>
    </Menu>
  );
};
export default DropDown;
