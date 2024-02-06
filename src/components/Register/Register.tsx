import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

export const RegisterComponent = () => (
  <div className={styles["login-container"]}>
    <div className={styles["top-container"]}>
      <div className={styles.backdrop}></div>
      <div className={styles["header-container"]}>
        <h1>Create</h1>
        <h1>Account!</h1>
        <p>Please register to continue!</p>
      </div>
    </div>
    <div className={styles["inner-container"]}>
      <div className={styles["box-container"]}>
        <form className={styles["form-container"]}>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button type="submit">Register</button>
        </form>
        <p className={styles["line-text"]}>
          Already have an account?{" "}
          <Link to="#" className={styles["bold-link"]}>
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);
