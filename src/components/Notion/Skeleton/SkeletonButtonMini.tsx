import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonButtonMini: React.FC = () => (
  <ContentLoader
    speed={2}
    width={32}
    height={32}
    viewBox="0 0 32 32"
    className="skeleton"
    backgroundColor="#f0f0f0"
    foregroundColor="#cccccc"
  >
    <rect x="9" y="9" rx="3" ry="3" width="14" height="14" />
  </ContentLoader>
);

export default SkeletonButtonMini;
