import type { ReactNode } from "react";
import styled from "styled-components";

import { LabelSpan, StepContainer } from "../styles/styles";

const StyledChoice = styled(StepContainer)`
  gap: 5rem;
  @media (min-width: 786px) {
    gap: 6rem;
  }

  @media (min-width: 1080px) {
    gap: 8rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  @media (min-width: 786px) {
    gap: 1.6rem;
  }

  @media (min-width: 1080px) {
    gap: 2rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;

  @media (min-width: 786px) {
    width: 12rem;
    height: 12rem;
  }

  @media (min-width: 1080px) {
    width: 13rem;
    height: 13rem;
  }
`;

const Circle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: var(--col-grad-dark);

  @media (min-width: 786px) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: 1080px) {
    width: 12rem;
    height: 12rem;
  }
`;

const Choice = ({ elementOne, elementTwo }: PropsType) => {
  return (
    <StyledChoice>
      <Section>
        <Box>{elementOne || <Circle />}</Box>
        <LabelSpan>You Picked</LabelSpan>
      </Section>
      <Section>
        <Box>{elementTwo || <Circle />}</Box>
        <LabelSpan>The House Picked</LabelSpan>
      </Section>
    </StyledChoice>
  );
};

export default Choice;

type PropsType = {
  elementOne: ReactNode | null;
  elementTwo: ReactNode | null;
};
