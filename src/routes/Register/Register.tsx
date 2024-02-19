import styled from "styled-components";
import { RegisterComponent } from "../../components";
import googleIcon from "../../assets/images/icons8-google.svg";
import { useGoogleAuthMutation } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../supabase";
import { Routes } from "../../constants";
const RegisterRouteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
    padding: 1rem 3rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
`;

export const RegisterRoute = () => {
  const [googleLogin] = useGoogleAuthMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        localStorage.setItem("authenticated", "true");
        navigate(Routes.Dashboard);
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    document.title = "Register";
  });

  return (
    <RegisterRouteContainer>
      <button
        className="google-btn"
        onClick={() => googleLogin(Routes.Register)}
      >
        <img src={googleIcon} alt="google icon" />
        <span>Register with Google</span>
      </button>
      <RegisterComponent />
    </RegisterRouteContainer>
  );
};
