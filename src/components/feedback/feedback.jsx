import "./feedback.css";
import "aos/dist/aos.css";
import flower from "../../assets/bgflowe.png";

import { TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import Aos from "aos";

Aos.init();

export default function Feedback() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("لطفاً ثابت کنید که ربات نیستید.");
      return;
    }

    console.log("Form Submitted:");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Add:", formData.Add);
    console.log("Message:", formData.message);
    console.log("Captcha Token:", captchaToken);

    alert("تشکر از پیام تان!");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
    setCaptchaToken(null);
  };

  return (
    <div className="mainFeedback">
      <h1 data-aos="fade-up">نظریات شما</h1>

      <div className="flowerdiv">
        <img data-aos="fade-right" className="flowerimg" src={flower} alt="bg" />
      </div>

      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="name"
            value={formData.name}
            onChange={handleChange}
            label="نام کامل"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{ sx: { textAlign: "right", right: 0 } }}
            inputProps={{ style: { textAlign: "right" } }}
          />

          <TextField
            required
            id="email"
            value={formData.email}
            onChange={handleChange}
            label="ایمیل"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{ sx: { textAlign: "right", right: 0 } }}
            inputProps={{ style: { textAlign: "right" } }}
          />
          <TextField
            required
            id="add"
            value={formData.add}
            onChange={handleChange}
            label="آدرس"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{ sx: { textAlign: "right", right: 0 } }}
            inputProps={{ style: { textAlign: "right" } }}
          />

          <TextField
            required
            id="message"
            value={formData.message}
            onChange={handleChange}
            label="پیام"
            variant="standard"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            InputLabelProps={{ sx: { textAlign: "right", right: 0 } }}
            inputProps={{ style: { textAlign: "right" } }}
          />

          {/* reCAPTCHA checkbox */}
          <div style={{ margin: "",position:'absolute',left:'10%', direction: "ltr" }}>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              hl="fa"
            />
          </div>

          <button type="submit" disabled={!captchaToken}>
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}
