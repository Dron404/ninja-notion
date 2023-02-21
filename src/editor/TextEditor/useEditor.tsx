import {
  KeyBindingUtil,
  getDefaultKeyBinding,
  DraftHandleValue,
  CompositeDecorator,
  DraftEntityMutability,
  EditorState,
  RichUtils,
  Modifier,
  SelectionState,
  ContentState,
  ContentBlock,
  genKey,
} from "draft-js";
import { List } from "immutable";
import * as React from "react";
import { useParams } from "react-router-dom";
import { IStyleTool } from "../../types/interface";
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
  handleRerender: () => void;
  currentItem: Element | null;
  removeBlock: () => void;
  addEmptyBlock: () => void;
};

const decorator = new CompositeDecorator([LinkDecorator]);

export const useEditor = (html?: string): EditorApi => {
  const { pageId } = useParams();
  const [currentItem, setCurrentItem] = React.useState<Element | null>(null);
  const [rerender, setRerender] = React.useState(false);
  const handleRerender = () => setRerender(!rerender);

  const [state, setState] = React.useState(() =>
    html
      ? EditorState.createWithContent(HTMLtoState(html), decorator)
      : EditorState.createEmpty(decorator)
  );

  React.useEffect(() => {
    setState(() =>
      html
        ? EditorState.createWithContent(HTMLtoState(html), decorator)
        : EditorState.createEmpty(decorator)
    );
  }, [rerender]);

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

  const toolButton = document.getElementById("toolButton");
  const toolFormat = document.getElementById("toolFormat");
  const editor = document.getElementById("editor");
  const coordCditor = editor?.getBoundingClientRect();

  const [style, setStyle] = React.useState<IStyleTool | null>({
    button: { opacity: 1, y: 0 },
    format: { opacity: 0, y: 0 },
  });

  const updateStyle = (key: string) => {
    const currentBlock = document.querySelector(
      `[data-offset-key="${key}-0-0"]`
    );
    setCurrentItem(currentBlock);

    const selectionRange = getSelectionRange();
    const isSelect =
      Number(selectionRange?.endOffset) - Number(selectionRange?.startOffset);

    const coordCurrentBlock = currentBlock?.getBoundingClientRect();

    if (coordCurrentBlock && coordCditor && toolFormat && style) {
      const Y = coordCurrentBlock?.y - window.pageYOffset - coordCditor?.y;

      setStyle({
        button: { opacity: 1, y: Y },
        format: { opacity: isSelect ? 1 : 0, y: Y },
      });
    }
  };

  const currentBlockType = React.useMemo(() => {
    const selection = state.getSelection();
    const startKey = selection.getFocusKey();
    const content = state.getCurrentContent();
    const block = content.getBlockForKey(startKey);
    const blockKey = block.getKey();
    updateStyle(blockKey);

    return block.getType() as BlockType;
  }, [state, pageId]);

  const updatePositonTools = () => {
    if (style) {
      toolButton &&
        toolButton.setAttribute(
          "style",
          `
        opacity: ${style.button.opacity};
        transform: translate(0px, ${style.button.y + 0}px);`
        );

      const display = style.format.opacity ? "flex" : "none";
      toolFormat &&
        toolFormat.setAttribute(
          "style",
          `display: ${display};
        opacity: ${style.format.opacity};
        transform: translate(50px, ${style.format.y - 50}px);`
        );
    }
  };

  updatePositonTools();

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

  function removeBlock() {
    const contentState = state.getCurrentContent();
    const selection = state.getSelection();
    const startKey = selection.getFocusKey();
    const block = contentState.getBlockForKey(startKey);
    const prev = contentState.getBlockBefore(String(block?.getKey()));

    let removeSelection = new SelectionState({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getText().length,
    });

    if (block && prev) {
      removeSelection = new SelectionState({
        anchorKey: prev.getKey(),
        anchorOffset: prev.getText().length,
        focusKey: block.getKey(),
        focusOffset: block.getText().length,
      });
    }

    const newContentState = Modifier.removeRange(
      contentState,
      removeSelection,
      "backward"
    );

    const newEditorState = EditorState.push(
      state,
      newContentState,
      "remove-range"
    );

    setState(newEditorState);
  }

  const addEmptyBlock = () => {
    const key = genKey();
    const newBlock = new ContentBlock({
      key: key,
      type: "unstyled",
      text: "",
      characterList: List(),
    });

    const contentState = state.getCurrentContent();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newBlockMap = contentState.getBlockMap().set(newBlock.key, newBlock);

    const selectionBefore = contentState.getSelectionBefore();
    const selectionAfter = contentState.getSelectionAfter();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = ContentState.createFromBlockArray(newBlockMap.toArray())
      .set("selectionBefore", selectionBefore)
      .set("selectionAfter", selectionAfter);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let newEditorState = EditorState.push(state, content, "apply-entity");

    const newSelection = new SelectionState({
      anchorKey: key,
      anchorOffset: 0,
      focusKey: key,
      focusOffset: 0,
    });

    newEditorState = EditorState.forceSelection(newEditorState, newSelection);

    setState(newEditorState);
  };

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
      handleRerender,
      currentItem,
      removeBlock,
      addEmptyBlock,
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
      handleRerender,
      currentItem,
      removeBlock,
      addEmptyBlock,
    ]
  );
};
