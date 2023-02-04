import React from "react";
import { Body } from "../components/Notion/Body";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";
import { IStateContext, IData } from "../types/interface";

export const StateContext = React.createContext<Partial<IStateContext>>({});

export function NoutionPage() {
  const theme: string = "dark" || "light";
  const [asideStatus, setAsideStatus] = React.useState<boolean>(true);
  const handleAsideToggle = () => {
    setAsideStatus(!asideStatus);
  };

  const context = { handleAsideToggle, asideStatus };

  return (
    <>
      <StateContext.Provider value={{ context }}>
        <div className="notion" data-theme={theme}>
          <aside className="notion__aside" data-status={asideStatus}>
            <Sidebar />
          </aside>
          <section className="notion__section">
            <Header />
            <Body />
          </section>
        </div>
      </StateContext.Provider>
    </>
  );
}
