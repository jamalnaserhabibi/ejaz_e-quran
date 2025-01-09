import NavBar from "./components/NavBar/NavBar";
import FirstLoad from "./components/firstload";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/scrolltop";
// import Quran from "./components/Quran/Quran";
import TaqrirList from "./components/taqrirList/taqrirList";
import TaqrirView from "./components/taqrirView/taqrirView";
import Bookdownload from "./components/bookdownload/bookdownload";
import Footer from "./components/footer/footer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstLoad />} />
          {/* <Route path="/quran" element={<Quran />} /> */}
          <Route path="/taqrirList" element={<TaqrirList />} />
          <Route path="/taqrirView" element={<TaqrirView />} />
          <Route path="/bookdownload" element={<Bookdownload />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
