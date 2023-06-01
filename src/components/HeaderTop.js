import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="d-header">
      <img className="d-header-child" alt="" src="../frame-47@2x.png" />
      <div className="actions-container">
        <div className="partsd-header-icons">
          <img
            className="i-icondotsthreevertical-s"
            alt=""
            src="../iicondotsthreevertical--swap.svg"
          />
          <div className="d-tag-badge">
            <img
              className="i-iconcheck-swap"
              alt=""
              src="../iiconcheck--swap.svg"
            />
            <div className="tag">1</div>
            <img
              className="i-iconcheck-swap"
              alt=""
              src="../iiconcheck--swap.svg"
            />
          </div>
        </div>
        <div className="partsd-header-user-menu">
          <div className="d-avatar3">
            <img className="photo-icon4" alt="" src="../photo10@2x.png" />
            <div className="d-status-dot3">
              <div className="badge4" />
              <div className="status7">Status</div>
            </div>
          </div>
          <div className="d-tag-badge1">
            <img
              className="i-iconcheck-swap"
              alt=""
              src="../iiconcheck--swap.svg"
            />
            <div className="tag">1</div>
            <img
              className="i-iconcheck-swap"
              alt=""
              src="../iiconcheck--swap3.svg"
            />
          </div>
        </div>
      </div>
      <div className="partsd-header-user-menu1">
        <div className="arrow">
          <img
            className="partsd-tooltip-tip-icon"
            alt=""
            src="../partsdtooltiptip.svg"
          />
        </div>
        <div className="items-container">
          <div className="d-avatar-parent">
            <div className="d-avatar4">
              <img
                className="i-iconuser-swap"
                alt=""
                src="../iiconuser--swap.svg"
              />
              <div className="d-status-dot4">
                <div className="badge4" />
                <div className="status7">Status</div>
              </div>
            </div>
            <div className="user-info">
              <div className="oleg-ojo">Oleg Ojo</div>
              <div className="ux-architect">UX architect</div>
            </div>
          </div>
          <div className="d-divider-border-separator3" />
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iiconuser--swap1.svg"
            />
            <div className="profile">Profile</div>
          </div>
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iicongearsixsettings--swap.svg"
            />
            <div className="profile">Settings</div>
          </div>
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iiconclockcounterclockwise--swap.svg"
            />
            <div className="profile">Activity log</div>
          </div>
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iiconglobe--swap.svg"
            />
            <div className="profile">Language</div>
          </div>
          <div className="d-divider-border-separator3" />
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iiconinfo--swap.svg"
            />
            <div className="profile">Help</div>
          </div>
          <div className="master-header-user-menu">
            <img
              className="i-icongearsix-settings-sw"
              alt=""
              src="../iiconsignout--swap.svg"
            />
            <div className="profile">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
