import { useSelector } from "react-redux";
import "./HotTopicsContainer.css";
import ShowMoreText from "react-show-more-text"
import { useEffect, useState } from "react";
import ImageSlider from "./ImagesSlider2";
const HotTopicsContainer = () => {
  const { newt } = useSelector(state => state.NewsReducers)
  const [state, setState] = useState({})

  useEffect(() => {
    setState(newt)
  }, [newt])

  if (!state) return null
  return (
    <div className="hero">
      <div className="imageConHot">

        <ImageSlider className="hero-child hero-item" media={state.images} />

      </div>
      <p>

      <a target="_blank" href={state.website} className="cnn-indonesia">{state.author}</a>
      </p>
      <b className="massa-tortor-nibh">
        {state.name}
      </b>
      <div className="hours-ago">{new Date(state.updatedAt).toLocaleDateString()}</div>
      <div className="nisi-sagittis-aliquet-container">
        <ShowMoreText
          /* Default options */
          lines={5}
          more="See more"
          less="See less"
          className="content-css"
          anchorClass="see-more"
          expanded={false}
          truncatedEndingComponent={" ... "}
        >
          {state.description}
        </ShowMoreText>

      </div>

    </div>
  );
};

export default HotTopicsContainer;
