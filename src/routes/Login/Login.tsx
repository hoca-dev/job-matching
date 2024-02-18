import styled from "styled-components";
import { LoginComponent } from "../../components";
import googleIcon from "../../assets/images/icons8-google.svg";
import { useGoogleAuthMutation } from "../../store";
import { useEffect } from "react";
import { Routes } from "../../constants";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

const LoginRouteContainer = styled.div`
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

export const LoginRoute = () => {
  const [googleLogin] = useGoogleAuthMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        localStorage.setItem("authenticated", "true");
        navigate(Routes.Dashboard, { state: session });
      }
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <LoginRouteContainer>
      <button className="google-btn" onClick={() => googleLogin(Routes.Login)}>
        <img src={googleIcon} alt="google icon" />
        <span>Continue with Google</span>
      </button>
      <LoginComponent />
    </LoginRouteContainer>
  );
};
