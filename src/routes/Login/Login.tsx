import styled from "styled-components";
import { LoginComponent } from "../../components";
import googleIcon from "../../assets/images/icons8-google.svg";
import { useCreateDevMutation, useGoogleAuthMutation } from "../../store";
import { useEffect } from "react";
import { supabase } from "../../supabase";

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
  const [googleLogin, { data: newUser, isSuccess, isLoading, isError }] =
    useGoogleAuthMutation();

  const [createDev, { data: newDev }] = useCreateDevMutation();

  useEffect(() => {
    if (isSuccess) {
      createDev("vmflmvlfkmv fr vkfr");
    }
  }, [isSuccess]);
  return (
    <LoginRouteContainer>
      <button className="google-btn" onClick={googleLogin}>
        <img src={googleIcon} alt="google icon" />
        <span>Continue with Google</span>
      </button>
      <LoginComponent />
    </LoginRouteContainer>
  );
};
