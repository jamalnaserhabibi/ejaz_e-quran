import "./feedback.css";
import 'aos/dist/aos.css';
import flower from "../../assets/bgflowe.png"
import { TextField } from "@mui/material";
import Aos from "aos";
Aos.init();


export default function Feedback() {
  return (
    <div className="mainFeedback">
     
      <h1 data-aos="fade-up">نظریات شما</h1>
      <div  className="flowerdiv"> <img data-aos="fade-right"  className="flowerimg" src={flower} alt="" /></div>
      <div  className="formContainer">
     <form action="" >
          <TextField
            id="name"
              InputLabelProps={{
              sx: { textAlign: 'right', right: 0 }
            }}
            inputProps={{
              style: { textAlign: 'right' }
            }}
            label="نام کامل"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="ایمیل"
            type="email"
            variant="standard"
            InputLabelProps={{
              sx: { textAlign: 'right', right: 0 }
            }}
            inputProps={{
              style: { textAlign: 'right' }
            }}
            // variant="standard"
            fullWidth
            margin="normal"
          />
          <TextField
            id="message"
            label="پیام"
            variant="standard"
            InputLabelProps={{
              sx: { textAlign: 'right', right: 0 }
            }}
            inputProps={{
              style: { textAlign: 'right' }
            }}
            
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
         <button>ارسال</button>
     </form>
      </div>
    </div>
  );
}
