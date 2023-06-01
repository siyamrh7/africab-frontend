import { useSelector } from "react-redux";
import "./ReadySection.css";

const ReadySection = () => {
  const { language} = useSelector(state => state.AuthReducers)

  return (
    <div className="background-group">
      <div className="background1" />
      <div className="subscribe-newsletter-group">
        <div className="subscribe-newsletter1">{language.subscribe} {language.newsletter}</div>
        <div className="text-field1">
          <input className="rectangle2" type="text" placeholder="Enter your email" />
          {/* <input
            className="enter-your-email1"
            type="text"
            placeholder="Enter your email"
          /> */}
          <button className="subscribbe-now1">
            <button className="rectangle3" >{language.subscribe}</button>
          </button>
        </div>
      </div>
      <div className="footer-ui-con">

      <div className="footer-ui">
        <img className="footer-ui-child" alt="" src="../group-41.svg" />
        <img className="image-icon" alt="" src="../image@2x.png" />
        <img className="social-icon" alt="" src="../social.svg" />
        <div className="apcom-all-ri">{`© 2023 Africab Networking. All Rights Reserved. `}</div>
        <div className="ready-to-get2">{language.ready}</div>
        <button className="kickstart-your-future">
        {language.kick}
        </button>
      <img className="frame-child30" alt="" src="../rectangle-11@2x.png" />
      </div>
      </div>
   
    </div>
  );
};

export default ReadySection;
