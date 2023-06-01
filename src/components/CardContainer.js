import "./CardContainer.css";

const CardContainer = ({
  employeeImageUrl,
  employeeName,
  employeePosition,
  employeeDescription,
}) => {
  return (
    <div className="frame-parent22">
      <div className="ellipse-parent6">
        <img className="frame-child36" alt="" src={employeeImageUrl} />
        <div className="andhika-sudarman-parent">
          <b className="andhika-sudarman">{employeeName}</b>
          <div className="chief-executive-officer">{employeePosition}</div>
        </div>
      </div>
      <img className="devider-icon" alt="" src="../devider.svg" />
      <div className="description">{employeeDescription}</div>
    </div>
  );
};

export default CardContainer;
