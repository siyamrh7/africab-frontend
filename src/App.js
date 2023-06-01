import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import ChatBox from "./pages/ChatBox";
import Singin from "./pages/Singin";
import Singup from "./pages/Singup";
import NewsLetter from "./pages/NewsLetter";
import Details1 from "./pages/Details1";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import CreatePost from "./pages/CreatePost";
import Header from "./components/Header";
import ReadySection from "./components/ReadySection";
import CreateNews from "./pages/CreateNews";
import Newsview from "./pages/Newsview";
import Subscription from "./pages/Subscription";

import Prelaunch from "./PreLaunch";
import SellerSignup from "./pages/Seller/SellerSignup";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/chat-box":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/news-letter":
        title = "";
        metaDescription = "";
        break;
      case "/details1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  const [state, setState] = useState(null)
  useEffect(() => {
    var countDownDate = new Date("jun 30, 2023 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      setState(days + "D " + hours + "H "
      + minutes + "M " + seconds + "S ");
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        setState("EXPIRED");
      }
    }, 1000);
    
    
  }, [])
  return (
    <>
      <marquee  scrollamount="15" className="marque">  This site is under development, Will be launched in {state} <Link to={"/comming"}>Click here to learn more about the app.</Link> </marquee>

      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />

        <Route path="/community" element={<Community />} />

        <Route path="/chat-box" element={<ChatBox />} />

        <Route path="/signin" element={<Singin />} />

        <Route path="/signup" element={<Singup />} />

        <Route path="/comming" element={<Prelaunch />} />

        <Route path="/news-letter" element={<NewsLetter />} />
        {/* <Route path="/news-letter/:id" element={<Newsview />} /> */}

        <Route path="/details/:id" element={<Details1 />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/createnews" element={<CreateNews />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/sellersignup" element={<SellerSignup />} />

      </Routes>
      <ReadySection />
    </>
  );
}
export default App;
