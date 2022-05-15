import { Route, Routes, Navigate } from "react-router-dom";
import { Page, Home } from "../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path="/marketing" element={<Page title="marketing" />} />
          <Route path="/finance" element={<Page title="finance" />} />
          <Route path="/personal" element={<Page title="personal" />} />
          <Route path={"*"} element={<Navigate to="marketing" />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
