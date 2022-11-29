import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route, Link} from "react-router-dom";
import Main from "./pages/Main/Main";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/Authentication" element={<Authentication />} />

        </Routes>
    </div>
  );
}

export default App;
