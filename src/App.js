import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Authentication from "./pages/Authentication/Authentication";
import Footer from "./components/Footer/Footer";
import FeedBack from "./pages/FeedBack/FeedBack";
import Home from "./pages/Home/Home";
import Genre from "./pages/Genre/Genre";
import History from "./pages/History/History";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/Authentication" element={<Authentication />} />
            <Route path="/feedback" element={<FeedBack/>}/>
            <Route path="/genre" element={<Genre/>}/>
            <Route path="/history" element={<History/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
