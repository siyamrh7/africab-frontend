import "./QuoraBlogContainer.css";

const QuoraBlogContainer = ({
  quoraBlogImageUrl,
  quoraBlogDescription,
  quoraBlogFollowers,
  romeHistoryImageUrl,
}) => {
  return (
    <div className="space-list-item">
      <div className="list-item">
        <div className="variant-list-item-content">
          <div className="cell-icon">
            <div className="replace-icon">
              <img className="content-icon" alt="" src={quoraBlogImageUrl} />
            </div>
          </div>
          <div className="cell-content-wrapper">
            <div className="cell-content">
              <div className="main-content">
                <div className="cell-text">
                  <div className="variant-main-text-wrapper">
                    <div className="main-text">{quoraBlogDescription}</div>
                  </div>
                  <div className="sub-text">
                    <p className="k-followers-3-posts-in-the-l">
                      <span>{quoraBlogFollowers}</span>
                    </p>
                    <p className="the-place-for-official-announc">
                      <span>{romeHistoryImageUrl}</span>
                    </p>
                  </div>
                </div>
                <div className="cell-icon">
                  <img
                    className="replace-secondary-component"
                    alt=""
                    src="../replace-secondary-component.svg"
                  />
                </div>
              </div>
              <div className="replace-attachment-component">
                <div className="label1">
                  <p className="k-followers-3-posts-in-the-l">
                    Attachment component
                  </p>
                  <p className="replace-or-hide">Replace or hide me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seperator1">
          <div className="line1" />
        </div>
      </div>
    </div>
  );
};

export default QuoraBlogContainer;
