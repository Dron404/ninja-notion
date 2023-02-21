import * as React from "react";
import { useEditorApi } from "../TextEditor";
import cn from "classnames";
import "./ToolFormat.scss";

import { ReactComponent as LinkSVG } from "../../assets/img/svg/link.svg";
import { ReactComponent as ToggleSVG } from "../../assets/img/svg/toggle.svg";
import { InlineStyle } from "../TextEditor/config";

import { Button } from "../../components/Notion/buttons/Button";
import { ButtonMini } from "../../components/Notion/buttons/ButtonMini";

const ToolFormat: React.FC = () => {
  const { addLink, toggleInlineStyle, hasInlineStyle } = useEditorApi();

  const [isOpenPopup, setOpenPopup] = React.useState(false);

  const handleAddLink = () => {
    const url = prompt("ENTER URL:");
    if (url) {
      addLink(url);
    }
  };

  const handleTextFormat = (target: InlineStyle) => {
    toggleInlineStyle(target);
  };

  const arrayFormatMain = React.useMemo(
    () => Object.values(InlineStyle).filter((_, index) => index < 4),
    []
  );

  const arrayFormatColor = React.useMemo(
    () => Object.entries(InlineStyle).filter((_, index) => index > 4),
    []
  );

  const handleTextFormatColor = (target: InlineStyle) => {
    toggleInlineStyle(target);
    setOpenPopup(false);
  };

  const handleEvent = () => {
    setOpenPopup(!isOpenPopup);
  };

  return (
    <div className="toolFormat" id="toolFormat">
      {arrayFormatMain.map((v) => (
        <ButtonMini
          icon={v}
          key={v}
          target={v}
          InlineStyle={v}
          handleInlineStyle={handleTextFormat}
          cName={cn(
            "toolFormat__item",
            hasInlineStyle(v) && "toolFormat__item_active"
          )}
        />
      ))}

      <div className="toolFormat__menu">
        <Button
          icon={<ToggleSVG />}
          text="Color"
          cName="toolFormat__item toolFormat__color"
          handleEvent={handleEvent}
        />
        {isOpenPopup && (
          <div className="toolFormat__popup">
            {arrayFormatColor.map((v) => (
              <Button
                icon="A"
                text={v[1]}
                key={v[1]}
                target={v[1]}
                InlineStyle={v[1] as InlineStyle}
                handleInlineStyle={handleTextFormatColor}
                cName={cn(
                  `toolFormat__item toolFormat__${v[0]}`,
                  hasInlineStyle(v[1] as InlineStyle) &&
                    "toolFormat__item_active"
                )}
              />
            ))}
          </div>
        )}
      </div>

      <Button
        icon={<LinkSVG />}
        text="Link"
        cName="toolFormat__item toolFormat__itemLink"
        handle={handleAddLink}
      />
    </div>
  );
};

export default ToolFormat;
