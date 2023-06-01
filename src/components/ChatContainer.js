import "./ChatContainer.css";

const ChatContainer = () => {
  return (
    <div className="message1">
      <div className="d-avatar1">
        <img className="photo-icon2" alt="" src="../photo7@2x.png" />
        <div className="d-status-dot1">
          <div className="badge2" />
          <div className="status3">Status</div>
        </div>
      </div>
      <div className="sender-name-and-message1">
        <div className="caesar2">Caesar</div>
        <div className="you-i-dont-container">
          <span>You:</span>
          <span className="i-dont-know"> I don’t know, but a lo...</span>
        </div>
      </div>
      <div className="status4">
        <div className="pm">8:33 PM</div>
      </div>
    </div>
  );
};

export default ChatContainer;
