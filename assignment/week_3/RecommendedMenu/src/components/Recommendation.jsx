import styled from "styled-components";
import { MENU } from "../constants/menu";
import { useEffect, useState } from "react";
import ShowSelectedCategory from "./ShowSelectedCategory";

const Recommendation = (props) => {
  const category = props.category;
  const randomNum = parseInt(Math.random() * 22 + 1);
  const randomSelectedMenu = MENU.filter((it) => it.id === randomNum)[0];
  const firstCategory = props.clickedFirstCategory;
  const secondCategory = props.clickedSecondCategory;
  const thirdCategory = props.clickedThirdCategory;
  const filteredMenu = MENU.filter(
    (it) =>
      it.firstCategory === firstCategory &&
      it.secondCategory === secondCategory &&
      it.thirdCategory === thirdCategory
  )[0];
  const [isAgainClicked, setIsAgainClicked] = useState(false);

  const clickAgainHandler = () => {
    setIsAgainClicked(true);
    props.setIsStartClicked(false);
  };

  useEffect(() => {
    props.setStep(4);
  }, []);

  return isAgainClicked ? (
    <ShowSelectedCategory
      category={category}
      setIsStartClicked={props.setIsStartClicked}
      setStep={props.setStep}
    />
  ) : (
    <>
      <St.MenuImg
        src={firstCategory ? filteredMenu.imgURL : randomSelectedMenu.imgURL}
      />
      <St.MenuTitle>
        {firstCategory
          ? filteredMenu.description
          : randomSelectedMenu.description}
      </St.MenuTitle>
      <St.AgainBtn onClick={clickAgainHandler}>다시하기</St.AgainBtn>
    </>
  );
};

const St = {
  MenuImg: styled.img`
    width: 25rem;
    height: 20rem;
  `,
  MenuTitle: styled.p`
    margin: 1rem 0;
    padding: 0.5rem 2rem;

    border: double 0.7rem ${({ theme }) => theme.colors.lightGreen};

    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.lightGreen};
    background-color: ${({ theme }) => theme.colors.darkGreen};
  `,

  AgainBtn: styled.button`
    margin-top: 0.5rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: #000;

    background-color: ${({ theme }) => theme.colors.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.darkPink};
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }
  `,
};

export default Recommendation;
