import "./Body.css";
import banner from "../../assets/img/banner1.jpg";
import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { useEffect, useState } from "react";

const Body = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startDate = new Date("2024-10-04");
    const targetDate = new Date("2024-12-31T23:59:59");
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
    <div className="body">
      <div className="detailPage grid wide">
        <div className="bread-crumb">
          <a href="#">Trang chủ</a>
          <span>&gt;</span>
          <a href="#">Khuyến Mãi</a>
          <span>&gt;</span>
          <a href="#">Khách hàng Cá nhân</a>
          <span>&gt;</span>
          <a href="#">Chương trình ưu đãi</a>
          <span>&gt;</span>
          <a href="#">Kinh doanh vượt mốc - Lãi sốc đồng hành</a>
        </div>
      </div>
      <div className="wrapper">
        <div className="left-side">hi</div>
        <div className="content">
          <div className="promotiondetail">
            <div className="banner-img">
              <img src={banner} alt="Banner" />
            </div>
            <div className="banner-details">
              <h1 className="banner-details-title">
                Kinh doanh vượt mốc - Lãi sốc đồng hành
                <span></span>
              </h1>
              <div className="banner-details--timer">
                <div className="icon-wrapper">
                  <GoClock />
                  <p>04/10/2024 - 31/12/2024</p>
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
          <div></div>
        </div>
        <div className="right-side"></div>
      </div>
      <div className="xfpage page basicpage"></div>
    </div>
  );
};

export default Body;
