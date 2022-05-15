import { InitialStateType } from "../provider/initState";
import { actions, ActionTypes } from "./actions";

const reducer = (state: InitialStateType, action: actions) => {
  switch (action.type) {
    case ActionTypes.GET_PLUGINS_DATA:
      return state;

    default:
      return state;
  }
};

export default reducer;
