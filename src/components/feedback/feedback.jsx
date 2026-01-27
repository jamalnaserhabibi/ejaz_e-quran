import "./feedback.css";
import "aos/dist/aos.css";
import 'react-toastify/ReactToastify.css';
import flower from "../../assets/bgflowe.png";
import axios from 'axios';
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
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
  const [error, setError] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA v3
  useEffect(() => {
    const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    
    if (!sitekey) {
      console.error('reCAPTCHA site key not found');
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
     
      setRecaptchaLoaded(true);
      
      // Initialize
      window.grecaptcha.ready(() => {
       
      });
    };
    
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA');
      toast.error('خطا در بارگذاری سیستم امنیتی', {
        position: "top-right",
        rtl: true,
      });
    };
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaLoaded) {
      toast.error("سیستم امنیتی بارگذاری نشده است.", {
        position: "top-right",
        rtl: true,
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get reCAPTCHA v3 token
      const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
      let token = null;
      
      if (window.grecaptcha) {
        token = await window.grecaptcha.execute(sitekey, { action: 'submit' });
        console.log('reCAPTCHA token obtained:', token);
        setCaptchaToken(token);
      }

      const apiData = {
        full_name: formData.name,
        email: formData.email,
        address: formData.add,
        message: formData.message,
        recaptcha_token: token
      };

      console.log('Sending data with token:', token ? 'Present' : 'Missing');

      const response = await axios.post('https://ejazquran.space/api/v1/comments', apiData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 10000
      });

      console.log('Response:', response.status, response.data);

      if (response.status === 201) {
        setFormData({ name: "", email: "", add: "", message: "" });
        setCaptchaToken(null);
        
        toast.success("پیام شما با موفقیت ارسال شد!", {
          position: "top-right",
          rtl: true,
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      
      let errorMessage = 'خطایی رخ داده است';
      
      if (err.response) {
        console.error('Error response:', err.response.status, err.response.data);
        
        if (err.response.status === 401) {
          errorMessage = 'خطای تأیید امنیتی. کلید reCAPTCHA معتبر نیست یا دامنه ثبت نشده است.';
        } else if (err.response.status === 422) {
          const errors = err.response.data.errors;
          errorMessage = Object.values(errors).flat().join('\n');
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err.request) {
        errorMessage = 'اتصال به سرور برقرار نشد';
      }
      
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        rtl: true,
      });
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
      
      <h1 data-aos="fade-up" className="feedbacks_questions">سوالات و نظریات شما</h1>

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

          {/* reCAPTCHA v3 is invisible - no UI element needed */}
          <div style={{ margin: "20px 0", textAlign: "center" }}>
            {/* <div style={{ 
              color: '#666', 
              fontSize: '0.875rem',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px'
            }}>
              <i className="fas fa-shield-alt" style={{ marginLeft: '8px' }}></i>
              این فرم توسط reCAPTCHA محافظت می‌شود
            </div> */}
            
            {!recaptchaLoaded && (
              <div style={{ color: '#ff9800', fontSize: '0.875rem', marginTop: '8px' }}>
                در حال بارگذاری سیستم امنیتی...
              </div>
            )}
          </div>

          {error && (
            <div className="error-message" style={{ 
              backgroundColor: '#ffebee', 
              color: '#c62828',
              padding: '10px',
              borderRadius: '4px',
              margin: '10px 0'
            }}>
              {error.split('\n').map((line, i) => (
                <p key={i} style={{ margin: '5px 0' }}>{line}</p>
              ))}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              // marginTop: '20px',
              // padding: '12px 40px',
              backgroundColor: loading ? '#cccccc' : '#9a6121',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width:'200px'
            }}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin" style={{ marginLeft: '8px' }}></i>
                در حال ارسال...
              </>
            ) : (
              <>
                <i className="" style={{ marginLeft: '8px' }}></i>
                ارسال پیام
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}