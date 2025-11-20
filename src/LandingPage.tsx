import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-31T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <div className="main-text">
          <span className="date">2025.12.31</span>
          <h2 className="project-title">잇다 프로젝트</h2>
          <h1 className="title">Opening Soon</h1>
        </div>

        <div className="countdown-container">
          <div className="countdown-item">
            <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="time-label">DAYS</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="time-label">HOURS</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="time-label">MINUTES</span>
          </div>
          <div className="separator">:</div>
          <div className="countdown-item">
            <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="time-label">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
