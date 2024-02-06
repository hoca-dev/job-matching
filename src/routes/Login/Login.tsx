import styled from "styled-components";
import { LoginComponent } from "../../components";

const LoginRouteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginRoute = () => {
  return (
    <LoginRouteContainer>
      <LoginComponent />
    </LoginRouteContainer>
  );
};
