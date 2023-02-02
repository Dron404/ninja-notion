import React from "react";
import { Body } from "../components/Notion/Body";
import { Header } from "../components/Notion/Header";
import { Sidebar } from "../components/Notion/Sidebar";
import { IStateContext } from "../types/interface";

export const StateContext = React.createContext<Partial<IStateContext>>({});

export function NoutionPage() {
  const theme: string = "light" || "light";
  const [asideStatus, setAsideStatus] = React.useState<boolean>(true);
  const handleAsideToggle = () => {
    setAsideStatus(!asideStatus);
  };

  return (
    <>
      <StateContext.Provider value={{ handleAsideToggle, asideStatus }}>
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
