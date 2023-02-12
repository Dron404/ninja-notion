/* eslint-disable prettier/prettier */
import React from "react";
import { Tlanguage } from "../types/types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/strorage/localStorage";

export default function useLanguage(languageDeafault = null) {
  const language = languageDeafault
    ? setLocalStorage("language", languageDeafault)
    : getLocalStorage<Tlanguage>("language")
      ? getLocalStorage<Tlanguage>("language")
      : setLocalStorage("language", "en");
  const [lang, setLang] = React.useState<Tlanguage>(language);
  React.useEffect(() => {
    setLocalStorage("language", lang);
  }, [lang]);
  return { lang, setLang };
}
