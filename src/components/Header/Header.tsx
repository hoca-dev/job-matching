import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useScrollToTop } from "../../hooks";
import { Routes } from "../../constants";
import { DropdownMenu } from "..";

export const Header = () => {
  const { isVisible } = useScrollToTop();
  return (
    <>
      <DropdownMenu />
      <header
        className={classNames(styles.header, { [styles.fixed]: isVisible })}
      >
        <div className={styles.logo}>
          <NavLink to={Routes.Home}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={Routes.Service}
              >
                서비스 소개
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={Routes.Pricing}
              >
                가격정책
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={Routes.Testimonials}
              >
                고객 후기
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={Routes.Contacts}
              >
                문의하기
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={Routes.Team}
              >
                HOCA 팀
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
