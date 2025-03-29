import React, {useState} from 'react'
import ProjectName from './ProjectName'

import "../styles/navbar.css"

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`sidebar-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '<' : '>'}
        </button>

        <ProjectName />
    </div>
  )
}

export default Sidebar