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
import { Link } from 'react-router-dom';

AOS.init();
export default function App() {
    const books = 
    [
      { 
        id: 1, 
        title: "عقیده طحاوی",
        // bimage: aqida,
        write: "محمد بن حسن طحاوی",
        publish: "ناشر",
        year: "سال انتشار",
        size: "سایز کتاب",
        content: " محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی",
        numberofvol:1,
        vol:1,
      },
      { 
        id: 2, 
        title: "هزار حدیث",
        // bimage: hazarhadith,
        write: "...",
        publish: "احمد",
        year: "1401",
        size: "2.3 MB",
        content: " محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث",
        numberofvol:1,
        vol:1,
      },
      { 
        id: 3, 
        title: "دلایل خیرات",
        // bimage: dalayel,
        write: "...",
        publish: "احمد",
        year: "1401",
        size: "1.3 MB",
        content: " محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات",
        numberofvol:1,
        vol:1,
      },
      { 
        id: 4, 
        title: "تفسیر کابلی",
        // bimage: tafsir,
        write: "...",
        publish: "احمد",
        year: "1401",
        size: "4.3 MB",
        content: " محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتاب تفسیر کابلی",
        numberofvol:3,
        vol:1,
      },
      { 
        id: 5, 
        title: "زیور بهشتی",
        // bimage: ziwar,
        write: "...",
        publish: "احمد",
        year: "1401",
        size: "5.3 MB",
        content: " محتویات در مورد کتاب  زیور بهشتی محتویات در مورد کتاب زیور بهشتی محتویات در مورد کتاب زیور بهشتی محتویات در مورد کتاب  زیور بهشتی",
        numberofvol:4,
        vol:1,
      },
    ];
  
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
  href="https://t.me/Shirshahshahed"
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
    href="mailto:shirshahshahed@gmail.com"
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
          سایت اعجاز القران با راه اندازی مباحث علمی نایاب و بی پیشنه در پرتو تفسير قرآن با قرآن و تفسیر قرآن با حدیث در پی اصلاح عقائد و اعمال، توحید امت و بالا بردن سطح دانش نوع انسان بخصوص امت مسلمه در قرآن و اسلام است. 
از ویژگی های سایت اعجاز القران است که مسائل را بطور واقع بینانه، بدون تبعیض و با تحقیق و تدقیق بیان می‌کند. 
وب سایت اعجاز القرآن به اضافه به بیان عبارات قرآنی و توضیح عجائ .ب ان، می‌کوشد تا پرده از رموز، اسرار و علوم لدنی ایات، کلمات و حروف آن بردارد.
          </p>
        </section>

        <section data-aos="fade-up" className="links">
          <MDBRow className="footerCards mobile-two-column">
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
            <div className="first">
              <h5 className="text-uppercase  section_titles_footer">زبان ها</h5>
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
  <h5 className="text-uppercase section_titles_footer">کتاب ها</h5>
  {books.slice(0, 4).map((book) => (
    <p key={book.id}>
      <a
        href={`/bookdownload?bookid=${book.id}&booktitle=${book.title}&write=${book.write}&publish=${book.publish}&year=${book.year}&size=${book.size}&content=${book.content}&numberofvol=${book.numberofvol}&vol=${book.vol}`}
        className="text-white"
      >
        {book.title}
      </a>
    </p>
  ))}
</div>
            
            </MDBCol>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
           <div className="third">

              <h5 className="text-uppercase section_titles_footer">موضوعات</h5>

                <p>
                 <Link style={{textDecoration:'none', color:'white'}} to="to=/taqrirList?identifier=tafsirQuranBelQuran">
                 تفسیرالقرآن بالقرآن والحدیث
                 </Link>
                </p>
                <p>
                  <a className="text-white">حل معمای قرآن</a>
                </p>
                <p>
                  <a className="text-white">مصداق احادیث</a>
                </p>
                <p>
                  <a className="text-white">دروس و سخنرانی ها</a>
                </p>
              </div>

            </MDBCol>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
           <div className="fourth">
           <h5 className="text-uppercase section_titles_footer">ارتباطات</h5>
              <p>
                <MDBIcon icon="home" className="me-3" />
               {" "} ناحیه هفتم شهر کابل افغانستان 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               {" "} info@ejazquran.com 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
             {" "} +93786351344 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
              {" "}+93793923333 
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
