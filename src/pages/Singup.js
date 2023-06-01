import CreateAccountContainer from "../components/CreateAccountContainer";
import "./Singin.css";
import Header from '../components/Header'

const Singup = () => {
  return (
    <div className="singin">
      <div className="singin-main">
        <div className="signin-left">

          <div className="ready-to-get-started-parent">
            <b className="ready-to-get">Africab Networking</b>
            <img className="group-child" alt="" src="../group-3.svg" />
           

           
          </div>
          <div className="bridging-the-gap">
            Bridging the gap in the black community
          </div>
        </div>
        <div className="signin-right">
          <CreateAccountContainer />


        </div>
      </div>
    </div>
  );
};

export default Singup;
