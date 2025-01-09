// import React from 'react';
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBTooltip
} from "mdb-react-ui-kit";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function App() {
  return (
    <MDBFooter  className="footerClass text-center">
      <MDBContainer className="p-4">
      <section data-aos="fade-up" className="mb-4">
  <MDBTooltip tag="span" title="Facebook" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href=""
      noRipple
    >
      <MDBIcon fab icon="facebook-f" />
    </MDBBtn>
  </MDBTooltip>
  <MDBTooltip tag="span" title="Youtube" placement="top">
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
  </MDBTooltip>

  <MDBTooltip tag="span" title="Twitter" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href="#!"
      noRipple
    >
      <MDBIcon fab icon="x" />
    </MDBBtn>
  </MDBTooltip>

  <MDBTooltip tag="span" title="Instagram" placement="top">
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
  </MDBTooltip>

  <MDBTooltip tag="span" title="Telegram" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href="#!"
      noRipple
    >
      <MDBIcon fab icon="telegram" />
    </MDBBtn>
  </MDBTooltip>

  <MDBTooltip tag="span" title="WhatsApp" placement="top">
    <MDBBtn
      outline
      color="light"
      floating
      className="m-1"
      href="#!"
      noRipple
    >
      <MDBIcon fab icon="whatsapp" />
    </MDBBtn>
  </MDBTooltip>
</section>


        <section data-aos="fade-up" className="mb-4">
          <p>
            هدف ما حل معما های قرآنی تفسیر قرآن بالقرآن به زبان های دری انگلیسی
            پشتو و عربی میباشد که به منظور هدایت امت و هدف ما حل معما های قرآنی
            تفسیر قرآن بالقرآن به زبان های دری انگلیسی پشتو و عربی میباشد که به
            منظور هدایت امت و هدف ما حل معما های قرآنی تفسیر قرآن بالقرآن به
            زبان های دری انگلیسی پشتو و عربی میباشد که به منظور هدایت امت و
          </p>
        </section>

        <section data-aos="fade-up" className="links">
          <MDBRow className="footerCards mobile-two-column">
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
            <div className="first">
              <h5 className="text-uppercase">زبان ها</h5>
              <p>
                <a href="#!" className="text-white">
                  دری
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                العربية
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  اردو
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  انگلیسی
                </a>
              </p>
            </div>
            </MDBCol>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
            <div className="second">


              <h5 className="text-uppercase">کتاب ها</h5>

              <p>
                <a href="#!" className="text-white">
                  کتاب اول
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  کتاب دوم
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  کتاب سوم
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  کتاب چهارم
                </a>
              </p>
            </div>
            </MDBCol>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
           <div className="third">

              <h5 className="text-uppercase">موضوعات</h5>

                <p>
                  <a className="text-white">تفسیر قرآن</a>
                </p>
                <p>
                  <a className="text-white">حل معمای قرآن</a>
                </p>
                <p>
                  <a className="text-white">مصداق احادیث</a>
                </p>
                <p>
                  <a className="text-white">احادیث بی اساس</a>
                </p>
              </div>

            </MDBCol>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
           <div className="fourth">
           <h5 className="text-uppercase">ارتباطات</h5>
              <p>
                <MDBIcon icon="home" className="me-3" />
               {" "} کابل افغانستان 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               {" "} shaheed@ejaz.com 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
             {" "} 9379933333 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
              {" "}9379933333 
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
        <span>© 2025 Copyright:</span>{" "}
        <a style={{ textDecoration: "none" }} className="text-white" href="/">
          Ejaz-e-Quran
        </a>
      </div>
    </MDBFooter>
  );
}
