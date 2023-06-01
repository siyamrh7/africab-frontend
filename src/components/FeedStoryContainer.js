import { useMemo } from "react";
import "./FeedStoryContainer.css";
import ImagesSlider from './ImagesSlider2'
const FeedStoryContainer = ({
  contentImageUrl,
  contentImageUrls,
  contentImageUrls5to10,
  contentImageUrls6to11,
  contentImageUrls7to12,
  optImageUrl,
  optIconUrl,
  optChevronSuffixUrl,
  optChevronSuffixUrls,
  optChevronSuffixUrls2to6,
  optChevronSuffixUrls3to7,
  propAlignSelf,
  propWidth,
  propHeight,
  question,
  setAns
}) => {
  const cardContentStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const imageIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);
  if (!question) return null
  return (
    <div className="feed-story">
      <div className="var-card">
        <div className="card-content1" style={cardContentStyle}>
          <div className="card-inner1">
            <div className="feed-story-content">
              <div className="text-content">
                <div className="var-answer-header">
                  <div className="feed-reason-wrapper">
                    <div className="var-feed-reason">
                      <div className="var-badge-pile">
                        <div className="photo">
                          <img
                            className="content-icon1"
                            alt=""
                            src={contentImageUrl}
                          />
                        </div>
                        <div className="photo1">
                          <img
                            className="content-icon1"
                            alt=""
                            src={contentImageUrls}
                          />
                        </div>
                        <div className="photo2">
                          <img
                            className="content-icon1"
                            alt=""
                            src={contentImageUrls5to10}
                          />
                        </div>
                        <div className="photo1">
                          <img
                            className="content-icon1"
                            alt=""
                            src={contentImageUrls6to11}
                          />
                        </div>
                      </div>
                      <div className="text-content1">
                        <div className="reason">
                          Adam D’Angelo and Pete Lada upvoted · 2h
                        </div>
                      </div>
                    </div>
                    <img className="close-icon" alt="" src="../close.svg" />
                  </div>
                  <div className="header-content">
                    <div className="var-photo">
                      <img
                        className="content-icon5"
                        alt=""
                        src={contentImageUrls7to12}
                      />
                    </div>
                    <div className="text-content2">
                      <b className="reason">{question.user.name}</b>
                      <div className="credential">
                        {new Date(question.updatedAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="answer-content">
                  <div className="text-content3">
                    <b className="reason">
                      {question.question}
                    </b>
                    <div className="answer">
                      {question.answer}
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-content">
                <div className="content2">
                  <ImagesSlider className="image-icon1"
                    media={question.images} />
                  {/* <img
                    className="image-icon1"
                    alt=""
                    src={optImageUrl}
                    style={imageIconStyle}
                  /> */}
                </div>
              </div>
              <div className="var-answer-actionbar">
                <div className="opt-feed-reason">
                  <div className="text-content4">
                    <div className="reason">
                      Pablo Garces and Pete Lada upvoted this · 2h ago
                    </div>
                  </div>
                </div>
                <div className="var-actionbar">
                  <div className="primary-actions">
                    <div className="var-upvote">
                      <img className="icon" alt="" src="../icon.svg" />
                      <div className="content3">
                        <div className="text1">151</div>
                        <div className="downvote">
                          <div className="divider" />
                          <img className="icon" alt="" src="../chevron.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="quora-share">
                      <img className="icon" alt="" src={optIconUrl} />
                      <div className="text2">
                        <div className="text3">Request</div>
                        <div className="opt">•</div>
                        <div className="opt-count">105</div>
                      </div>
                      <img
                        className="opt-var-chevron-suffix"
                        alt=""
                        src={optChevronSuffixUrl}
                      />
                    </div>
                  </div>
                  <div style={{ cursor: "pointer" }} className="comment" onClick={() => setAns(question)}>
                    <img className="icon" alt="" src="../opt-icon1.svg" />
                    <div className="text2">
                      <div className="text3">Answer</div>
                      <div className="opt">•</div>
                      <div className="opt-count">105</div>
                    </div>
                    <img
                      className="opt-var-chevron-suffix"
                      alt=""
                      src={optChevronSuffixUrls}
                    />
                  </div>
                  {/* <div className="primary-actions">
                    <div className="comment">
                      <img className="icon" alt="" src="../opt-icon2.svg" />
                      <div className="text2">
                        <div className="text3">Regular</div>
                        <div className="opt">•</div>
                        <div className="opt-count">105</div>
                      </div>
                      <img
                        className="opt-var-chevron-suffix"
                        alt=""
                        src={optChevronSuffixUrls2to6}
                      />
                    </div>
                   
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gutter1" />
      </div>
    </div>
  );
};

export default FeedStoryContainer;
