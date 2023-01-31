import React from "react";
import { NotionBody } from "../components/Notion/NotionBody";
import { NotionHeader } from "../components/Notion/NotionHeader";
import { NotionSidebar } from "../components/Notion/NotionSidebar";

export function NoutionPage() {
  return (
    <>
      <div className="notion">
        <aside className="notion__aside notion__aside--active">
          <NotionSidebar />
        </aside>
        <section className="notion__section">
          <NotionHeader />
          <NotionBody />
        </section>
      </div>
    </>
  );
}
