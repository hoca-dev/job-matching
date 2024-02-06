import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles["header-content"], "container")}>
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
      </div>
    </header>
  );
};
