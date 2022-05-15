import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../store/provider";
// import { Checkbox } from "semantic-ui-react";

// const CheckboxExampleToggle = () => <Checkbox toggle />;

const Home = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <>
      Home
      {/* <CheckboxExampleToggle /> */}
      <Outlet />
    </>
  );
};

export default Home;
