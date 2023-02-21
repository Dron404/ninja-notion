import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonContent: React.FC = () => (
  <ContentLoader
    speed={2}
    viewBox="0 0 800 400"
    backgroundColor="#e8e8e8"
    foregroundColor="#ababab"
  >
    <rect x="116" y="132" rx="3" ry="3" width="245" height="10" />
    <rect x="-39" y="-6" rx="3" ry="3" width="1000" height="113" />
    <rect x="116" y="152" rx="3" ry="3" width="196" height="2" />
    <rect x="116" y="158" rx="3" ry="3" width="196" height="2" />
    <rect x="116" y="164" rx="3" ry="3" width="196" height="2" />
    <rect x="116" y="170" rx="3" ry="3" width="196" height="2" />
  </ContentLoader>
);

export default SkeletonContent;
