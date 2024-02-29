import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { useScrollToTop } from "../../hooks";

export const Header = () => {
  const { isVisible } = useScrollToTop();
  return (
    <header
      className={classNames(styles.header, { [styles.fixed]: isVisible })}
    >
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>서비스 소개</li>
          <li>가격정책</li>
        </ul>
        <ul>
          <li>고객 후기</li>
          <li>문의하기</li>
          <li>HOCA 팀</li>
        </ul>
      </nav>
      {/* <nav className={styles["auth-nav"]}>
          <ul>
            {localStorage.getItem("authenticated") ? (
              <li>
                <Link to={Routes.Dashboard}>Dashboard</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={Routes.Login}>Login</Link>
                </li>
                <li>
                  <Link to={Routes.Register}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav> */}
    </header>
  );
};
