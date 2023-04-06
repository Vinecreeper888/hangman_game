import "./App.css";
// import Button from "@mui/material/Button";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Actions/Profile";
import HomePage from "./components/Homepage/Homepage";
import MainPage from "./components/Main/MainPage";
import Stats from "./components/Actions/Stats";

function App() {
  return (
    <Layout>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/stats" element={<Stats/>}/>
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
