import { useCallback, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { putPluginTab } from "../../api";
import { AppContext } from "../../store/provider";
import { ActionTypes } from "../../store/reducer/actions";

import {
  SidebarWrapper,
  SidebarItem,
  SidebarList,
  SidebarTitleWrapper,
  Title,
  SidebarText,
  SidebarFooter,
  StyledSwitch,
  ShadowCoverElement,
} from "./Sidebar.style";

const Sidebar = ({ tabs: tabsId }: { tabs: string[] }) => {
  const { state, dispatch } = useContext(AppContext);
  const { tabs } = state;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const path = pathname.split("/")[1];

  const activeFlag = useCallback(() => {
    const activeLength = tabs[path]?.active?.length;
    const inactiveLength = tabs[path]?.inactive?.length;
    const disabledLength = tabs[path]?.disabled?.length;
    if (disabledLength !== activeLength + inactiveLength) return true;
    return false;
  }, [tabs[path]])();

  const onSwitchHandler = async () => {
    let tab = { ...tabs[path] };
    // this line of data only exists because of data json supplied
    let set = new Set([...tabs[path].disabled]);

    if (activeFlag) {
      tab.active.map((plugin) => {
        // this line of data only exists because of data json supplied
        if (!set.has(plugin)) tab.disabled.push(plugin);
        return;
      });
      tab.inactive.map((plugin) => {
        if (!set.has(plugin)) tab.disabled.push(plugin);
        return;
      });
    } else {
      tab.disabled = [];
    }

    const res = await putPluginTab(path, tab);
    if (res.title) {
      dispatch({
        type: ActionTypes.UPDATE_TAB,
        payload: { id: path, tab: res },
      });
    }
  };

  return (
    <SidebarWrapper>
      <SidebarTitleWrapper>
        <Title>{"Data"}</Title>
        <Title fontWeight="bolder">{"Guard"}</Title>
      </SidebarTitleWrapper>
      <SidebarList>
        {tabsId.map((val) => (
          <SidebarItem
            key={val + "tab"}
            onClick={() => navigate(`/${val.toLowerCase()}`, { replace: true })}
            active={path.toLowerCase() === val.toLowerCase()}
          >
            {val}
          </SidebarItem>
        ))}
      </SidebarList>

      {tabs[path]?.disabled && (
        <SidebarFooter>
          <SidebarText active={activeFlag}>
            {activeFlag
              ? "All plugins are enabled"
              : "All plugins are disabled"}
          </SidebarText>
          <StyledSwitch
            checked={activeFlag}
            active={activeFlag}
            onClick={() => onSwitchHandler()}
          />
        </SidebarFooter>
      )}
      {tabs[path]?.disabled && (
        <ShadowCoverElement active={activeFlag}></ShadowCoverElement>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
