import "./feedback.css";
import "aos/dist/aos.css";
 
import 'react-toastify/ReactToastify.css';

import flower from "../../assets/bgflowe.png";
import axios from 'axios';
import { TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import Aos from "aos";
import { ToastContainer, toast } from 'react-toastify';

Aos.init();

export default function Feedback() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    add: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("لطفاً ثابت کنید که ربات نیستید.", {
        position: "top-right",
        rtl: true,
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiData = {
        full_name: formData.name,
        email: formData.email,
        address: formData.add,
        message: formData.message,
        recaptcha_token: captchaToken
      };

      const response = await axios.post('https://ejazquran.space/api/v1/comments', apiData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.status === 201) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", add: "", message: "" });
        setCaptchaToken(null);
        
        toast.success("پیام شما با موفقیت ارسال شد!", {
          position: "top-right",
          rtl: true,
        });
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 422) {
          const errors = err.response.data.errors;
          const errorMessage = Object.values(errors).flat().join('\n');
          setError(errorMessage);
          toast.error("لطفاً اطلاعات را به درستی وارد کنید", {
            position: "top-right",
            rtl: true,
          });
        } else {
          const errorMsg = err.response.data.message || 'خطایی رخ داده است';
          setError(errorMsg);
          toast.error(errorMsg, {
            position: "top-right",
            rtl: true,
          });
        }
      } else {
        setError('اتصال به سرور برقرار نشد');
        toast.error('اتصال به سرور برقرار نشد', {
          position: "top-right",
          rtl: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mainFeedback">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <h1 data-aos="fade-up">سوالات و نظریات شما</h1>

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

            <div style={{ margin: "", position: 'absolute', left: '10%', direction: "ltr" }}>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                hl="fa"
              />
            </div>

            {error && (
              <div className="error-message">
                {error.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}

            <button type="submit" disabled={!captchaToken || loading}>
              {loading ? 'در حال ارسال...' : 'ارسال'}
            </button>
          </form>
      </div>
    </div>
  );
}