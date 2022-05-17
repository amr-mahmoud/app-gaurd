import { InitialStateType } from "../provider/initState";
import { actions, ActionTypes } from "./actions";

const reducer = (state: InitialStateType, action: actions) => {
  switch (action.type) {
    case ActionTypes.GET_PLUGINS_DATA:
      return { ...state, plugins: action.payload };

    case ActionTypes.GET_TABS_DATA:
      return { ...state, tabs: action.payload };

    case ActionTypes.UPDATE_TAB:
      const { id, tab } = action.payload;
      let tabs = state.tabs;
      tabs[id] = tab;
      return { ...state, tabs: tabs };

    default:
      return state;
  }
};

export default reducer;
