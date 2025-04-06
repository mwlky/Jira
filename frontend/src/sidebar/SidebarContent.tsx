import React, { useState } from 'react'
import SidebarButton from './SidebarButton'

const SidebarContent = () => {
  const [isPlanningOpen, setIsPlanningOpen] = useState(true);
  const [isDevOpen, setIsDevOpen] = useState(true);
  const [isOperationsOpen, setIsOperationsOpen] = useState(true);

  return (
    <div className="sidebar-content">
      <div className="content-header" onClick={() => setIsPlanningOpen(!isPlanningOpen)}>
        <span className={`arrow-icon ${isPlanningOpen ? 'open' : ''}`}>&#9662;</span> 
        <p className='content-title'>PLANNING</p>
      </div>
      
      {isPlanningOpen && (
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

      <div className="content-header" onClick={() => setIsDevOpen(!isDevOpen)}>
        <span className={`arrow-icon ${isDevOpen ? 'open' : ''}`}>&#9662;</span> 
        <p className='content-title'>DEVELOPMENT</p>
      </div>
      
      {isDevOpen && (
        <div className='buttons-container'>
          <SidebarButton title="Development" icon="/images/jira_elements/sidebar_elements/development-icon.svg" iconSize={21} />
          <SidebarButton title="Code" icon="/images/jira_elements/sidebar_elements/code-icon.svg"/>
          <SidebarButton title="Security" icon="/images/jira_elements/sidebar_elements/security-icon.svg"/>
          <SidebarButton title="Releases" icon="/images/jira_elements/sidebar_elements/releases-icon.svg"/>
        </div>
      )}

      <div className="content-header" onClick={() => setIsOperationsOpen(!isOperationsOpen)}>
        <span className={`arrow-icon ${isOperationsOpen ? 'open' : ''}`}>&#9662;</span> 
        <p className='content-title'>OPERATIONS</p>
      </div>
      
      {isOperationsOpen && (
        <div className='buttons-container'>
          <SidebarButton title="Deployments" icon="/images/jira_elements/sidebar_elements/deployments-icon.svg" iconSize={21} />
          <SidebarButton title="On-call" icon="/images/jira_elements/sidebar_elements/oncall-icon.svg"/>
        </div>
      )}

    </div>
  )
}

export default SidebarContent