import * as React from "react";
import { useEditorApi } from "../TextEditor";
import cn from "classnames";
import "./ToolFormat.scss";

import { ReactComponent as LinkSVG } from "../../assets/img/svg/link.svg";
import { InlineStyle } from "../TextEditor/config";

import { Button } from "../../components/Notion/Button";
import { ButtonMini } from "../../components/Notion/ButtonMini";

const ToolFormat: React.FC = () => {
  const { addLink, toggleInlineStyle, hasInlineStyle } = useEditorApi();

  const handleAddLink = () => {
    const url = prompt("ENTER URL:");
    if (url) {
      addLink(url);
    }
  };

  const handleTextFormat = (target: InlineStyle) => {
    toggleInlineStyle(target);
  };

  return (
    <div className="toolFormat" id="toolFormat">
      {Object.values(InlineStyle).map((v) => (
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

      <Button
        icon={<LinkSVG />}
        text="Link"
        cName="toolFormat__item toolFormat__itemLink"
        handle={handleAddLink}
      />

      {/* <Button
        text="Print"
        cName="toolFormat__item"
        handle={() => {
          console.log(toHtml());
        }}
      /> */}
    </div>
  );
};

export default ToolFormat;
