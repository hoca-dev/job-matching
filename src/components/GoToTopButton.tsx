import styled from "styled-components";
import arrowTop from "../assets/images/Arrow-top.svg";
import { useScrollToTop } from "../hooks";

const Btn = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  background-color: #7c19ea;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  position: fixed;
  bottom: 4.7rem;
  right: 5.5rem;
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
