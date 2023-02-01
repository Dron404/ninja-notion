import React from "react";
import { NotionBody } from "../components/Notion/NotionBody";
import { NotionHeader } from "../components/Notion/NotionHeader";
import { NotionSidebar } from "../components/Notion/NotionSidebar";

export function NoutionPage() {
  const [asideStatus, setAsideStaus] = React.useState<boolean>(true);

  return (
    <>
      <div className="notion">
        <aside className="notion__aside" data-status={asideStatus}>
          <NotionSidebar
            asideStatus={asideStatus}
            setAsideStaus={setAsideStaus}
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
