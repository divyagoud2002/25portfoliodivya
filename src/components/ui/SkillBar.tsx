import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate skill bar on mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;