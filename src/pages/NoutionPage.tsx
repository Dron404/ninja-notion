import React from "react";
import { NotionBody } from "../components/Notion/NotionBody";
import { NotionHeader } from "../components/Notion/NotionHeader";
import { NotionSidebar } from "../components/Notion/NotionSidebar";

export function NoutionPage() {
  const [asideStatus, setAsideStatus] = React.useState<boolean>(true);

  return (
    <>
      <div className="notion">
        <aside className="notion__aside" data-status={asideStatus}>
          <NotionSidebar
            asideStatus={asideStatus}
            setAsideStatus={setAsideStatus}
          />
        </aside>
        <section className="notion__section">
          <NotionHeader />
          <NotionBody />
        </section>
      </div>
    </>
  );
}
