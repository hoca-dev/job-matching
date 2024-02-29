import { Link } from "react-router-dom";
import styles from "./DropdownMenu.module.scss";
import { Routes } from "../../constants";
import logo from "../../assets/images/logo.svg";
import exitIcon from "../../assets/images/x.svg";
import rightIcon from "../../assets/images/chevron-right.svg";
import burger from "../../assets/images/Frame 114.svg";
import { useState } from "react";
import classNames from "classnames";

export const DropdownMenu = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <header
        className={classNames(styles.header, { [styles.hidden]: !isMenuShown })}
      >
        <div className={styles.logo}>
          <Link to={Routes.Home}>
            <img src={logo} alt="logo" />
          </Link>
          <button onClick={() => setIsMenuShown(false)}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="#">
                서비스 소개
                <img src={rightIcon} alt="right icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                가격정책 <img src={rightIcon} alt="right icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                고객후기 <img src={rightIcon} alt="right icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                HOCA 팀 <img src={rightIcon} alt="right icon" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["request-btn"]}>
          <button>개발자 채용 의뢰하기</button>
        </div>
      </header>
      <button
        className={classNames(styles["toggle-btn"], {
          [styles.hidden]: isMenuShown,
        })}
        onClick={() => setIsMenuShown(true)}
      >
        <img src={burger} alt="burger" />
      </button>
    </div>
  );
};
