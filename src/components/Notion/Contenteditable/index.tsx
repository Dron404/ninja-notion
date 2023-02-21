import React from "react";
import ContentEditable from "react-contenteditable";
import { useDebounce } from "../../../hooks/useDebounce";
import { useAppDispatch } from "../../../hooks/redux";
import { userSlice } from "../../../store/user/user.slice";
import { IPage } from "../../../types/interface";

interface IContenteditable {
  tag: string;
  text: string;
  pageId?: string;
  keyName: "name" | "comment";
  className?: string;
  placeholder?: string;
}

const Contenteditable: React.FC<IContenteditable> = ({
  tag,
  text,
  pageId,
  keyName,
  className,
  placeholder,
}) => {
  const dispatch = useAppDispatch();
  const { updatePagesState } = userSlice.actions;

  const editableRef = React.useRef(null);
  const [editableText, setEditableText] = React.useState(text);

  const html: string = useDebounce(editableText, 1000);

  React.useEffect(() => {
    setEditableText(text);
  }, [text]);

  React.useEffect(() => {
    if (pageId) {
      const replaceObject: Partial<IPage> = {};
      replaceObject[keyName] = html;
      dispatch(updatePagesState({ replaceObject, pageId }));
    }
  }, [html]);

  return (
    <ContentEditable
      className={className}
      placeholder={placeholder}
      ref={editableRef}
      tagName={tag}
      html={editableText}
      onPaste={(e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        document.execCommand("insertText", false, text);
      }}
      onChange={(e) => {
        const html = e.target.value;
        setEditableText(html);
      }}
    />
  );
};

export default Contenteditable;
