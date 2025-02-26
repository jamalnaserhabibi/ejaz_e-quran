import "./taqrirView.css";
import { useLocation } from "react-router-dom";
import First from "../files/first";
import Second from "../files/second";
export default function TaqrirView() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("index") || "Default Title";
  const itemtitle = queryParams.get("itemtitle") || "Default Title";
  const from = queryParams.get("from") || "Default Title";

  return (
    <div className="taqrirView">
      <div className="main"></div>
      <h3 className="titleOfTaqrir">
        {/* {index}
        -
        {from} */}
        {itemtitle}
      </h3>
      <div className="content">
        {/* {index} */}
        {/* - */}
        {/* {from} */}
        <p>
        {index==1 ? 
       
       <Second />
        :
      <First />
        }
        </p>
        {/* <div className="info">
          <h3>کابل</h3>
          <h3>سال 1403</h3>
          <h3>مدرسه تعلیم قرآن و حدیث شریف</h3>
        </div> */}
      </div>
    </div>
  );
}
