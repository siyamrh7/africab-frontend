import { useState } from "react";
import styles from './cardsection.module.css'

const ImageSlider = ({ media }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handlePrevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? media.length - 1 : currentSlide - 1);
    };
  
    const handleNextSlide = () => {
      setCurrentSlide(currentSlide === media.length - 1 ? 0 : currentSlide + 1);
    };
  
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
if(!media) return null
    return (
      <div className={styles.amedia}>
        <div className={styles.divslides}>
          {isImage(media[currentSlide].path) && (
            <img className={styles.c67298314b195f3284014acpngIcon}  src={`${process.env.REACT_APP_BACKEND_URL}${media[currentSlide].path}`}  alt={media[currentSlide].name} />
          )}
          {isVideo(media[currentSlide].path) && (
            <video className={styles.c67298314b195f3284014acpngIcon} src={`${process.env.REACT_APP_BACKEND_URL}${media[currentSlide].path}`} controls loop />
          )}
        </div>
        <button className={styles.prevButton} onClick={handlePrevSlide}>
          &#10094;
          
        </button>
        <button className={styles.nextButton} onClick={handleNextSlide}>
          &#10095;
          
        </button>
      </div>
    );
  };
  export default ImageSlider