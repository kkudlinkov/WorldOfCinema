import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Authentication from "./pages/Authentication/Authentication";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Authentication" element={<Authentication />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
