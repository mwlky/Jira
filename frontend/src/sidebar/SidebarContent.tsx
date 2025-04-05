import React, { useState } from 'react'
import SidebarButton from './SidebarButton'

const SidebarContent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-content">
      <div className="content-header" onClick={() => setIsOpen(!isOpen)}>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>&#9662;</span> 
        <p className='content-title'>PLANNING</p>
      </div>
      
      {isOpen && (
        <div className='buttons-container'>
          <SidebarButton title="Summary" icon="/images/jira_elements/sidebar_elements/summary-icon.svg" iconSize={21} />
          <SidebarButton title="Timeline" icon="/images/jira_elements/sidebar_elements/timeline-icon.svg"/>
          <SidebarButton title="Backlog" icon="/images/jira_elements/sidebar_elements/backlog-icon.svg"/>
          <SidebarButton title="Board" icon="/images/jira_elements/sidebar_elements/board-icon.svg"/>
          <SidebarButton title="Calendar" icon="/images/jira_elements/sidebar_elements/calendar-icon.svg"/>
          <SidebarButton title="List" icon="/images/jira_elements/sidebar_elements/list-icon.svg" iconSize={30}/>
          <SidebarButton title="Reports" icon="/images/jira_elements/sidebar_elements/reports-icon.svg"/>
          <SidebarButton title="Forms" icon="/images/jira_elements/sidebar_elements/forms-icon.svg"/>
          <SidebarButton title="Goals" icon="/images/jira_elements/sidebar_elements/goals-icon.svg"/>
          <SidebarButton title="Issues" icon="/images/jira_elements/sidebar_elements/issues-icon.svg"/>
        </div>
      )}
    </div>
  )
}

export default SidebarContent