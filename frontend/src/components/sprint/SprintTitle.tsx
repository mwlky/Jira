import "./sprint.css";
import "../../styles/global.css";

const SprintDetails = () => {
  return (
    <>
      <div className="sprint-management-container">
        <p className="sprint-title-header">Sprint #01</p>

        <div className="sprint-management-buttons">
          <div>
            <button className="sprint-icon-button">
              <img
                className="sprint-button-image"
                src="/images/details/automation-icon.svg"
                alt="automation"
              />
            </button>

            <button className="sprint-icon-button">
              <img
                className="sprint-button-image"
                src="/images/details/add-to-stared-icon.svg"
                alt="automation"
              />
            </button>

            <button className="sprint-icon-button">
              <img
                className="sprint-button-image"
                src="/images/details/share-icon.svg"
                alt="automation"
              />
            </button>

            <button className="sprint-icon-button">
              <img
                className="sprint-button-image"
                src="/images/details/fullscreen-icon.svg"
                alt="automation"
              />
            </button>
          </div>

          <button className="gray-button">Start stand-up</button>

          <button className="complete-sprint-button">Complete sprint</button>

          <button className="gray-button">
            <div className="gray-button-with-content">
              <img
                className="activity-timeline-image"
                src="/images/details/activity-icon.svg"
                alt=""
              />
              <p>Activity Timeline</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SprintDetails;
