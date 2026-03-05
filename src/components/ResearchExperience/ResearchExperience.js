import React from 'react';
import './ResearchExperience.css';
import { RESEARCH_EXPERIENCE } from '../../Util/data';

const ResearchExperience = () => {
    return (
        <section id="research-experience">
            <h1>
                <span role="img" aria-label="research experience">🧐</span>
                {' '}Research Experience
            </h1>
            <div className="research-grid">
                {RESEARCH_EXPERIENCE.map((item, index) => (
                    <div key={index} className="research-item">
                        <div className="research-date">{item.date}</div>
                        <div className="research-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchExperience;
