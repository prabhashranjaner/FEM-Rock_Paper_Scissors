import type { OptionsType } from "../types/gamesTypes";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

const ElementSelect = ({ option }: PropsType) => {
  if (option === "paper") return <Paper />;
  if (option === "rock") return <Rock />;
  if (option === "scissors") return <Scissors />;
};

export default ElementSelect;

type PropsType = {
  option: OptionsType | null;
};
