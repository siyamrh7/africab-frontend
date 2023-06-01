import { useMemo } from "react";
import "./NewsContainer.css";
import { useDispatch } from "react-redux";

const NewsContainer = ({ carImageUrl, propTop, propLeft,newt }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);
  const isImage = (path) => {
    return path.endsWith('.gif') ||
           path.endsWith('.jpg') ||
           path.endsWith('.jpeg') ||
           path.endsWith('.png') ||
           path.endsWith('.webp');
  };

  const isVideo = (path) => {
    return path.endsWith('.mp4') ||
           path.endsWith('.webm') ||
           path.endsWith('.mkv') ||
           path.endsWith('.ogg');
  };
  const dispatch=useDispatch()

  function scrollToTop() {
    dispatch({type:"SET_SINGLE_NEWS",payload:newt})
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
 
  return (
    <div style={{cursor:"pointer"}} className="hour-ago-parent" onClick={scrollToTop}>
      <div className="hour-ago">{new Date(newt.updatedAt).toLocaleDateString()}</div>
      <div className="cnn-indonesia1">{newt.author}</div>
      <b className="news-title-lorem">{newt.name}</b>
      {isImage(carImageUrl[0].path) && (
            <img className="group-child6"  src={`${process.env.REACT_APP_BACKEND_URL}${carImageUrl[0].path}`}  />
          )}
          {isVideo(carImageUrl[0].path) && (
            <video className="group-child6" src={`${process.env.REACT_APP_BACKEND_URL}${carImageUrl[0].path}`} controls loop />
          )}
 
    </div>
  );
};

export default NewsContainer;
