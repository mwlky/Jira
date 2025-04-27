import React, { useEffect, useRef, useState } from "react";
import { TaskPriorityIcons, TaskPriority } from "./Task";

interface Props {
  selectedPriority: TaskPriority;
  onSelect: (priority: TaskPriority) => void;
}

const TaskPriorityDropdown: React.FC<Props> = ({
  selectedPriority,
  onSelect,
}) => {
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
          src={TaskPriorityIcons[selectedPriority]}
          alt=""
          className="dropdown-icon"
        />
        <span className="dropdown-arrow">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {Object.values(TaskPriority).map((type) => (
            <div
              key={type}
              className="dropdown-option"
              onClick={() => {
                onSelect(type);
                setIsOpen(false);
              }}
            >
              <img
                src={TaskPriorityIcons[type]}
                alt=""
                className="dropdown-icon"
              />
              <span className="type-select-acion-text">{type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskPriorityDropdown;
