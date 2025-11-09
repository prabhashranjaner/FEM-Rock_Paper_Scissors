import { createContext, useContext, useReducer, type ReactNode } from "react";
import type {
  GameActionType,
  GameContextType,
  GameStateType,
  OptionsType,
} from "../types/gamesTypes";

const GameContext = createContext<GameContextType | null>(null);

const initialState: GameStateType = {
  playerChoice: null,
  computerChoice: null,
  points: 0,
  step: 1,
  finalResult: "",
};

function declareResult(playerChoice: OptionsType, computerChoice: OptionsType) {
  let result = "";
  if (playerChoice === "rock") {
    if (computerChoice === "rock") result = "draw";
    if (computerChoice === "scissors") result = "win";
    if (computerChoice === "paper") result = "lose";
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") result = "lose";
    if (computerChoice === "scissors") result = "draw";
    if (computerChoice === "paper") result = "win";
  } else {
    if (computerChoice === "rock") result = "win";
    if (computerChoice === "scissors") result = "lose";
    if (computerChoice === "paper") result = "draw";
  }

  return result;
}

function reducer(state: GameStateType, action: GameActionType) {
  switch (action.type) {
    case "playerChoice/add":
      return { ...state, playerChoice: action.payload, step: 2 };

    case "computerChoice/add":
      return { ...state, computerChoice: action.payload, step: 3 };

    case "step/update":
      return { ...state, step: action.payload };
    case "update/score":
      return { ...state, points: action.payload };

    case "over": {
      let newScore: number = state.points;
      const result = declareResult(state.playerChoice!, state.computerChoice!);
      if (result === "win") newScore = state.points + 1;
      if (result === "lose" && state.points > 0) newScore = state.points - 1;
      return { ...state, step: 4, finalResult: result, points: newScore };
    }

    case "reset":
      return { ...initialState, points: state.points };

    default:
      return state;
  }
}

export default function GameContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// eslint-disable-next-line
export function useGame() {
  const context = useContext(GameContext);

  return context;
}
