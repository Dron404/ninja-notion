import * as React from "react";
import { useEditorApi } from "../TextEditor";
import cn from "classnames";
import "./ToolType.scss";

import { ReactComponent as DragSVG } from "../../assets/img/svg/drag.svg";
import { ReactComponent as AddSVG } from "../../assets/img/svg/add.svg";

import { BlockType } from "../TextEditor/config";
import { Button } from "../../components/Notion/Button";
import { ButtonMini } from "../../components/Notion/ButtonMini";

const toolType: React.FC = () => {
  const { toggleBlockType, currentBlockType } = useEditorApi();

  const [isOpenEditorMenu, setIsOpenEditorMenu] = React.useState(false);

  const handleToogleEditorMenu = () => {
    setIsOpenEditorMenu(!isOpenEditorMenu);
  };

  const styleDisplay = isOpenEditorMenu ? "flex" : "none";

  return (
    <>
      <div className="toolButton" id="toolButton">
        <ButtonMini icon={<AddSVG />} />
        <ButtonMini icon={<DragSVG />} handle={handleToogleEditorMenu} />
      </div>
      <div className="toolType" id="toolType" style={{ display: styleDisplay }}>
        <Button
          text="Text"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.default && "toolType__item_active"
          )}
          blockType={BlockType.default}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="default"
        />

        <Button
          text="Heading 1"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.h1 && "toolType__item_active"
          )}
          blockType={BlockType.h1}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="h1"
        />

        <Button
          text="Heading 2"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.h2 && "toolType__item_active"
          )}
          blockType={BlockType.h2}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="h2"
        />

        <Button
          text="Heading 3"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.h3 && "toolType__item_active"
          )}
          blockType={BlockType.h3}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="h3"
        />

        <Button
          text="Quote"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.blockquote && "toolType__item_active"
          )}
          blockType={BlockType.blockquote}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="blockquote"
        />

        <Button
          text="Code"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.code && "toolType__item_active"
          )}
          blockType={BlockType.code}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="code"
        />

        <Button
          text="Bulleted list"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.list && "toolType__item_active"
          )}
          blockType={BlockType.list}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="list"
        />

        <Button
          text="Numbered list"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.orderList && "toolType__item_active"
          )}
          blockType={BlockType.orderList}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="orderList"
        />

        <Button
          text="Footnote"
          cName={cn(
            "toolType__itemMini",
            currentBlockType === BlockType.cite && "toolType__item_active"
          )}
          blockType={BlockType.cite}
          handleBlockType={toggleBlockType}
          handle={handleToogleEditorMenu}
          key="cite"
        />
      </div>
    </>
  );
};

export default toolType;
