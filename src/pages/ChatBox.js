import CaesarDrawer from "../components/CaesarDrawer";
import MessageContainer from "../components/MessageContainer";
import ChatContainer from "../components/ChatContainer";
import PhotoContainer from "../components/PhotoContainer";
import HeaderTop from "../components/HeaderTop";
import CaesarContainer from "../components/CaesarContainer";
import "./ChatBox.css";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <CaesarDrawer />
      <div className="d-side-menu">
        <div className="contacts">
          <div className="d-input">
            <div className="label">Label</div>
            <div className="partsd-input-master">
              <div className="text-icon">
                <img
                  className="i-iconmagnifyingglass-search-"
                  alt=""
                  src="../iiconmagnifyingglasssearchfind--swap.svg"
                />
                <div className="partsd-input-text">
                  <div className="text">Text</div>
                  <div className="caret">
                    <div className="caret1" />
                  </div>
                  <div className="placeholder">Search</div>
                </div>
              </div>
              <div className="partsd-input-right-part">
                <div className="icon-container">
                  <img
                    className="i-iconmagnifyingglass-search-"
                    alt=""
                    src="../iiconinfo--swap.svg"
                  />
                </div>
                <div className="d-icon-button">
                  <img
                    className="i-iconmagnifyingglass-search-"
                    alt=""
                    src="../iiconxclosecross--swap1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="partsd-input-hint">
              <div className="hint">Hint</div>
              <div className="div">21/164</div>
            </div>
          </div>
          <MessageContainer
            profileImageUrl="../photo1@2x.png"
            profileName="Zack Fox"
            conversationText="Have you ever heard of..."
            timeStamp="10:49 AM"
            propBorder="1px solid var(--color-linen-100)"
          />
          <MessageContainer
            profileImageUrl="../photo2@2x.png"
            profileName="Kathryn Cooper"
            conversationText="Thank you!"
            timeStamp="6:34 PM"
          />
          <MessageContainer
            profileImageUrl="../photo3@2x.png"
            profileName="Arthur Cooper"
            conversationText="Did you hear about OE DS..."
            timeStamp="1:21 AM"
            propBorder="1px solid var(--light-text-white)"
          />
          <MessageContainer
            profileImageUrl="../photo4@2x.png"
            profileName="Colleen Pena"
            conversationText="I like your idea, but..."
            timeStamp="1:26 AM"
            propBorder="1px solid var(--light-text-white)"
          />
          <MessageContainer
            profileImageUrl="../photo5@2x.png"
            profileName="Jennie Miles"
            conversationText="Ok"
            timeStamp="6:15 PM"
            propBorder="1px solid var(--light-text-white)"
          />
          <MessageContainer
            profileImageUrl="../photo6@2x.png"
            profileName="Regina Cooper"
            conversationText="Are you losing sales bec..."
            timeStamp="1:05 PM"
            propBorder="1px solid var(--light-text-white)"
            propAlignSelf="stretch"
          />
          <ChatContainer />
          <MessageContainer
            profileImageUrl="../photo8@2x.png"
            profileName="Floyd Flores"
            conversationText="Project or undertaking, ..."
            timeStamp="8:33 AM"
            propBorder="1px solid var(--light-text-white)"
            propAlignSelf="stretch"
          />
          <PhotoContainer />
        </div>
      </div>
      <HeaderTop />
      <CaesarContainer />
    </div>
  );
};

export default ChatBox;
