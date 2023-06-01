import React from "react";
import Timer from "./components/Countdown/Timer";

import './app.css';

function Prelaunch() {
    return (
        <div className="Appp">
            <div className="containerp">
                <video className="videoPre" width="100%" height="auto" id="video" controls autoplay>
                    <source src="../africabadvertisement.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className="h1p">
                    Africab Networking
                    <br />
                    Coming Soon
                </h1>
                <Timer />
                {/* <Optin />
                <Preloader /> */}
            </div>
        </div>
    );
}
export default Prelaunch