import { useMemo } from "react";
import "./MessageContainer.css";

const MessageContainer = ({
  profileImageUrl,
  profileName,
  conversationText,
  timeStamp,
  propBorder,
  propAlignSelf,
}) => {
  const badgeStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const haveYouEverStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="message">
      <div className="d-avatar">
        <img className="photo-icon1" alt="" src={profileImageUrl} />
        <div className="d-status-dot">
          <div className="badge1" style={badgeStyle} />
          <div className="status1">Status</div>
        </div>
      </div>
      <div className="sender-name-and-message">
        <div className="zack-fox">{profileName}</div>
        <div className="have-you-ever" style={haveYouEverStyle}>
          {conversationText}
        </div>
      </div>
      <div className="status2">
        <div className="am">{timeStamp}</div>
      </div>
    </div>
  );
};

export default MessageContainer;
