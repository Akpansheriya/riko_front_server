import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return <div className="App">
   <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>;
}

export default App;
