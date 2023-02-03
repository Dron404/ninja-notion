import React, { useState, SetStateAction } from "react";
import geo from "../../assets/images/home/geography.png";
import arrowDown from "../../assets/images/home/arrow-down.png";


export function DropDown ( props:  { selected: string, setSelected: React.Dispatch<SetStateAction<string>>}) {
  const { selected, setSelected} = props;
  const [isActive, setIsActive] = useState(false);
  const options:Array<string> = ["Русский", "Белорусский", "Английский"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        <img src={geo} alt="black-white earth" className="geography"></img>
        { selected }
        <img src={arrowDown} alt="arrow down" className="arrow-down"></img>
      </div>
      { isActive && (
        <div className="dropdown-content">
          {options.map((option: string) => (
            <div key={option}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )

}
