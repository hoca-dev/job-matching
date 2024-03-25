import { NavLink } from "react-router-dom";
import styles from "./DropdownMenu.module.scss";
import { Routes } from "../../constants";
import logo from "../../assets/images/logo.svg";
import exitIcon from "../../assets/images/x.svg";
import rightIcon from "../../assets/images/chevron-right.svg";
import burger from "../../assets/images/Frame 114.svg";
import { useState } from "react";
import classNames from "classnames";
import { useScrollToTop } from "../../hooks";

export const DropdownMenu = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { isVisible } = useScrollToTop();

  return (
    <div className={classNames(styles.dropdown, { [styles.solid]: isVisible })}>
      <NavLink className={styles.link} to={Routes.Home}>
        <img src={logo} alt="logo" />
      </NavLink>
      <button
        className={classNames(styles["toggle-btn"], {
          [styles.hidden]: isMenuShown,
        })}
        onClick={() => setIsMenuShown(true)}
      >
        <img src={burger} alt="burger" />
      </button>
      <div
        className={classNames(styles.header, { [styles.hidden]: !isMenuShown })}
      >
        <div className={styles.logo}>
          <NavLink to={Routes.Home}>
            <img src={logo} alt="logo" />
          </NavLink>
          <button onClick={() => setIsMenuShown(false)}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to={Routes.Home}
                className={({ isActive }) => isActive && styles.active}
              >
                메인 홈
                <img src={rightIcon} alt="right icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={Routes.Service}
                className={({ isActive }) => isActive && styles.active}
              >
                서비스 소개
                <img src={rightIcon} alt="right icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={Routes.Pricing}
                className={({ isActive }) => isActive && styles.active}
              >
                가격정책 <img src={rightIcon} alt="right icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={Routes.Testimonials}
                className={({ isActive }) => isActive && styles.active}
              >
                고객후기 <img src={rightIcon} alt="right icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={Routes.Team}
                className={({ isActive }) => isActive && styles.active}
              >
                HOCA 팀 <img src={rightIcon} alt="right icon" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles["request-btn"]}>
          <button onClick={() => window.open('https://opnform.com/forms/vah4d7', '_self')}>개발자 채용 의뢰하기</button>
        </div>
      </div>
    </div>
  );
};
