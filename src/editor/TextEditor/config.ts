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
}

export enum InlineStyle {
  BOLD = "B",
  ITALIC = "i",
  UNDERLINE = "U",
  ACCENT = "A",
  colorDefault = "Default",
  colorGray = "Gray",
  colorBrown = "Brown",
  colorOrange = "Orange",
  colorYellow = "Yellow",
  colorGreen = "Green",
  colorBlue = "Blue",
  colorPurple = "Purple",
  colorPink = "Pink",
  colorRed = "Red",
  bgColorDefault = "Background Default",
  bgColorGray = "Background Gray",
  bgColorBrown = "Background Brown",
  bgColorOrange = "Background Orange",
  bgColorYellow = "Background Yellow",
  bgColorGreen = "Background Green",
  bgColorBlue = "Background Blue",
  bgColorPurple = "Background Purple",
  bgColorPink = "Background Pink",
  bgColorRed = "Background Red",
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
  [InlineStyle.colorDefault]: { color: "unset" },
  [InlineStyle.colorGray]: { color: "gray" },
  [InlineStyle.colorBrown]: { color: "brown" },
  [InlineStyle.colorOrange]: { color: "orange" },
  [InlineStyle.colorYellow]: { color: "goldenrod" },
  [InlineStyle.colorGreen]: { color: "green" },
  [InlineStyle.colorBlue]: { color: "blue" },
  [InlineStyle.colorPurple]: { color: "purple" },
  [InlineStyle.colorPink]: { color: "pink" },
  [InlineStyle.colorRed]: { color: "red" },
  [InlineStyle.bgColorDefault]: { backgroundColor: "unset" },
  [InlineStyle.bgColorGray]: { backgroundColor: "gray" },
  [InlineStyle.bgColorBrown]: { backgroundColor: "brown", color: "white" },
  [InlineStyle.bgColorOrange]: { backgroundColor: "orange", color: "white" },
  [InlineStyle.bgColorYellow]: { backgroundColor: "goldenrod" },
  [InlineStyle.bgColorGreen]: { backgroundColor: "green", color: "white" },
  [InlineStyle.bgColorBlue]: { backgroundColor: "blue", color: "white" },
  [InlineStyle.bgColorPurple]: { backgroundColor: "purple", color: "white" },
  [InlineStyle.bgColorPink]: { backgroundColor: "pink" },
  [InlineStyle.bgColorRed]: { backgroundColor: "red", color: "white" },
};
