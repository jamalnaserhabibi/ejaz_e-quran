// import React from 'react';
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBTooltip,
} from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();
export default function App() {
  

  return (
    <MDBFooter className="footerClass text-center">
      <MDBContainer className="p-4">
        <section data-aos="fade-up" className="mb-4">
          <MDBTooltip tag="span" title="Facebook" placement="top">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/profile.php?id=100064492818281&mibextid=ZbWKwL"
              noRipple
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </MDBTooltip>
          {/* <MDBTooltip tag="span" title="Youtube" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href=""
      noRipple
    >
      <MDBIcon fab icon="youtube" />
    </MDBBtn>
  </MDBTooltip> */}

          <MDBTooltip tag="span" title="X (Twitter)" placement="top">
  <MDBBtn
    outline
    color="light"
    floating
    className="m-1"
    href="https://twitter.com/@ejazulquran"
    target="_blank"
    rel="noopener noreferrer"
    noRipple
  >
    <MDBIcon fab icon="x" />
  </MDBBtn>
</MDBTooltip>


          {/* <MDBTooltip tag="span" title="Instagram" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href="#!"
      noRipple
    >
      <MDBIcon fab icon="instagram" />
    </MDBBtn>
  </MDBTooltip> */}

          <MDBTooltip tag="span" title="Telegram" placement="top">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://t.me/ejazualquran"
              noRipple
            >
              <MDBIcon fab icon="telegram" />
            </MDBBtn>
          </MDBTooltip>
          <MDBTooltip tag="span" title="Email" placement="top">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="mailto:ejazu.alquran@gmail.com"
              noRipple
            >
              <MDBIcon icon="envelope" />
            </MDBBtn>
          </MDBTooltip>
          <MDBTooltip tag="span" title="WhatsApp" placement="top">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://wa.me/+93786351344"
              noRipple
            >
              <MDBIcon fab icon="whatsapp" />
            </MDBBtn>
          </MDBTooltip>
        </section>

        <section data-aos="fade-up" className="mb-4 footer_paragraph">
          <p>
            سایت اعجاز القران با راه اندازی مباحث علمی نایاب و بی پیشنه در پرتو
            تفسير قرآن با قرآن و تفسیر قرآن با حدیث در پی اصلاح عقائد و اعمال،
            توحید امت و بالا بردن سطح دانش نوع انسان بخصوص امت مسلمه در قرآن و
            اسلام است. از ویژگی های سایت اعجاز القران است که مسائل را بطور واقع
            بینانه، بدون تبعیض و با تحقیق و تدقیق بیان می‌کند. وب سایت اعجاز
            القرآن به اضافه به بیان عبارات قرآنی به توضیح عجائب آن نیز می‌کوشد تا
           پرده از رموز، اسرار و علوم لدنی آیات، کلمات و حروف آن بردارد.
          </p>
        </section>

     <section data-aos="fade-up" className="links">
  <MDBRow className="footerCards mobile-two-column">
    <MDBCol lg="6" md="6" sm="12" className="mb-4 mb-md-0">
      <div className="third">
        <h5 className="text-uppercase section_titles_footer">
          موضوعات
        </h5>
        <p>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/taqrirList?identifier=tafsirQuranBelQuran"
           
          >
            تفسیرالقرآن بالقرآن والحدیث
          </Link>
        </p>
        <p>
           <Link
            style={{ textDecoration: "none", color: "white" }}
          to="comming"
          >
          حل معما های قرآنکریم
          </Link>
       
        </p>
        <p>
             <Link
            style={{ textDecoration: "none", color: "white" }}
          to="comming"
          >مصداق احادیث
          </Link>
        </p>
        <p>
         <Link
            style={{ textDecoration: "none", color: "white" }}
          to="comming"
          >دروس و سخنرانی ها
          </Link>
        </p>
      </div>
    </MDBCol>
    <MDBCol lg="6" md="6" sm="12" className="mb-4 mb-md-0">
      <div className="fourth">
        <h5 className="text-uppercase section_titles_footer">
          ارتباطات
        </h5>
        <p>
          <MDBIcon icon="home" className="me-3" /> ناحیه هفتم شهر کابل
          افغانستان
        </p>
        <p>
          <MDBIcon icon="envelope" className="me-3" />{" "}
          info@ejazquran.com
        </p>
        <p>
          <MDBIcon icon="phone" className="me-3" /> 93786351344+
        </p>
        <p>
          <MDBIcon icon="phone" className="me-3" /> 93793923333+
        </p>
      </div>
    </MDBCol>
  </MDBRow>
</section>

        
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <span>© 2026 Copyright:</span>{" "}
        <a style={{ textDecoration: "none" }} className="text-white" href="/">
          Ejaz-e-Quran
        </a>
      </div>
    </MDBFooter>
  );
}
