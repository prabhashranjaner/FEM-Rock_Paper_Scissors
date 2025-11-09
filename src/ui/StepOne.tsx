import styled from "styled-components";
import Paper from "./Paper";
import Scissors from "./Scissors";
import Rock from "./Rock";
import { useGame } from "../contexts/GameContextProvider";

const StyledStepOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(/images/bg-triangle.svg);
  background-repeat: no-repeat;
  background-position: 50%;

  gap: 3rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

const Bottom = styled.div`
  margin: 0 auto;
`;

// const

const StepOne = () => {
  const { dispatch } = useGame()!;

  return (
    <StyledStepOne>
      <Top>
        <Paper
          handleClick={() =>
            dispatch({ type: "playerChoice/add", payload: "paper" })
          }
        />
        <Scissors
          handleClick={() =>
            dispatch({ type: "playerChoice/add", payload: "scissors" })
          }
        />
      </Top>
      <Bottom>
        <Rock
          handleClick={() =>
            dispatch({ type: "playerChoice/add", payload: "rock" })
          }
        />
      </Bottom>
    </StyledStepOne>
  );
};

export default StepOne;
