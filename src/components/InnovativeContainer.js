import { useMemo } from "react";
import "./InnovativeContainer.css";

const InnovativeContainer = ({
  companyImageUrl,
  companyValues,
  companyMissionStatement,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="icons8-idea-96-1-parent" style={frameDivStyle}>
      <img className="icons8-idea-96-1" alt="" src={companyImageUrl} />
      <div className="innovative-parent">
        <b className="innovative">{companyValues}</b>
        <div className="we-strive-to">{companyMissionStatement}</div>
      </div>
    </div>
  );
};

export default InnovativeContainer;
