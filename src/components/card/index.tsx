import { putPluginTab } from "../../api";
import { TCardProps } from "../../pages/Page/model";
import { ActionTypes } from "../../store/reducer/actions";
import {
  CardWrapper,
  CardHeaderWrapper,
  CardTitle,
  CardCheckboxWrapper,
  CardDescription,
  StyledSwitch,
  CheckBoxLabel,
} from "./Card.style";

const Card = (props: TCardProps) => {
  const { card, targetTab, path, dispatch } = props;
  const { id, title, disabled, active, description } = card;

  const switchHandler = async () => {
    let tab = { ...targetTab };
    if (disabled) return;
    if (active) {
      tab.active = tab.active.filter((plugin) => plugin !== id);
      tab.inactive.push(id);
    } else {
      tab.inactive = tab.inactive.filter((plugin) => plugin !== id);
      tab.active.push(id);
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
    <CardWrapper disabled={disabled}>
      <CardHeaderWrapper>
        <CardTitle> {title}</CardTitle>
        <CardCheckboxWrapper>
          <StyledSwitch
            checked={active}
            active={active}
            disabled={disabled}
            onClick={() => switchHandler()}
          ></StyledSwitch>
          <CheckBoxLabel active={active}>
            {active ? "Allowed" : "Blocked"}
          </CheckBoxLabel>
        </CardCheckboxWrapper>
      </CardHeaderWrapper>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
