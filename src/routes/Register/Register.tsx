import styled from "styled-components";
import { RegisterComponent } from "../../components";
import googleIcon from "../../assets/images/icons8-google.svg";
import { useGoogleAuthMutation } from "../../store";
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

  return (
    <RegisterRouteContainer>
      <button className="google-btn" onClick={googleLogin}>
        <img src={googleIcon} alt="google icon" />
        <span>Register with Google</span>
      </button>
      <RegisterComponent />
    </RegisterRouteContainer>
  );
};
