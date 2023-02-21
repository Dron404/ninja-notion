import * as React from "react";
import { EditorApi, useEditor } from "./useEditor";
import { useAppSelector } from "../../hooks/redux";

const TextEditorContext = React.createContext<EditorApi | undefined>(undefined);

interface ITextEditorProvider {
  children: React.ReactNode;
}
export const TextEditorProvider: React.FC<ITextEditorProvider> = ({
  children,
}) => {
  const { activePage } = useAppSelector((store) => store.userReducer);

  const html = activePage && activePage.content;

  const editorApi = useEditor(html || "");

  return (
    <TextEditorContext.Provider value={editorApi}>
      {children}
    </TextEditorContext.Provider>
  );
};

export const useEditorApi = () => {
  const context = React.useContext(TextEditorContext);
  if (context === undefined) {
    throw new Error("useEditorApi must be used within TextEditorProvider");
  }

  return context;
};
