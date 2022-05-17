import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPlugins, getTabs } from "../../api";
import Sidebar from "../../components/sidebar";
import { AppContext } from "../../store/provider";
import { HomeWrapper } from "./Home.style";
import { THomeProps } from "./model";
import { ActionTypes } from "../../store/reducer/actions";

const Home = (props: THomeProps) => {
  const { tabs } = props;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    getPlugins().then((res) =>
      dispatch({ type: ActionTypes.GET_PLUGINS_DATA, payload: res })
    );
    getTabs().then((res) =>
      dispatch({ type: ActionTypes.GET_TABS_DATA, payload: res })
    );
  }, []);

  return (
    <HomeWrapper>
      <Sidebar tabs={tabs} />
      <Outlet />
    </HomeWrapper>
  );
};

export default Home;
