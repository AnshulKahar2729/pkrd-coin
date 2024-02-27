import React, { useEffect, useState } from 'react';

function ToolTip({ text,className , topDist , leftDist }) {
  const [top, setTop] = useState(-2000);
  const [left, setLeft] = useState(-2000);

  useEffect(() => {
    const updatePosition = () => {
      const divElement = document.getElementById(className);
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        setTop(rect.top - topDist);
        setLeft(rect.left - leftDist);
      }
    };

    updatePosition(); // Initial position calculation

    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: top, left: left }} className={`bg-white border shadow-md max-w-72 p-2 rounded-md`}>
      <span style={{ lineHeight: '2px', fontWeight: '200' }} className='text-gray-600 text-sm leading-1'>{text}</span>
    </div>
  );
}

export default ToolTip;
