import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./store/provider";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
