// App.jsx
import NavBar from "./components/NavBar/NavBar";
import FirstLoad from "./components/firstload";
import '@fortawesome/fontawesome-free/css/all.min.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/scrolltop";
import TaqrirList from "./components/taqrirList/taqrirList";
import Comming from "./components/comming_sooon/comming";
import TaqrirView from "./components/taqrirView/taqrirView";
import Bookdownload from "./components/bookdownload/bookdownload";
import Footer from "./components/footer/footer";
import Who_we_are from "./components/about_us/who_we_are";
import Mission_Vission from "./components/about_us/mission_vission";
import Pishina_tasis from "./components/about_us/pishina_tasis";
import Values from "./components/about_us/values";
import Wojoh_emtiyaz from "./components/about_us/wojoi_emtyaz";
import Invite_to_action from "./components/about_us/invite_to_action";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "./components/about_us/AboutSection";

export default function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<FirstLoad />} />
        <Route path="/taqrirList" element={<TaqrirList />} />
      <Route path="/about/:id" element={<AboutSection />} />
        
       <Route path="/taqrir/:categoryId/:itemId" element={<TaqrirView />} />


        <Route path="/who_we_are" element={<Who_we_are />} />
        <Route path="/pishina_Tasis" element={<Pishina_tasis />} />
        <Route path="/mission_Vission" element={<Mission_Vission />} />
        <Route path="/wojoh_emtiyaz" element={<Wojoh_emtiyaz />} />
        <Route path="/values" element={<Values />} />
        <Route path="/invite_to_action" element={<Invite_to_action />} />
        <Route path="/bookdownload" element={<Bookdownload />} />
        <Route path="/Comming" element={<Comming />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
