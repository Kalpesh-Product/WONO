import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbars() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prevProgress + Math.floor(Math.random() * 10) + 1, 100);
      });
    }, 1000); // Update progress every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <ProgressBar animated now={progress} label={`${progress}%`} />
    </div>
  );
}

export default Progressbars;
