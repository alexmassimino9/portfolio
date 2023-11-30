import React from "react";
import style from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import { CiMenuBurger } from "react-icons/ci";
const Navigation = () => {
  const links = ["About", "Experience", "Work", "Services", "Contact"];
  const isMobile = useMediaQuery({
    query: "(max-width: 996px)",
  });
  // const handleMobile = () => {};
  return (
    <nav className={style.container}>
      <ul className={style.navList}>
        <li className={style.brandContainer}>
          <a className={style.brand} href="/">
            AM
          </a>
        </li>
        {isMobile ? (
          <li>
            <CiMenuBurger
              onPress=""
              width="20px"
              className={style.mobileBtn}
              size="30"
            />
          </li>
        ) : (
          links.map((item, index) => {
            return (
              <li className={style.navItem} key={index}>
                <a href={`/`}>{item}</a>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default Navigation;