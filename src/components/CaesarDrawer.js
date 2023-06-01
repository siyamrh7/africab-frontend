import "./CaesarDrawer.css";

const CaesarDrawer = () => {
  return (
    <div className="d-drawer">
      <div className="header">
        <div className="title1">
          <div className="m-avatar">
            <img className="photo-icon" alt="" src="../photo@2x.png" />
            <div className="m-status-dot">
              <div className="badge" />
              <div className="status">Status</div>
            </div>
          </div>
          <div className="caesar">Caesar</div>
        </div>
        <img
          className="i-iconx-close-cross-swap1"
          alt=""
          src="../iiconxclosecross--swap.svg"
        />
      </div>
      <div className="d-divider-border-separator" />
      <div className="text10">
        <div className="username">Username</div>
        <div className="ceo-of-african">@Caesar</div>
      </div>
      <div className="text10">
        <div className="username">Bio</div>
        <div className="ceo-of-african">CEO of african ambassy</div>
      </div>
      <div className="d-divider-border-separator" />
      <div className="d-divider-border-separator" />
      <div className="text12">
        <div className="d-link-button">
          <img
            className="i-iconcircle-swap"
            alt=""
            src="../iiconcircle--swap.svg"
          />
          <div className="button14">View Post</div>
          <img
            className="i-iconcircle-swap"
            alt=""
            src="../iiconcircle--swap.svg"
          />
        </div>
        <div className="d-link-button">
          <img
            className="i-iconcircle-swap"
            alt=""
            src="../iiconcircle--swap.svg"
          />
          <div className="button14">Delete conversation</div>
          <img
            className="i-iconcircle-swap"
            alt=""
            src="../iiconcircle--swap.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaesarDrawer;
