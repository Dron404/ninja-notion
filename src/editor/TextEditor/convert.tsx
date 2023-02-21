import { convertFromHTML, convertToHTML } from "draft-convert";
import { CUSTOM_STYLE_MAP, BlockType, EntityType, InlineStyle } from "./config";

export const stateToHTML = convertToHTML<InlineStyle, BlockType>({
  styleToHTML: (style) => {
    switch (style) {
      case InlineStyle.BOLD:
        return <strong />;
      case InlineStyle.ITALIC:
        return <em />;
      case InlineStyle.UNDERLINE:
        return (
          <span className="underline" style={{ textDecoration: "underline" }} />
        );
      case InlineStyle.ACCENT:
        return (
          <span
            className="accent"
            style={CUSTOM_STYLE_MAP[InlineStyle.ACCENT]}
          />
        );
      case InlineStyle.colorDefault:
        return (
          <span
            className="colorDefault"
            style={CUSTOM_STYLE_MAP[InlineStyle.colorDefault]}
          />
        );
      case InlineStyle.colorGray:
        return (
          <span
            className="colorGray  "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorGray]}
          />
        );
      case InlineStyle.colorBrown:
        return (
          <span
            className="colorBrown "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorBrown]}
          />
        );
      case InlineStyle.colorOrange:
        return (
          <span
            className="colorOrange "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorOrange]}
          />
        );
      case InlineStyle.colorYellow:
        return (
          <span
            className="colorYellow "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorYellow]}
          />
        );
      case InlineStyle.colorGreen:
        return (
          <span
            className="colorGreen "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorGreen]}
          />
        );
      case InlineStyle.colorBlue:
        return (
          <span
            className="colorBlue  "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorBlue]}
          />
        );
      case InlineStyle.colorPurple:
        return (
          <span
            className="colorPurple "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorPurple]}
          />
        );
      case InlineStyle.colorPink:
        return (
          <span
            className="colorPink  "
            style={CUSTOM_STYLE_MAP[InlineStyle.colorPink]}
          />
        );
      case InlineStyle.colorRed:
        return (
          <span
            className="colorRed"
            style={CUSTOM_STYLE_MAP[InlineStyle.colorRed]}
          />
        );
      case InlineStyle.bgColorDefault:
        return (
          <span
            className="bgColorDefault "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorDefault]}
          />
        );
      case InlineStyle.bgColorGray:
        return (
          <span
            className="bgColorGray "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorGray]}
          />
        );
      case InlineStyle.bgColorBrown:
        return (
          <span
            className="bgColorBrown"
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorBrown]}
          />
        );
      case InlineStyle.bgColorOrange:
        return (
          <span
            className="bgColorOrange  "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorOrange]}
          />
        );
      case InlineStyle.bgColorYellow:
        return (
          <span
            className="bgColorYellow  "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorYellow]}
          />
        );
      case InlineStyle.bgColorGreen:
        return (
          <span
            className="bgColorGreen"
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorGreen]}
          />
        );
      case InlineStyle.bgColorBlue:
        return (
          <span
            className="bgColorBlue "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorBlue]}
          />
        );
      case InlineStyle.bgColorPurple:
        return (
          <span
            className="bgColorPurple  "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorPurple]}
          />
        );
      case InlineStyle.bgColorPink:
        return (
          <span
            className="bgColorPink "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorPink]}
          />
        );
      case InlineStyle.bgColorRed:
        return (
          <span
            className="bgColorRed "
            style={CUSTOM_STYLE_MAP[InlineStyle.bgColorRed]}
          />
        );

      default:
        return null;
    }
  },
  blockToHTML: (block) => {
    switch (block.type) {
      case BlockType.cite:
        return <cite />;
      case BlockType.h1:
        return <h1 />;
      case BlockType.h2:
        return <h2 />;
      case BlockType.h3:
        return <h3 />;
      case BlockType.h4:
        return <h4 />;
      case BlockType.orderList:
        return {
          element: <li />,
          nest: <ol />,
        };
      case BlockType.list:
        return {
          element: <li />,
          nest: <ul />,
        };
      case BlockType.blockquote:
        return <blockquote />;
      case BlockType.default:
        return <p />;
      default:
        return null;
    }
  },
  entityToHTML: (entity, originalText) => {
    if (entity.type === EntityType.link) {
      return <a href={String(entity.data.url)}>{originalText}</a>;
    }
    return originalText;
  },
});

export const HTMLtoState = convertFromHTML<DOMStringMap, BlockType>({
  htmlToStyle: (nodeName, node, currentStyle) => {
    if (nodeName === "strong") {
      return currentStyle.add(InlineStyle.BOLD);
    }

    if (nodeName === "em") {
      return currentStyle.add(InlineStyle.ITALIC);
    }

    if (nodeName === "span" && node.classList.contains("underline")) {
      return currentStyle.add(InlineStyle.UNDERLINE);
    }

    if (nodeName === "span" && node.classList.contains("accent")) {
      return currentStyle.add(InlineStyle.ACCENT);
    }

    if (nodeName === "span" && node.classList.contains("colorDefault")) {
      return currentStyle.add(InlineStyle.colorDefault);
    }
    if (nodeName === "span" && node.classList.contains("colorGray")) {
      return currentStyle.add(InlineStyle.colorGray);
    }
    if (nodeName === "span" && node.classList.contains("colorBrown")) {
      return currentStyle.add(InlineStyle.colorBrown);
    }
    if (nodeName === "span" && node.classList.contains("colorOrange")) {
      return currentStyle.add(InlineStyle.colorOrange);
    }
    if (nodeName === "span" && node.classList.contains("colorYellow")) {
      return currentStyle.add(InlineStyle.colorYellow);
    }
    if (nodeName === "span" && node.classList.contains("colorGreen")) {
      return currentStyle.add(InlineStyle.colorGreen);
    }
    if (nodeName === "span" && node.classList.contains("colorBlue")) {
      return currentStyle.add(InlineStyle.colorBlue);
    }
    if (nodeName === "span" && node.classList.contains("colorPurple")) {
      return currentStyle.add(InlineStyle.colorPurple);
    }
    if (nodeName === "span" && node.classList.contains("colorPink")) {
      return currentStyle.add(InlineStyle.colorPink);
    }
    if (nodeName === "span" && node.classList.contains("colorRed")) {
      return currentStyle.add(InlineStyle.colorRed);
    }
    if (nodeName === "span" && node.classList.contains("bgColorDefault")) {
      return currentStyle.add(InlineStyle.bgColorDefault);
    }
    if (nodeName === "span" && node.classList.contains("bgColorGray")) {
      return currentStyle.add(InlineStyle.bgColorGray);
    }
    if (nodeName === "span" && node.classList.contains("bgColorBrown")) {
      return currentStyle.add(InlineStyle.bgColorBrown);
    }
    if (nodeName === "span" && node.classList.contains("bgColorOrange")) {
      return currentStyle.add(InlineStyle.bgColorOrange);
    }
    if (nodeName === "span" && node.classList.contains("bgColorYellow")) {
      return currentStyle.add(InlineStyle.bgColorYellow);
    }
    if (nodeName === "span" && node.classList.contains("bgColorGreen")) {
      return currentStyle.add(InlineStyle.bgColorGreen);
    }
    if (nodeName === "span" && node.classList.contains("bgColorBlue")) {
      return currentStyle.add(InlineStyle.bgColorBlue);
    }
    if (nodeName === "span" && node.classList.contains("bgColorPurple")) {
      return currentStyle.add(InlineStyle.bgColorPurple);
    }
    if (nodeName === "span" && node.classList.contains("bgColorPink")) {
      return currentStyle.add(InlineStyle.bgColorPink);
    }
    if (nodeName === "span" && node.classList.contains("bgColorRed")) {
      return currentStyle.add(InlineStyle.bgColorRed);
    }

    return currentStyle;
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  htmlToBlock(nodeName: string, node: React.ReactNode, last: string) {
    switch (nodeName) {
      case "h1":
        return BlockType.h1;
      case "h2":
        return BlockType.h2;
      case "h3":
        return BlockType.h3;
      case "h4":
        return BlockType.h4;
      case "li":
        if (last === "ol") {
          return BlockType.orderList;
        }
        return BlockType.list;
      case "blockquote":
        return BlockType.blockquote;
      case "cite":
        return BlockType.cite;
      case "div":
      case "p":
        return BlockType.default;
      default:
        return null;
    }
  },
  htmlToEntity: (nodeName, node, createEntity) => {
    if (nodeName === "a" && node.href) {
      return createEntity(EntityType.link, "MUTABLE", { url: node.href });
    }

    return undefined;
  },
});
