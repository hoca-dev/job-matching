import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
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
          <li>
            <Link to={"/"}>서비스 소개</Link>
          </li>
          <li>
            <Link to={"/"}>가격정책</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/"}>고객 후기</Link>
          </li>
          <li>
            <Link to={"/"}>문의하기</Link>
          </li>
          <li>
            <Link to={"/"}>HOCA 팀</Link>
          </li>
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
