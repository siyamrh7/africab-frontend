import { useState } from "react";

import "./TalentConnectorContainer.css";
import { useSelector } from "react-redux";
import TalentCard2 from "./TalentCard2";
import DetailsMainCon2 from "./DetailsMainCon2";
const Newsviewcon = () => {
  const [view,setView]=useState("About")
  const viewHandler=(arg)=>{
    setView(arg)
  }
  const {post}=useSelector(state=>state.PostsReducers)
  if(!post) return null
  return (
    <div className="group-div">
       <TalentCard2
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
   
      
       <DetailsMainCon2 post={post}/>
    
    </div>
  );
};

export default Newsviewcon;
