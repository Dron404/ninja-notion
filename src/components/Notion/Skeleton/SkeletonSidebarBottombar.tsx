import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSidebarBottombar: React.FC = () => (
  <ContentLoader
    speed={2}
    width={233}
    height={48}
    viewBox="0 0 233 48"
    className="skeleton"
    backgroundColor="#f0f0f0"
    foregroundColor="#cccccc"
  >
    <rect x="13" y="16" rx="3" ry="3" width="14" height="14" />
    <rect x="36" y="19" rx="3" ry="3" width="93" height="9" />
    <rect x="-17" y="-3" rx="3" ry="3" width="284" height="4" />
  </ContentLoader>
);

export default SkeletonSidebarBottombar;
