import { Route, Routes, Navigate } from "react-router-dom";
import { Page, Home } from "../pages";
import { tabs } from "../contants";
const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Home tabs={tabs} />}>
          <Route path="/marketing" element={<Page title="Marketing" />} />
          <Route path="/finance" element={<Page title="Finance" />} />
          <Route path="/personnel" element={<Page title="Personnel" />} />
          <Route path={"*"} element={<Navigate to="marketing" />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
