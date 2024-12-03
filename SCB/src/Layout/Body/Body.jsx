import "./Body.css";
import banner from "../../assets/img/banner1.jpg";
import item1 from "../../assets/img/item1.jpg";
import item2 from "../../assets/img/item2.jpg";
import item3 from "../../assets/img/item3.jpg";

import { SlLocationPin } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { useEffect, useState } from "react";
import BodyItem from "./BodyItem";

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
      <div className="wrapper grid wide">
        <div className="left-side"> </div>
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
          <div className="promotiondetailsdata">
            <div className="cmp-promotion-details-data">
              <div className="data-header">
                <h2>Nội dung ưu đãi</h2>
              </div>
              <div className="data-section">
                <div className="section-wrapper">
                  <div className="data-section--header">Khách hàng áp dụng</div>
                  <div className="data-section--more-information">
                    <p>Khách hàng Cá nhân và Doanh nghiệp trên toàn quốc.</p>
                  </div>
                </div>
                <div className="section-wrapper">
                  <div className="data-section--header">
                    Thông tin chi tiết chương trình
                  </div>
                  <div className="data-section--more-information">
                    <p>
                      <b>
                        Gói vay sản xuất kinh doanh ngắn hạn (Tối đa 6 tháng):
                        15.000 tỷ VND
                      </b>
                    </p>
                    <div className="table-container">
                      <table>
                        <tbody className="table-container--body">
                          <tr className="table-container--title">
                            <td>Nội dung</td>
                            <td>Lãi suất ưu đãi</td>
                          </tr>
                          <tr className="table-container--content">
                            <td>Khách hàng Cá nhân</td>
                            <td>Chỉ từ 5,5%/năm</td>
                          </tr>
                          <tr className="table-container--content">
                            <td>Khách hàng Doanh nghiệp</td>
                            <td>Chỉ từ 4,5%/năm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <b>Thanh toán khoản vay dễ dàng với các tính năng:</b>
                    </p>
                    <ul className="data-section_list">
                      <li className="data-section_list--item">
                        Thanh toán trực tuyến khoản vay qua app
                        <a href="#" className="extra-space">
                          Sacombank Pay
                        </a>
                        ,
                        <a href="#" className="extra-space">
                          mBanking
                        </a>
                        và
                        <a href="#" className="extra-space">
                          Internet Banking
                        </a>
                      </li>
                      <li className="data-section_list--item">
                        Trích nợ tự động từ tài khoản thanh toán (đối với khách
                        hàng có đăng ký)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="cmp-most-viewed">
            <h3 className="cmp-most-viewed__title">Tin khác</h3>
            <div className="cmp-most-viewed__list">
              <div className="most-viewed-item">
                <a href="" className="most-viewed-item_title">
                  Black Friday - Deal giữa &quot;ngày rực rỡ&quot;
                </a>
                <p className="most-viewed-item__info">26/11/2024</p>
              </div>
              <div className="most-viewed-item">
                <a href="" className="most-viewed-item_title">
                  Mở thẻ JCB – &quot;Kích hoạt&quot; vạn deal
                </a>
                <p className="most-viewed-item__info">11/09/2024</p>
              </div>
              <div className="most-viewed-item">
                <a href="" className="most-viewed-item_title">
                  Trọn lời tri ân - Ươm mầm tri thức
                </a>
                <p className="most-viewed-item__info">01/11/2024</p>
              </div>
              <div className="most-viewed-item">
                <a href="" className="most-viewed-item_title">
                  Ocean Waves Resort Cam Ranh
                </a>
                <p className="most-viewed-item__info">19/11/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relatedlist grid wide">
        <div className="cmp-related-promotions-list">
          <h3 className="cmp-related-promotions-list__title">
            Ưu đãi
            <span>liên quan</span>
          </h3>
        </div>
        <div className="cmp-related-promotions-list__content">
          <BodyItem
            picture={item1}
            title={"DealToday"}
            time1={"2024-12-01"}
            timeProcess={"2025-01-25T23:59:59"}
            time1Title={"01/12/2024"}
            time2Title={"25/01/2025"}
          />
          <BodyItem
            picture={item2}
            title={"Ocean Waves Resort Cam Ranh"}
            time1={"2024-11-19"}
            timeProcess={"2025-01-31T23:59:59"}
            time1Title={"19/11/2024"}
            time2Title={"31/10/2025"}
          />
          <BodyItem
            picture={item3}
            title={"Nội thất Sofa Xinh"}
            time1={"2024-10-01"}
            timeProcess={"2099-01-01T23:59:59"}
            time1Title={"01/10/2024"}
            time2Title={"01/01/2099"}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
