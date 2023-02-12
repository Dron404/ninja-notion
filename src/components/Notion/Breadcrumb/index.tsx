import React from "react";
import styles from "./Breadcrumb.module.scss";
import { Button } from "../Button";
import { useAppSelector } from "../../../hooks/redux";
import SkeletonBreadcrumb from "../Skeleton/SkeletonBreadcrumb";
import { main } from "../../../data/languages/main";

export const Breadcrumb = (): React.ReactElement => {
  const { breadcrumbs, isLoading, lang } = useAppSelector(
    (store) => store.userReducer
  );

  const data = main[lang];

  return (
    <div className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__ul}>
        {isLoading ? (
          <SkeletonBreadcrumb />
        ) : (
          <>
            <li className={styles.breadcrumb__li}>
              <Button
                link={`/pages/home`}
                text={data.text_home_page}
                icon="🏠"
                cName={styles.breadcrumb__link}
              />
            </li>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb) => (
                <li className={styles.breadcrumb__li} key={breadcrumb._id}>
                  <Button
                    link={`/pages/${breadcrumb?._id}`}
                    text={breadcrumb?.name}
                    icon={breadcrumb?.icon}
                    cName={styles.breadcrumb__link}
                  />
                </li>
              ))}
          </>
        )}
      </ul>
    </div>
  );
};
