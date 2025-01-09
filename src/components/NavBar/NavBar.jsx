import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hidenav, sethidenav] = useState("navbar");

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

  return (
    <div className={navmainClass}>
      <Navbar expanded={isOpen} expand="lg" className={hidenav}>
        <Container>
          <Navbar.Brand className="navLogo" href="#home">
            LOGO
          </Navbar.Brand>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="navButton ms-auto">
              <span style={{ height: "20px" }} className="space"></span>
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleNavLinkClick}
              >
                {t("home")}
              </Nav.Link>
              <span className="line">|</span>
              <Nav.Link
                as={Link}
                to="/taqrirList?identifier=tafsirQuranBelQuran"
                onClick={handleNavLinkClick}
              >
                {t("tafsirquran")}
              </Nav.Link>
              <span className="line">|</span>
              <Nav.Link
                as={Link}
                to="/taqrirList?identifier=halmoamaHaiQuran"
                onClick={handleNavLinkClick}
              >
                {t("halmoama")}
              </Nav.Link>
              <span className="line">|</span>
              <Nav.Link
                as={Link}
                to="/taqrirList?identifier=mesdaqHadith"
                onClick={handleNavLinkClick}
              >
                {t("mesdaq")}
              </Nav.Link>
              <span className="line">|</span>
              <Nav.Link
                as={Link}
                to="/taqrirList?identifier=DrosWaSokhanraniHa"
                onClick={handleNavLinkClick}
              >
                {t("dros")}
              </Nav.Link>

              <div className="lang">
                <GrLanguage style={{ color: "white", marginRight: "30px", fontSize: "20px" }} />
                <select onChange={(e) => changeLang(e.target.value)} defaultValue="dari">
                  <option value="da">دری</option>
                  <option value="ps">پشتو</option>
                  <option value="ar">العربية</option>
                  <option value="ur">اردو</option>
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
