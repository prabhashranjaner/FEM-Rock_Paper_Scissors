import styled from "styled-components";
import { LabelSpan } from "../styles/styles";
import { useGame } from "../contexts/GameContextProvider";

const StyledHeader = styled.header`
  position: absolute;
  top: 10px;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);

  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 5px solid var(--col-gray);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin: 0 auto;

  @media (min-width: 786px) {
    max-width: 90%;
  }

  @media (min-width: 1080px) {
    max-width: 650px;
  }
`;

const LogoWrapper = styled.div`
  height: 70px;

  @media (min-width: 786px) {
    height: 80px;
  }

  @media (min-width: 1080px) {
    height: 90px;
  }
`;
const Scorecard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  background-color: white;
  text-align: center;
`;

const Label = styled(LabelSpan)`
  color: var(--col-blue-dark);

  @media (min-width: 786px) {
    font-size: 18px;
  }

  @media (min-width: 1080px) {
    font-size: 20px;
  }
`;

const Score = styled.span`
  font-size: 2.6rem;
  font-weight: bold;
  color: var(--col-text);

  @media (min-width: 786px) {
    font-size: 2.8rem;
  }

  @media (min-width: 1080px) {
    font-size: 3rem;
  }
`;

const Header = () => {
  const { state } = useGame()!;
  return (
    <StyledHeader>
      <LogoWrapper>
        <img alt="logo" src="/images/logo.svg" />
      </LogoWrapper>

      <Scorecard>
        <Label>Score</Label>
        <Score>{state.points}</Score>
      </Scorecard>
    </StyledHeader>
  );
};

export default Header;
