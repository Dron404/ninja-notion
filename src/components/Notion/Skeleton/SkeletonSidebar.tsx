import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSidebar: React.FC = () => (
  <ContentLoader
    speed={2}
    width={228}
    height={300}
    viewBox="0 0 233 300"
    className="skeleton"
    backgroundColor="#f0f0f0"
    foregroundColor="#cccccc"
  >
    <rect x="42" y="19" rx="3" ry="3" width="93" height="14" opacity={0.5} />
    <rect x="200" y="20" rx="3" ry="3" width="22" height="14" />
    <circle cx="22" cy="24" r="14" />
    <rect x="201" y="125" rx="3" ry="3" width="22" height="14" />
    <rect x="18" y="63" rx="3" ry="3" width="93" height="9" />
    <rect x="18" y="91" rx="3" ry="3" width="93" height="9" />
    <rect x="19" y="128" rx="3" ry="3" width="93" height="9" />
    <rect x="19" y="164" rx="3" ry="3" width="118" height="11" />
    <rect x="20" y="195" rx="3" ry="3" width="140" height="13" />
    <rect x="21" y="239" rx="3" ry="3" width="93" height="14" />
  </ContentLoader>
);

export default SkeletonSidebar;
