import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonBreadcrumb: React.FC = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={40}
    viewBox="0 0 200 40"
    className="skeleton"
    backgroundColor="#f0f0f0"
    foregroundColor="#cccccc"
  >
    <rect x="9" y="13" rx="3" ry="3" width="14" height="14" />
    <rect x="31" y="18" rx="3" ry="3" width="150" height="4" />
  </ContentLoader>
);

export default SkeletonBreadcrumb;
