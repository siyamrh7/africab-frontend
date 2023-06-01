import Header from "../components/Header";
import HotTopicsContainer from "../components/HotTopicsContainer";
import NewsTextareas from "../components/NewsTextareas";
import "./NewsLetter.css";
import ReadySection from "../components/ReadySection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NewsGetAction } from "../redux/actions/NewsActions";

const NewsLetter = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(NewsGetAction())
  },[])
  return (
    <div className="news-letter">
      <HotTopicsContainer />
      <NewsTextareas />
    </div>
  );
};

export default NewsLetter;
