import './toTop.css'
import { useState } from 'react';
import { IoMdArrowUp } from "react-icons/io";

export default function ToTop(){
  const [moveBtn, setMoveBtn] = useState("totop activeToTop");

    const scrollTop = () => {
         if (window.scrollY >= 20) {
            setMoveBtn("totop");
        } else {
      setMoveBtn("totop activeToTop");
    
        }
      };
      window.addEventListener("scroll", scrollTop);
   
      return(
        <div className={moveBtn}>
        <a href="#">
          <IoMdArrowUp className="icon" />
        </a>
      </div>
      )
}