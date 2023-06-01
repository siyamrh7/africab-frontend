import TalentConnectorContainer from "../components/TalentConnectorContainer";
import "./Details1.css";
import Header from "../components/Header";
import ReadySection from "../components/ReadySection";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SinglePostAction } from "../redux/actions/PostActions";

const Details1 = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(SinglePostAction(id))
  },[id])
  return (
    <div className="details1">
      <TalentConnectorContainer />
   
    </div>
  );
};

export default Details1;
