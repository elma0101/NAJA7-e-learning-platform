// src/components/Accordion/Accordion.tsx
import React, { useState,type  ReactNode } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Accordion.css'; // We'll create this CSS file next

interface AccordionProps {
  title: string;
  children: ReactNode; // This allows us to pass content (like a list of lessons) inside
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;