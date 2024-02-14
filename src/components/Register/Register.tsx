import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import { useEffect, useState } from "react";
import { useCreateDevMutation, useEmailSignupMutation } from "../../store";
import { supabase } from "../../supabase";

export const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const [emailSignUp, { data: newUser, isLoading, isSuccess, isError }] =
    useEmailSignupMutation();

  const [createDev, { data: newDev }] = useCreateDevMutation();

  useEffect(() => {
    if (isSuccess) {
      createDev(newUser?.user?.id);
    }
  }, [isSuccess]);

  return (
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
          <form
            className={styles["form-container"]}
            onSubmit={(event) => {
              event.preventDefault();
              emailSignUp({ email, password, fullname });
            }}
          >
            <input
              type="text"
              placeholder="Full name"
              required
              onChange={(event) => setFullname(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
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
};
