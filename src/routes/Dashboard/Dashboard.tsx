import { ChangeEvent, useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {
  faArrowRightToBracket,
  faCircleLeft,
  faCircleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useLoadDevsQuery, useSignOutMutation } from "../../store";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Routes } from "../../constants";

export const dashboardLoader = async () => {
  if (!localStorage.getItem("authenticated")) {
    return redirect(Routes.Login);
  }

  return null;
};

export const DashboardRoute = () => {
  const navigate = useNavigate();
  const [signOut, { isSuccess }] = useSignOutMutation();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const {
    data: devList,
    isLoading: isDevsLoading,
    isSuccess: isDevsSuccess,
  } = useLoadDevsQuery();

  const [filteredDevList, setFilteredDevList] = useState([]);

  useEffect(() => {
    if (isDevsSuccess) {
      setFilteredDevList(devList);
    }

    if (isSuccess) {
      localStorage.removeItem("authenticated");
      navigate(Routes.Home);
    }
  }, [isSuccess, isDevsSuccess]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilteredDevList(
      devList.filter((dev: any) =>
        dev.full_name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <section
        className={classNames(styles.dashabord, {
          [styles.menuOpen]: isMenuOpen,
        })}
      >
        <aside
          className={classNames(styles.menu, { [styles.hidden]: !isMenuOpen })}
        >
          <div className={styles.logo}>
            <Link to={Routes.Home}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles["log-out"]} onClick={signOut}>
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              color="#ffffffaa"
              size="2x"
            />{" "}
            Log Out
          </div>
        </aside>
        <div className={styles.body}>
          <div className={styles["dashboard-header"]}>
            <div
              className={styles["menu-toggle"]}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={faCircleLeft}
                size="3x"
                color="#ffffffdd"
                className={classNames({
                  [styles.hidden]: !isMenuOpen,
                })}
              />
              <FontAwesomeIcon
                icon={faCircleRight}
                size="3x"
                color="#ffffffdd"
                className={classNames({
                  [styles.hidden]: isMenuOpen,
                })}
              />
            </div>
            <div className={styles["search-input"]}>
              <div className={styles.logo}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="2x"
                  color="#ffffffaa"
                />
              </div>
              <input
                type="text"
                onChange={searchHandler}
                placeholder="Search devs by full name"
              />
            </div>
          </div>
          <div className={styles["dev-list"]}>
            <div className={classNames(styles.dev, styles.header)}>
              <div>&#35;</div>
              <div>Full Name</div>
              <div>Company Email</div>
              <div>Title</div>
              <div>Current Project</div>
              <div>Deadline</div>
            </div>
            {isDevsLoading && <p>Loading...</p>}
            {isDevsSuccess && filteredDevList.length === 0 && (
              <p>No devs founded</p>
            )}
            {devList &&
              filteredDevList.map((dev: any, index: number) => (
                <div className={styles.dev} key={dev.id}>
                  <div>{index + 1}</div>
                  <div>{dev.full_name}</div>
                  <div>{dev.hoca_email}</div>
                  <div>{dev.dev_title}</div>
                  <div>{dev.current_project}</div>
                  <div>{dev.project_deadline}</div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
