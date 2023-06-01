import { useState } from "react";

import TalentCard from "../components/TalentCard";
import "./TalentConnectorContainer.css";
import DetailsMainCon from "./DetailsMainCon";
import DetailsMapCon from "./DetailsMapCon";
import { useSelector } from "react-redux";
const TalentConnectorContainer = () => {
  const [view,setView]=useState("About")
  const viewHandler=(arg)=>{
    setView(arg)
  }
  const {post}=useSelector(state=>state.PostsReducers)
  if(!post) return null
  return (
    <div className="group-div">
       <TalentCard
       post={post}
        iconImageUrl="../rectangle-54@2x.png"
        socialMediaImageUrl="../icon9.svg"
        iconImageUrls="../icon10.svg"
        iconImageUrls2="../icon11.svg"
        iconImageUrls6to12="../icon12.svg"
        iconImageUrls7to13="../icon13.svg"
        socialMediaImageUrls="../social-media3.svg"
        socialMediaImageUrls1to4="../social-media4.svg"
        socialMediaImageUrls5and2="../social-media5.svg"
      />
      <div className="frame-parent23">
        <button className={view == "About" ? "about-group" : "location-container"} onClick={()=>viewHandler("About")}>
          <div className={view == "About" ? "about1" : "competitive-salary"}>About</div>
          <div className={view == "About" ? "frame-child37" : "frame-child39"} />
        </button>
        <button className={view == "Location" ? "about-group" : "location-container"} onClick={()=>viewHandler("Location")}>
          <div className={view == "Location" ? "about1" : "competitive-salary"}>Location</div>
          <div className={view == "Location" ? "frame-child37" : "frame-child39"} />
        </button>
       
      </div>
     { view == "About" ? (
       <DetailsMainCon post={post}/>
     ) : (
       <DetailsMapCon post={post}/>

     )
     }
    </div>
  );
};

export default TalentConnectorContainer;
