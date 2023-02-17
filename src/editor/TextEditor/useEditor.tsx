import {
  KeyBindingUtil,
  getDefaultKeyBinding,
  DraftHandleValue,
  CompositeDecorator,
  DraftEntityMutability,
  EditorState,
  RichUtils,
} from "draft-js";
import * as React from "react";
import { BlockType, EntityType, InlineStyle, KeyCommand } from "./config";
import { HTMLtoState, stateToHTML } from "./convert";
import LinkDecorator from "./Link";

export type EditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
  toggleBlockType: (blockType: BlockType) => void;
  currentBlockType: BlockType;
  toHtml: () => string;
  toggleInlineStyle: (inlineStyle: InlineStyle) => void;
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean;
  addLink: (url: string) => void;
  setEntityData: (entityKey: string, data: Record<string, string>) => void;
  handleKeyCommand: (
    command: KeyCommand,
    editorState: EditorState
  ) => DraftHandleValue;
  handlerKeyBinding: (e: React.KeyboardEvent) => KeyCommand | null;
};

const decorator = new CompositeDecorator([LinkDecorator]);

export const useEditor = (html?: string): EditorApi => {
  const [state, setState] = React.useState(() =>
    html
      ? EditorState.createWithContent(HTMLtoState(html), decorator)
      : EditorState.createEmpty(decorator)
  );

  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) =>
      RichUtils.toggleBlockType(currentState, blockType)
    );
  }, []);

  const getSelectionRange = (): Range | null => {
    const selectionElement = window.getSelection();
    if (selectionElement && selectionElement.rangeCount === 0) return null;
    return selectionElement && selectionElement.getRangeAt(0);
  };

  // const getCoordsFormat = (
  //   selectionRange: Range
  // ):
  //   | {
  //       offsetLeft: number;
  //       offsetTop: number;
  //     }
  //   | undefined => {
  //   const editorBounds = document
  //     ?.getElementById("editor")
  //     ?.getBoundingClientRect();
  //   if (editorBounds) {
  //     const rangeBounds = selectionRange.getBoundingClientRect();
  //     const rangeWidth = rangeBounds.right - rangeBounds.left;

  //     const offsetLeft =
  //       rangeBounds.left - editorBounds.left + rangeWidth / 2 - 107 / 2;

  //     const offsetTop = rangeBounds.top - editorBounds.top - 42;
  //     return { offsetLeft, offsetTop };
  //   }
  // };

  const toolFormat = document.getElementById("toolFormat");
  const toolType = document.getElementById("toolType");
  const toolButton = document.getElementById("toolButton");
  const editor = document.getElementById("editor");
  const coordEditor = editor?.getBoundingClientRect();

  let position = {
    format: { left: 33, top: -500, opacity: 0 },
    type: { left: 33, top: 400, opacity: 0 },
    button: { left: 33, top: 400, opacity: 0 },
  };

  const currentBlockType = React.useMemo(() => {
    const selectionRange = getSelectionRange();

    const selection = state.getSelection();
    const startKey = selection.getStartKey();
    const content = state.getCurrentContent();
    const block = content.getBlockForKey(startKey);
    const elementRow = document.querySelector(
      `[data-offset-key="${startKey}-0-0"]`
    );

    const coordElementRow = elementRow?.getBoundingClientRect();

    if (toolFormat && toolType && toolButton) {
      position = {
        format: { left: 33, top: -500, opacity: 0 },
        type: { left: 33, top: 400, opacity: 0 },
        button: { left: 33, top: 400, opacity: 0 },
      };
      elementRow &&
        elementRow.setAttribute("style", `background-color: transparent;`);

      if (coordElementRow && coordEditor && elementRow) {
        const toolFormatLeft = 0;
        const toolFormatTop = coordElementRow.y - coordEditor.top - 30;

        const toolTypeLeft = 10;
        const toolTypeTop =
          coordElementRow.y - coordEditor.top - toolType.offsetHeight / 2;

        const toolButtonLeft = 0;
        const range =
          coordElementRow.height > 32 ? coordElementRow.height / 2 : 7;
        const toolButtonTop = coordElementRow.y - coordEditor.top + range;

        const isSelect =
          Number(selectionRange?.endOffset) -
          Number(selectionRange?.startOffset);
        if (isSelect) {
          position = {
            format: {
              left: toolFormatLeft,
              top: toolFormatTop,
              opacity: 1,
            },
            type: {
              left: toolTypeLeft,
              top: toolTypeTop,
              opacity: 1,
            },
            button: {
              left: toolButtonLeft,
              top: toolButtonTop,
              opacity: 1,
            },
          };
        } else {
          position = {
            format: {
              left: toolFormatLeft,
              top: toolFormatTop,
              opacity: 0,
            },
            type: {
              left: toolTypeLeft,
              top: toolTypeTop,
              opacity: 1,
            },
            button: {
              left: toolButtonLeft,
              top: toolButtonTop,
              opacity: 1,
            },
          };
        }
      }

      toolFormat.setAttribute(
        "style",
        `opacity: ${position.format.opacity};
          display: ${position.format.opacity ? "flex" : "none"};
          transform: translate(${position.format.left}px, ${
          position.format.top
        }px);
          `
      );

      toolType.setAttribute(
        "style",
        `
          transform: translate(${position.type.left}px, ${position.type.top}px);
          `
      );
      if (position.button.left !== 30 && position.button.top !== 300) {
        toolButton.setAttribute(
          "style",
          `opacity: ${position.button.opacity};
          transform: translate(${position.button.left}px, ${position.button.top}px);
          `
        );
      }
    }

    /// console.log("block.toJS()", block.toJS());
    return block.getType() as BlockType;
  }, [state]);

  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = React.useCallback(
    (inlineStyle: InlineStyle) => {
      const currentStyle = state.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [state]
  );

  const setEntityData = React.useCallback(
    (
      entityKey: string,
      data: {
        [key: string]: string;
      }
    ) => {
      setState((currentState) => {
        const content = currentState.getCurrentContent();
        const contentStateUpdated = content.mergeEntityData(entityKey, data);
        return EditorState.push(
          currentState,
          contentStateUpdated,
          "apply-entity"
        );
      });
    },
    []
  );

  const addEntity = React.useCallback(
    (
      entityType: EntityType,
      data: Record<string, string>,
      mutability: DraftEntityMutability
    ) => {
      setState((currentState) => {
        const contentState = currentState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          entityType,
          mutability,
          data
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newState = EditorState.set(currentState, {
          currentContent: contentStateWithEntity,
        });
        return RichUtils.toggleLink(
          newState,
          newState.getSelection(),
          entityKey
        );
      });
    },
    []
  );

  const addLink = React.useCallback(
    (url: string) => {
      addEntity(EntityType.link, { url }, "MUTABLE");
    },
    [addEntity]
  );

  const handleKeyCommand = React.useCallback(
    (command: KeyCommand, editorState: EditorState) => {
      if (command === "accent") {
        toggleInlineStyle(InlineStyle.ACCENT);
        return "handled";
      }

      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        setState(newState);
        return "handled";
      }

      return "not-handled";
    },
    [toggleInlineStyle]
  );

  const handlerKeyBinding = React.useCallback((e: React.KeyboardEvent) => {
    if (e.keyCode === 81 && KeyBindingUtil.hasCommandModifier(e)) {
      return "accent";
    }

    return getDefaultKeyBinding(e);
  }, []);

  const toHtml = React.useCallback(
    () => stateToHTML(state.getCurrentContent()),
    [state]
  );

  return React.useMemo(
    () => ({
      state,
      onChange: setState,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      toHtml,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
    }),
    [
      state,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      toHtml,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
    ]
  );
};
