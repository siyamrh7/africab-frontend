import "./NotionContainer.css";
import { useNavigate } from "react-router-dom";
const NotionContainer = ({
  companyLogoUrl,
  companyName,
  jobTitle,
  location1,
  salaryRange,
  postingDate,
}) => {
  const navigate=useNavigate()

  return (
    <div className="frame-parent1" >
      <img className="frame-icon" alt="" src={companyLogoUrl} style={{cursor:"pointer"}} onClick={()=>navigate("details1")}/>
      <div className="frame-parent2">
        <div className="frame-parent3">
        <div className="mobile-frame4">
        <img className="mobile-frame-icon" alt="" src={companyLogoUrl} style={{cursor:"pointer"}} onClick={()=>navigate("details1")}/>
<div className="mobile-frame2-right">

            <div className="notion-wrapper">
              <div className="notion"  >{companyName}</div>
            </div>
            <div className="junior-ui-designer-wrapper" style={{cursor:"pointer"}} onClick={()=>navigate("details1")}>
              <div className="junior-ui-designer" >{jobTitle}</div>
            </div>
</div>
          </div>
          <div className="frame-parent4">
            <div className="notion-wrapper">
              <div className="notion"  >{companyName}</div>
            </div>
            <div className="junior-ui-designer-wrapper" style={{cursor:"pointer"}} onClick={()=>navigate("details1")}>
              <div className="junior-ui-designer" >{jobTitle}</div>
            </div>
          </div>
          <div className="frame-parent5">
            <div className="mappinline-parent">
              <img className="mappinline-icon" alt="" src="../mappinline.svg" />
              <div className="notion">{location1}</div>
            </div>
            <div className="mappinline-parent ">
              <img className="mappinline-icon" alt="" src="../clock.svg" />
              <div className="notion">Full time</div>
            </div>
            <div className="mappinline-parent">
              <img
                className="mappinline-icon"
                alt=""
                src="../currencydollar.svg"
              />
              <div className="notion">{salaryRange}</div>
            </div>
            <div className="mappinline-parent">
              <img
                className="mappinline-icon"
                alt=""
                src="../calendarblank.svg"
              />
              <div className="notion">{postingDate}</div>
            </div>
          </div>
        </div>
        <div className="mollit-in-laborum">
          Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
          Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum
          tempor Lorem incididunt.
        </div>
      </div>
    </div>
  );
};

export default NotionContainer;
