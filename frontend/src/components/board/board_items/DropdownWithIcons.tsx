import React, { useEffect, useRef, useState } from "react";
import { TaskType, TaskTypeIcons } from "../../../utils/Task";

import "./dropdown.css";

interface Props {
  selectedType: TaskType;
  onSelect: (type: TaskType) => void;
}

const TaskTypeDropdown: React.FC<Props> = ({ selectedType, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicked out of the box
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={TaskTypeIcons[selectedType]}
          alt=""
          className="dropdown-icon"
        />
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {Object.values(TaskType).map((type) => (
            <div
              key={type}
              className="dropdown-option"
              onClick={() => {
                onSelect(type);
                setIsOpen(false);
              }}
            >
              <img src={TaskTypeIcons[type]} alt="" className="dropdown-icon" />
              <span className="type-select-acion-text">{type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskTypeDropdown;
