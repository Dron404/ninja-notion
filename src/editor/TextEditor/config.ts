import Immutable from "immutable";
import { DraftEditorCommand, DefaultDraftBlockRenderMap } from "draft-js";

export enum EntityType {
  link = "link",
}

export enum BlockType {
  h1 = "header-one",
  h2 = "header-two",
  h3 = "header-three",
  h4 = "header-four",
  blockquote = "blockquote",
  code = "code-block",
  list = "unordered-list-item",
  orderList = "ordered-list-item",
  cite = "cite",
  default = "unstyled",
  color = "color",
}

export enum InlineStyle {
  BOLD = "B",
  ITALIC = "i",
  UNDERLINE = "U",
  ACCENT = "A",
  color = "color",
}

export const BLOCK_LABELS = {
  [BlockType.h1]: "Heading 1",
  [BlockType.h2]: "Heading 2",
  [BlockType.h3]: "Heading 3",
  [BlockType.h4]: "Heading 4",
  [BlockType.blockquote]: "Quote",
  [BlockType.code]: "Code",
  [BlockType.list]: "ulleted list",
  [BlockType.orderList]: "Numbered list",
  [BlockType.cite]: "Footnote",
  [BlockType.default]: "Text",
  [BlockType.color]: "color",
};

export type KeyCommand = DraftEditorCommand | "accent";

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
  [BlockType.cite]: {
    element: "cite",
  },
});

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(
  CUSTOM_BLOCK_RENDER_MAP
);

export const CUSTOM_STYLE_MAP = {
  [InlineStyle.ACCENT]: {
    color: "#ff4d4d",
  },
  [InlineStyle.BOLD]: {
    fontWeight: "bold",
  },
  [InlineStyle.UNDERLINE]: {
    textDecoration: "underline",
  },

  [InlineStyle.ITALIC]: {
    fontStyle: "italic",
  },
  [InlineStyle.color]: {
    color: "blue",
  },
};
