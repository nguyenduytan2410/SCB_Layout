/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

const BodyItem = ({
  picture,
  title,
  time1,
  time1Title,
  time2Title,
  timeProcess,
}) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startDate = new Date(time1);
    const targetDate = new Date(timeProcess);
    const updateTimer = () => {
      const now = new Date();
      const totalDuration = targetDate - startDate;
      const timeElapsed = now - startDate;
      const difference = targetDate - now;
      const progressPercentage = Math.min(
        (timeElapsed / totalDuration) * 100,
        100
      );
      setProgress(progressPercentage);
      if (difference <= 0) {
        setTimeLeft("Đã đến hạn");
        setProgress(100);
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft(
        `${days} ngày ${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="cmp-related-promotions-list__content-item">
      <div className="banner-image">
        <a href="#">
          <img src={picture} alt="item1" />
        </a>
      </div>
      <div className="banner-details">
        <h1 className="banner-details--header">
          {title}
          <span></span>
        </h1>
        <div className="banner-details--timer">
          <div className="icon-wrapper">
            <GoClock />
            <p>{`${time1Title} - ${time2Title}`}</p>
          </div>
          <div className="progress-timer">
            <div className="progress-bar-wrapper">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="details-timer">{timeLeft}</div>
          </div>
        </div>
        <div className="banner-details-location">
          <SlLocationPin />
          <p>Việt Nam</p>
        </div>
      </div>
    </div>
  );
};

export default BodyItem;
