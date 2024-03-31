import { FC } from "react";
import styled from "styled-components";
import vectorRight from "../assets/images/Vector-right.svg";
import { useNavigate } from 'react-router-dom';

interface Props {
  children: string;
}

const Btn = styled.button`
  width: 20.1rem;
  padding: 1.8rem 2.4rem;
  border-radius: 5rem;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(124, 25, 234, 0.8);
  border: none;
  color: #2f2f2f;
  font-size: 2rem;
  font-family: Pretendard700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  cursor: pointer;
  span {
    width: 3rem;
    height: 3rem;
    background-color: #7b1ae6;
    border-radius: 50%;
    display: grid;
    place-items: center;
    img {
      height: 1.4rem;
    }
  }
`;

export const Button: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  return (
    <Btn onClick={handleClick}>
      {children}{" "}
      <span>
        <img src={vectorRight} alt="vector right" />
      </span>
    </Btn>
  );
};

