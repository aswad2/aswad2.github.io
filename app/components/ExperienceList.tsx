"use client";

import { useState } from "react";
import Image from "next/image";

interface Experience {
  company: string;
  role: string;
  logo: string;
  dates: string;
  location: string;
  current?: boolean;
}

interface ExperienceListProps {
  experiences: Experience[];
  initialCount: number;
}

export default function ExperienceList({ experiences, initialCount }: ExperienceListProps) {
  const [showAll, setShowAll] = useState(false);
  
  const visibleExperiences = showAll ? experiences : experiences.slice(0, initialCount);
  const hiddenCount = experiences.length - initialCount;

  return (
    <>
      <ul className="experience-list animate-in animate-in-delay-5">
        {visibleExperiences.map((exp) => (
          <li key={exp.company} className="experience-item">
            <div className="exp-logo">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={44}
                height={44}
              />
            </div>
            <div className="exp-details">
              <div className="exp-header">
                <h3 className="exp-company">{exp.company}</h3>
                {exp.current && <span className="exp-badge">Current</span>}
              </div>
              <p className="exp-role">{exp.role}</p>
              <div className="exp-meta">
                <span className="exp-dates">{exp.dates}</span>
                <span className="exp-separator">·</span>
                <span className="exp-location">{exp.location}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button 
          className="see-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? "show less" : "see more"}</span>
          <span className="see-more-icon">{showAll ? "↑" : "↓"}</span>
        </button>
      )}
    </>
  );
}

