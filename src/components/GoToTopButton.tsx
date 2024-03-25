import styled from "styled-components";
import arrowTop from "../assets/images/Arrow-top.svg";
import { useScrollToTop } from "../hooks";

const Btn = styled.button`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: none;
  background-color: #7c19ea;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 3.4rem;
  z-index: 9;
`;

export const GoToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <BtnContainer>
      {isVisible && (
        <Btn onClick={scrollToTop}>
          <img src={arrowTop} alt="arrow-top" />
        </Btn>
      )}
    </BtnContainer>
  );
};
