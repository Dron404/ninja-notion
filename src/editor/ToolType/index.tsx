import * as React from "react";
import { useEditorApi } from "../TextEditor";
import cn from "classnames";
import "./ToolType.scss";

// svg

import { ReactComponent as TrashSVG } from "../../assets/img/svg/trash.svg";
import { ReactComponent as DragSVG } from "../../assets/img/svg/drag.svg";
import { ReactComponent as AddSVG } from "../../assets/img/svg/add.svg";

import {
  h1PNG,
  h2PNG,
  h3PNG,
  quotePNG,
  codePNG,
  bulletedListPNG,
  numberedListPNG,
  textPNG,
} from "../../data/dataPng";

import { BlockType } from "../TextEditor/config";
import { Button } from "../../components/Notion/buttons/Button";
import { main } from "../../data/languages/main";

import { useAppSelector } from "../../hooks/redux";
import { Menu } from "@headlessui/react";
import { ButtonMini } from "../../components/Notion/buttons/ButtonMini";

const toolType: React.FC = () => {
  const { toggleBlockType, currentBlockType, removeBlock, addEmptyBlock } =
    useEditorApi();
  const { lang } = useAppSelector((store) => store.userReducer);
  const data = main[lang];

  const handleRemoveRow = () => {
    removeBlock();
  };

  return (
    <>
      <ButtonMini icon={<AddSVG />} handle={addEmptyBlock} />
      <Menu as="div" className="notion-popup__menu">
        <Menu.Button>
          <div className="button-page-more">
            <ButtonMini icon={<DragSVG />} />
          </div>
        </Menu.Button>
        <Menu.Items className="toolType">
          <Menu.Item>
            <div onClick={close}>
              <Button
                icon={<TrashSVG />}
                text={data.text_delete}
                cName="toolType__itemMini"
                hotkey="Del"
                handleEvent={handleRemoveRow}
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={textPNG}
                text={data.text_text}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.default &&
                    "toolType__item_active"
                )}
                blockType={BlockType.default}
                handleBlockType={toggleBlockType}
                key="default"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={h1PNG}
                text={data.text_placeholder_heading_1}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.h1 && "toolType__item_active"
                )}
                blockType={BlockType.h1}
                handleBlockType={toggleBlockType}
                key="h1"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={h2PNG}
                text={data.text_placeholder_heading_2}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.h2 && "toolType__item_active"
                )}
                blockType={BlockType.h2}
                handleBlockType={toggleBlockType}
                key="h2"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={h3PNG}
                text={data.text_placeholder_heading_3}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.h3 && "toolType__item_active"
                )}
                blockType={BlockType.h3}
                handleBlockType={toggleBlockType}
                key="h3"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={quotePNG}
                text={data.text_quote}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.blockquote &&
                    "toolType__item_active"
                )}
                blockType={BlockType.blockquote}
                handleBlockType={toggleBlockType}
                key="blockquote"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={codePNG}
                text={data.text_code}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.code && "toolType__item_active"
                )}
                blockType={BlockType.code}
                handleBlockType={toggleBlockType}
                key="code"
                hotkey="Ctrl+J"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={bulletedListPNG}
                text={data.text_bulleted_list}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.list && "toolType__item_active"
                )}
                blockType={BlockType.list}
                handleBlockType={toggleBlockType}
                key="list"
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={close}>
              <Button
                src={numberedListPNG}
                text={data.text_numbered_list}
                cName={cn(
                  "toolType__itemMini",
                  currentBlockType === BlockType.orderList &&
                    "toolType__item_active"
                )}
                blockType={BlockType.orderList}
                handleBlockType={toggleBlockType}
                key="orderList"
              />
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default toolType;
