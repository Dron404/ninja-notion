import React from "react";

export function NoutionPage() {
  return (
    <>
      <div className="notion">
        <aside className="notion__aside">
          sidebar
          <nav></nav>
        </aside>

        <section className="notion__section">
          <header className="notion__header">header</header>
          <div className="notion__body">body</div>
        </section>
      </div>
    </>
  );
}
