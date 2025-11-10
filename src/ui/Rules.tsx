import styled from "styled-components";

const StyledRules = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Button = styled.button`
  padding: 0.8rem 3rem;
  font-size: 18px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 5000 ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }
`;

const Rules = () => {
  return (
    <StyledRules>
      <Button>Rules</Button>
    </StyledRules>
  );
};

export default Rules;
