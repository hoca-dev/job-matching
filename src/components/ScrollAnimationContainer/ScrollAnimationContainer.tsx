import styled from "styled-components";
import { css } from "styled-components";

export const ScrollAnimationContainer = styled.div<{
  $isParentSectionIntersecting: boolean;
}>`
  opacity: 0;
  transform: translateY(40%);
  transition: all 1s;
  ${(props) =>
    props.$isParentSectionIntersecting &&
    css`
      transform: translateY(0);
      opacity: 1;
    `};
`;
