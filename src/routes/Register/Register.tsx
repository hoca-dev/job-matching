import styled from "styled-components";
import { RegisterComponent } from "../../components";

const RegisterRouteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterRoute = () => {
  return (
    <RegisterRouteContainer>
      <RegisterComponent />
    </RegisterRouteContainer>
  );
};
