import { createContext, Dispatch, ReactElement, useReducer } from "react";
import { initState, InitialStateType } from "./initState";
import reducer from "../reducer";

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initState,
  dispatch: () => null,
});

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
