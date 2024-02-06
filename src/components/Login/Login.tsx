import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

export const LoginComponent = () => (
  <div className={styles["login-container"]}>
    <div className={styles["top-container"]}>
      <div className={styles.backdrop}></div>
      <div className={styles["header-container"]}>
        <h1>Welcome to</h1>
        <h1>Hoca!</h1>
        <p>Please sign-in to continue!</p>
      </div>
    </div>
    <div className={styles["inner-container"]}>
      <div className={styles["box-container"]}>
        <form className={styles["form-container"]}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="#" className={styles["muted-link"]}>
            Forget your password?
          </Link>
          <button type="submit">Login</button>
        </form>
        <p className={styles["line-text"]}>
          Don't have an accoun?{" "}
          <Link to="#" className={styles["bold-link"]}>
            Register
          </Link>
        </p>
      </div>
    </div>
  </div>
);
