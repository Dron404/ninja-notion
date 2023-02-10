import React, { useState, SetStateAction } from "react";
import geo from "../../assets/images/home/geography.png";
import arrowDown from "../../assets/images/home/arrow-down.png";

function DropDown(props: {
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}) {
  const { selected, setSelected } = props;
  const [isActive, setIsActive] = useState(false);
  const options: Array<string> = ["Русский", "Польский", "Английский"];
  return (
    <div className="dropdown">
      {isActive && (
        <div className="dropdown-content">
          {options.map((option: string) => (
            <div
              tabIndex={0}
              role="button"
              key={option}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              onKeyDown={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
      <div
        onKeyDown={() => {
          setIsActive(!isActive);
        }}
        tabIndex={0}
        role="button"
        className="dropdown-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <img src={geo} alt="black-white earth" className="geography" />
        {selected}
        <img src={arrowDown} alt="arrow down" className="arrow-down" />
      </div>
    </div>
  );
}
export default DropDown;
