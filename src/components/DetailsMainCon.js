import React from 'react'
import CardContainer from "../components/CardContainer";
import InnovativeContainer from "../components/InnovativeContainer";
import "./TalentConnectorContainer.css";
import ShowMoreText from "react-show-more-text";

const DetailsMainCon = ({ post }) => {
  if (!post) return null
  return (
    <>
      <div className="frame-wrapper">
        <div className="frame-parent24">
          <div className="overview-parent">
            <b className="overview">Overview:</b>
            <div className="in-publishing-and-container">
              <p className="in-publishing-and-graphic-desi">
                <span>
                  {post.name}
                </span>
              </p>
              <p className="as-you-might-have-already-hear">
                <ShowMoreText
                  /* Default options */
                  lines={3}
                  more="See more"
                  less="See less"
                  className="content-css"
                  anchorClass="see-more"
                  expanded={false}
                  truncatedEndingComponent={" ... "}
                >
                  {post.description}
                </ShowMoreText>

              </p>
            </div>
          </div>
          <div className="overview-parent">
            <b className="overview">Benefits:</b>
            <div className="frame-parent25">
              <div className="frame-parent26">
                {post.benefits && post.benefits[0].split(',').slice(1, 10).map((b) => (

                  <div className="frame-wrapper5 wrapper-x">
                    <div className="icons8-money-bag-96-parent">
                      <img
                        className="icons8-money-bag-96"
                        alt=""
                        src="../icons8gift96-1@2x.png"
                      />
                      <div className="competitive-salary">{b}</div>
                    </div>
                  </div>
                ))}

                <div className="frame-wrapper7 wrapper-x">
                  <div className="icons8-money-bag-96-parent">
                    <img className="icon6" alt="" src="../icon8.svg" />
                    <div className="competitive-salary">More</div>
                  </div>
                </div>
              </div>
              {/* <div className="frame-parent26">
            <div className="frame-wrapper1 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8moneybag96@2x.png"
                />
                <div className="competitive-salary">Competitive Salary</div>
              </div>
            </div>
            <div className="frame-wrapper2 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8hamburger96-1@2x.png"
                />
                <div className="competitive-salary">
                  Free Food and Snack
                </div>
              </div>
            </div>
            <div className="frame-wrapper3 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8globe96@2x.png"
                />
                <div className="competitive-salary">
                  International Exposure
                </div>
              </div>
            </div>
            <div className="frame-wrapper4 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8hospitalinsurance96@2x.png"
                />
                <div className="competitive-salary">Paid Sick Days</div>
              </div>
            </div>
            <div className="frame-wrapper5 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8gift96-1@2x.png"
                />
                <div className="competitive-salary">THR / Binus System</div>
              </div>
            </div>
            <div className="frame-wrapper1 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8clothes96@2x.png"
                />
                <div className="competitive-salary">Casual Dress Code</div>
              </div>
            </div>
            <div className="frame-wrapper7 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img
                  className="icons8-money-bag-96"
                  alt=""
                  src="../icons8ricebowl96-1@2x.png"
                />
                <div className="competitive-salary">Free Lunch</div>
              </div>
            </div>
            <div className="frame-wrapper7 wrapper-x">
              <div className="icons8-money-bag-96-parent">
                <img className="icon6" alt="" src="../icon8.svg" />
                <div className="competitive-salary">More</div>
              </div>
            </div>
          </div> */}

            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent28">
        {/* <div className="overview-parent">
      <b className="overview">Team:</b>
      <div className="frame-wrapper9">
        <div className="frame-parent29">
          <CardContainer
            employeeImageUrl="../ellipse-16@2x.png"
            employeeName="Andhika Sudarman"
            employeePosition="Chief Executive Officer"
            employeeDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          />
          <CardContainer
            employeeImageUrl="../ellipse-17@2x.png"
            employeeName="Eleanor Pena"
            employeePosition="Marketing Coordinator"
            employeeDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          />
          <CardContainer
            employeeImageUrl="../ellipse-18@2x.png"
            employeeName="Jacob Jones"
            employeePosition="Web Designer"
            employeeDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "
          />
        </div>
      </div>
    </div> */}
        <div className="overview-parent">
          <b className="overview">Culture:</b>
          <div className="deall-jobs-is-indonesias-larg-parent">
            <div className="deall-jobs-is-container">
              <span>{`Deall Jobs is Indonesia's largest job portal & mentoring platform. We help people easily find jobs to top Indonesian companies for internship and full-time roles. As you might have already heard about us, we are revolutionizing how Indonesian engage with employers. Many Indonesian students are talented, ambitious, but never found a better opportunity for themselves. Our team is driven by the vision to democratize information and knowledge, thus opportunities. We think what we build will allow Indonesian students to have a chance to self develop and have a better future... `}</span>
              <b className="see-more1">See More</b>
            </div>
            <img className="devider-icon1" alt="" src="../devider3.svg" />
            <div className="frame-parent30">
              <InnovativeContainer
                companyImageUrl="../icons8idea96-1@2x.png"
                companyValues="Innovative"
                companyMissionStatement="We strive to constantly pursue innovation of our products and services"
                propAlignSelf="stretch"
              />
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="../vector-4.svg" />
              </div>
              <InnovativeContainer
                companyImageUrl="../icons8trust961@2x.png"
                companyValues="Nurturing"
                companyMissionStatement="Our working environment prioritizes encouragement for employee's growth and development"
                propAlignSelf="unset"
              />
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="../vector-4.svg" />
              </div>
              <InnovativeContainer
                companyImageUrl="../icons8conflict961@2x.png"
                companyValues="Energetic"
                companyMissionStatement="Here, we work together to make the dream work"
              />
            </div>
          </div>
        </div>
      </div></>
  )
}

export default DetailsMainCon