'use client';

import React, { useState } from 'react';

const Level = ({ children }) => {
  const levels = ['A1', 'B1', 'C1'];
  const [currentLevel, setCurrentLevel] = useState(levels[2]);

  const handleClick = () => {
    const currentLevelIndex = levels.indexOf(currentLevel);
    const nextLevel = levels[(currentLevelIndex + 1) % levels.length];
    setCurrentLevel(nextLevel);
  };

  return (
    <div onClick={handleClick}>
      {React.Children.map(children, child => 
        React.isValidElement(child) && child.props.level === currentLevel ? child : null
      )}
    </div>
  );
};

export default Level;