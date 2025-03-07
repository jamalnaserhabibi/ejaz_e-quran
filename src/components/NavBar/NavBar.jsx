import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import logo from '../../assets/Golden.png';

export default function NavBar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hidenav, sethidenav] = useState("navbar");
  const [dropdownOpen1, setDropdownOpen1] = useState(false); // State for first dropdown
  const [dropdownOpen2, setDropdownOpen2] = useState(false); // State for second dropdown

  const scrollTop = () => {
    if (window.scrollY >= 20) {
      sethidenav("navbarhide");
    } else {
      sethidenav("navbar");
    }
  };

  window.addEventListener("scroll", scrollTop);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const navmainClass = location.pathname !== "/" ? "nav_main nav_main_color" : "nav_main";

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path || location.search.includes(path.split("?")[1]);
  };

  return (
    <div className={navmainClass}>
      <Navbar expanded={isOpen} expand="lg" className={`${hidenav} ${isOpen ? "navbar-opened" : ""}`} >
        <Container>
          <Navbar.Brand className="navLogo" href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="navButton ms-auto">
              <span style={{ height: "20px" }} className="space"></span>
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleNavLinkClick}
                className={isActive("/") ? "active" : ""}
              >
                {t("home")}
              </Nav.Link>
              <span className="line">|</span>

              {/* First NavDropdown for "topics" */}
              <NavDropdown
                title={t("topics")}
                id="basic-nav-dropdown-1" // Unique ID for the first dropdown
                show={dropdownOpen1} // Control visibility for the first dropdown
                onMouseEnter={() => setDropdownOpen1(true)} // Open on hover
                onMouseLeave={() => setDropdownOpen1(false)} // Close on hover out
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=tafsirQuranBelQuran"
                  className={isActive("/taqrirList?identifier=tafsirQuranBelQuran") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("tafsirquran")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=halmoamaHaiQuran"
                  className={isActive("/taqrirList?identifier=halmoamaHaiQuran") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("halmoama")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=mesdaqHadith"
                  className={isActive("/taqrirList?identifier=mesdaqHadith") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("mesdaq")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=DrosWaSokhanraniHa"
                  className={isActive("/taqrirList?identifier=DrosWaSokhanraniHa") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("dros")}
                </NavDropdown.Item>
              </NavDropdown>

              <span className="line">|</span>

              {/* Second NavDropdown for "topics" */}
              <NavDropdown
                title={t("about")}
                id="basic-nav-dropdown-2" // Unique ID for the second dropdown
                show={dropdownOpen2} // Control visibility for the second dropdown
                onMouseEnter={() => setDropdownOpen2(true)} // Open on hover
                onMouseLeave={() => setDropdownOpen2(false)} // Close on hover out
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=tafsirQuranBelQuran"
                  className={isActive("/taqrirList?identifier=tafsirQuranBelQuran") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("whoWeAre")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=halmoamaHaiQuran"
                  className={isActive("/taqrirList?identifier=halmoamaHaiQuran") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("establish")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=mesdaqHadith"
                  className={isActive("/taqrirList?identifier=mesdaqHadith") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("Mission&Vission")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=DrosWaSokhanraniHa"
                  className={isActive("/taqrirList?identifier=DrosWaSokhanraniHa") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("values")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=DrosWaSokhanraniHa"
                  className={isActive("/taqrirList?identifier=DrosWaSokhanraniHa") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("ozoEmtiyaz")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/taqrirList?identifier=DrosWaSokhanraniHa"
                  className={isActive("/taqrirList?identifier=DrosWaSokhanraniHa") ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  {t("invite")}
                </NavDropdown.Item>
              </NavDropdown>

              
              <span className="line">|</span>

              <HashLink
  to="/#hadithroz"
  smooth
  onClick={handleNavLinkClick}
  className={`nav-link ${isActive("/taqrirList?identifier=about") ? "active" : ""}`}
>
  
  مصداق حدیث شریف
</HashLink>
<span className="line">|</span>
              <HashLink
  to="/#mainBooks"
  smooth
  onClick={handleNavLinkClick}
  className={`nav-link ${isActive("/taqrirList?identifier=about") ? "active" : ""}`}
>
کتاب ها و رساله ها
</HashLink>

              
              <span className="line">|</span>
              <Nav.Link
                as={Link}
                to="/taqrirList?identifier=about"
                onClick={handleNavLinkClick}
                className={isActive("/taqrirList?identifier=about") ? "active" : ""}
              >
                پرسش و پاسخ
              </Nav.Link>
              <span className="line">|</span>
             

              <div className="lang">
                <GrLanguage style={{ color: "white", fontSize: "20px" }} />
                <select onChange={(e) => changeLang(e.target.value)} defaultValue="dari">
                  <option value="da"> دری </option>
                  <option value="ps"> پشتو </option>
                  <option value="ar"> العربية </option>
                  <option value="ur"> اردو </option>
                </select>
              </div>
              <span style={{ height: "40px" }} className="space"></span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}