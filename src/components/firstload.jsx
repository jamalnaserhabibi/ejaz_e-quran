import Home from "./Home/Home";
import Hadithroz from "./hadithroz/hadithroz";
import Topics_card from "./topics_card/topics_card";
import Books from "./‌books/books";
import Feedback from "./feedback/feedback";
// import Sampl from "./sampl";
// import Carts from "./carts/carts";
export default function FirstLoads() {
  return (
    <>
      <Home />
      <Topics_card/>
      <Hadithroz/>
      <Books/>
      <Feedback/>
      {/* <Sampl/> */}
      {/* <Carts/> */}
      {/* <Taqrir/> */}
    </>
  );
}
