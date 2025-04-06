import React, {useState} from 'react'
import ProjectName from './ProjectName'

import "../styles/navbar.css"
import SidebarContent from './SidebarContent';
import ProjectInfo from './ProjectInfo';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`sidebar-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '<' : '>'}
        </button>

        <ProjectName />
        <SidebarContent />
        <ProjectInfo />
        
    </div>
  )
}

export default Sidebar