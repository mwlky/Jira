import React from 'react'

import '../../styles/sprint.css'

const SprintDetails = () => {
  return (
    <>
      <div className='sprint-management-container'>

        <p className='sprint-title-header'>Sprint #01</p>

        <div className='sprint-management-buttons'>
          <div>
            <button className='sprint-icon-button'>
              <img className='sprint-button-image' src="/images/details/automation-icon.svg" alt="automation" />
            </button>

            <button className='sprint-icon-button'>
              <img className='sprint-button-image' src="/images/details/add-to-stared-icon.svg" alt="automation" />
            </button>

            <button className='sprint-icon-button'>
              <img className='sprint-button-image' src="/images/details/share-icon.svg" alt="automation" />
            </button>

            <button className='sprint-icon-button'>
              <img className='sprint-button-image' src="/images/details/fullscreen-icon.svg" alt="automation" />
            </button>
          </div>

          <button className='sprint-management-button'>Start stand-up</button>
          <button className='complete-sprint-button'>Complete sprint</button>
          <button className='sprint-management-button'>
            <div className='activity-timeline-flex'>
              <img className='activity-timeline-image' src="/images/details/activity-icon.svg" alt="" />
              <p>Activity Timeline</p>
            </div>
            </button>
        </div>

      </div>

      <p className='sprint-details-text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    </>
  )
}

export default SprintDetails