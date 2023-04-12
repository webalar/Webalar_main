import React, { useState } from 'react';

function FAQCard({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapseClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-card">
      <div className="faq-question" onClick={handleCollapseClick}>
        <h3 className='raleway'>{question}</h3>
        <button
          className="collapse-btn"
          aria-expanded={isExpanded}
          aria-controls="faq-answer"
          onClick={handleCollapseClick}
        >
          {isExpanded ? <img src={require("../images/arrowUp.png")} alt="" /> : <img src={require("../images/arrowDown.png")} alt="" />}
        </button>
      </div>
      <div
        className={`faq-answer ${isExpanded ? 'show' : ''}`}
        id="faq-answer"
      >
        <p className='raleway'>{answer}</p>
      </div>
    </div>
  );
}

export default FAQCard;
