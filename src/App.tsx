import Router from "./router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./store/provider";

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
