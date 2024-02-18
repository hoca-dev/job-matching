import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEmailSigninMutation } from "../../store";
import { useEffect } from "react";
import { Routes } from "../../constants";

interface LoginForm {
  email: string;
  password: string;
}

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const navigate = useNavigate();

  const [emailSignin, { isSuccess }] = useEmailSigninMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("authenticated", "true");
      navigate(Routes.Dashboard);
    }
  }, [isSuccess]);

  const loginHandler: SubmitHandler<LoginForm> = (data) => {
    emailSignin(data);
  };

  return (
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
          <form
            className={styles["form-container"]}
            onSubmit={handleSubmit(loginHandler)}
          >
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
              {...register("password", {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)/,
              })}
            />
            {errors.password && (
              <span className={styles.passwordErrorMessage}>
                Password must contain at least one letter and one number
              </span>
            )}
            <Link to="#" className={styles["muted-link"]}>
              Forget your password?
            </Link>
            <button type="submit">Login</button>
          </form>
          <p className={styles["line-text"]}>
            Don't have an accoun?{" "}
            <Link to={Routes.Register} className={styles["bold-link"]}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
