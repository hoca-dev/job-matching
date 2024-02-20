import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import { useEffect } from "react";
import { useEmailSignupMutation } from "../../store";
import { SubmitHandler, useForm } from "react-hook-form";
import { Routes } from "../../constants";
import { Circles } from "react-loader-spinner";

interface RegisterForm {
  email: string;
  password: string;
  full_name: string;
}

export const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const [emailSignUp, { isSuccess, isLoading }] = useEmailSignupMutation();

  useEffect(() => {
    if (isSuccess) {
      alert("We just sent confirmation email! Please confirm!");
    }
  }, [isSuccess]);

  const registerHandler: SubmitHandler<RegisterForm> = (data) => {
    emailSignUp(data);
  };

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
            onSubmit={handleSubmit(registerHandler)}
          >
            <input
              type="text"
              placeholder="Full name"
              required
              {...register("full_name")}
            />
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
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Circles
                  height="30"
                  width="30"
                  color="#2e0063"
                  ariaLabel="loading"
                />
              ) : (
                "Register"
              )}
            </button>
          </form>
          <p className={styles["line-text"]}>
            Already have an account?{" "}
            <Link to={Routes.Login} className={styles["bold-link"]}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
