import ImageSlider from "./ImagesSlider2";
import "./TalentCard.css";

const TalentCard = ({
  iconImageUrl,
  socialMediaImageUrl,
  iconImageUrls,
  iconImageUrls2,
  iconImageUrls6to12,
  iconImageUrls7to13,
  socialMediaImageUrls,
  socialMediaImageUrls1to4,
  socialMediaImageUrls5and2,
  post
}) => {
  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word.charAt(0))
      .join('');

    return firstLetters;
  }
  if(!post) return null
  return (
    <>
    <div className="imagesmain">

      <ImageSlider media={post.images}/>
    </div>
    <div className="rectangle-container">
      <div className="group-child2" />
      <div className="group-child5" />
      <div className="frame-parent18">
        <div className="frame-parent19">
          <div className="company-parent">
            <b className="company">{post.author}</b>
            <img
              className="social-media-icon"
              alt=""
              src={socialMediaImageUrl}
            />
          </div>
          <div className="we-connect-top">
            {post.slogan}
          </div>
        </div>
        {/* <div className="frame-parent20">
          <div className="icon-parent ">
            <img className="icon2" alt="" src={iconImageUrls} />
            <div className="tech">Tech</div>
          </div>
          <div className="icon-parent mobile-none">
            <img className="icon2" alt="" src={iconImageUrls2} />
            <div className="tech">Jakarta Selatan, Indonesia</div>
          </div>
          <div className="icon-parent mobile-none">
            <img className="icon2" alt="" src={iconImageUrls6to12} />
            <div className="tech">On-Site</div>
          </div>
          <div className="icon-parent">
            <img className="icon2" alt="" src={iconImageUrls7to13} />
            <div className="tech">1 – 50 employees</div>
          </div>
        </div> */}
          <b className="company">{post.name}</b>

      </div>
      <div className="picture">{post.author && getFirstLetters(post.author)}</div>
      <div className="frame-parent21">
        <a href={post.website} target="blank" className="social-media-wrapper">
          <img
            className="social-media-icon"
            alt=""
            src={socialMediaImageUrls}
          />
        </a>
        <a href={post.facebook} target="blank" className="social-media-wrapper">
          <img
            className="social-media-icon"
            alt=""
            src={socialMediaImageUrls1to4}
          />
        </a>
        <a href={post.instagram} target="blank" className="social-media-wrapper">
          <img
            className="social-media-icon"
            alt=""
            src={socialMediaImageUrls5and2}
          />
        </a>
      </div>
    </div>
    
    </>
  );
};

export default TalentCard;
