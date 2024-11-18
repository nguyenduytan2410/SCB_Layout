import { useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import {
  TbUserDollar,
  TbTransactionDollar,
  TbCreditCardPay,
  TbWorld,
  TbWorldCode,
  TbHeartRateMonitor,
  TbDirectionArrows,
  TbShieldDollar,
  TbShieldCheckered,
  TbUserShield,
  TbWorldHeart,
} from "react-icons/tb";
import { FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
import { GiTripleBeak } from "react-icons/gi";
import { FiCreditCard, FiHome } from "react-icons/fi";
import {
  MdAddCard,
  MdLink,
  MdPayment,
  MdGridView,
  MdOutlineShoppingCart,
  MdHealthAndSafety,
} from "react-icons/md";
import { BiCreditCardAlt } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { PiCar, PiStudent } from "react-icons/pi";
const Header = () => {
  const [isShowIndividual, setIsShowIndividual] = useState(false);

  document
    .querySelectorAll(
      ".menu__dropdown-sidebar--list .menu__dropdown-sidebar--item"
    )
    .forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        document
          .querySelectorAll(".sub-menu-content")
          .forEach((menu, menuIndex) => {
            menu.style.display = menuIndex === index ? "block" : "none";
          });
      });
      item.addEventListener("mouseout", () => {
        document.querySelectorAll(".sub-menu-content").forEach((menu) => {
          menu.style.display = "none";
        });
      });
    });
  return (
    <>
      <header>
        <div className="header">
          <div className="sub-navigation__wrapper">
            <div className="navigation__wrapper__left">
              <ul className="sub__nav-list">
                <li className="sub__nav-item">Về chúng tôi</li>
                <li className="sub__nav-item">Nhà đầu tư</li>
                <li className="sub__nav-item">Tin tức</li>
                <li className="sub__nav-item">Thanh lý tài sản</li>
              </ul>
            </div>
            <div className="navigation__wrapper__right">
              <ul className="sub__nav-list">
                <li className="sub__nav-item">Lãi suất</li>
                <li className="sub__nav-item">Tỷ giá</li>
                <li className="sub__nav-item">ATM/ĐGD</li>
                <li className="sub__nav-item">Hỗ trợ</li>
                <li className="sub__nav-item">Hotline: 1800 5858 88</li>
              </ul>
              <ul className="sub__nav-list">
                <li className="sub__nav-item item-aux">EN</li>
              </ul>
            </div>
          </div>
          <div className="main-navigation">
            <div
              className="main-navigation__wrapper grid wide"
              // onMouseLeave={() => setIsShowIndividual(false)}
            >
              <div className="main-navigation__box">
                <div className="main-navigation__box-logo">
                  <a href="#">
                    <img
                      src="https://www.sacombank.com.vn/content/dam/sacombank/images/lien-he/sacombank-logo.svg"
                      alt="logo.img"
                    />
                  </a>
                </div>
                <ul className="main-navigation__box-menu">
                  <li
                    className="main-navigation__box-menu-item"
                    onMouseEnter={() => setIsShowIndividual(true)}
                  >
                    Cá nhân
                  </li>
                  <li className="main-navigation__box-menu-item">
                    Doanh Nghiệp
                  </li>
                </ul>
                {isShowIndividual && (
                  <>
                    <div className="menu__dropdown-popup">
                      <div className="menu__dropdown-popup-item">
                        <div className="menu__dropdown-item--sidebar">
                          <ul className="menu__dropdown-sidebar--list">
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="0"
                            >
                              <p>Tài khoản</p>
                              <div className="sub-menu-content" data-index="0">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbUserDollar
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Tài khoản thanh toán
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbTransactionDollar
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Combo đa lợi
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <FaHandHoldingHeart
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Gói toàn khoản An Sinh Xã Hội
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <GiTripleBeak
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Combo Hi-Tek
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="1"
                            >
                              <p>Thẻ</p>
                              <div className="sub-menu-content" data-index="1">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <FiCreditCard
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Thẻ tín dụng
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdAddCard
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Thẻ tích hợp
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdLink color="#2a81d0" className="icon" />
                                    <p className="sub-menu__dropdown-info-content">
                                      Thẻ liên kết
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbCreditCardPay
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Thẻ thanh toán
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <BiCreditCardAlt
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Thẻ trả trước
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <FaHandHoldingUsd
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Dịch vụ thẻ
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="2"
                            >
                              <p>Ngân hàng số</p>
                              <div className="sub-menu-content" data-index="1">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdPayment
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Sacombank Pay
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbWorld color="#2a81d0" className="icon" />
                                    <p className="sub-menu__dropdown-info-content">
                                      Internet Banking
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbHeartRateMonitor
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      STM - Máy giao dịch thông minh
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdGridView
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Các dịch vụ khác
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="3"
                            >
                              <p>Tiết kiệm</p>
                              <div className="sub-menu-content" data-index="1">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <FaMoneyBillTrendUp
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Lãi xuất cao
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbWorldCode
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Trực tuyến
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbDirectionArrows
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Linh hoạt
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="4"
                            >
                              <p>Vay</p>
                              <div className="sub-menu-content" data-index="1">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdOutlineShoppingCart
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Mua sắm tiêu dùng
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <BsBarChart
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Kinh doanh
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <FiHome color="#2a81d0" className="icon" />
                                    <p className="sub-menu__dropdown-info-content">
                                      Mua nhà
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <PiCar color="#2a81d0" className="icon" />
                                    <p className="sub-menu__dropdown-info-content">
                                      Mua xe
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <PiStudent
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Du học
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="5"
                            >
                              <p>Bảo hiểm</p>
                              <div className="sub-menu-content" data-index="1">
                                <div className="sub-menu__dropdown-item--content">
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbShieldDollar
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Bảo hiểm nhân thọ
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <MdHealthAndSafety
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Bảo hiểm tín dụng
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbShieldCheckered
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Bảo hiểm tài sản
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbWorldHeart
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Bảo hiểm online
                                    </p>
                                  </div>
                                  <div className="sub-menu__dropdown-info--item">
                                    <TbUserShield
                                      color="#2a81d0"
                                      className="icon"
                                    />
                                    <p className="sub-menu__dropdown-info-content">
                                      Bảo hiểm sức khoẻ
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="6"
                            >
                              Dịch vụ
                            </li>
                            <li
                              className="menu__dropdown-sidebar--item"
                              data-index="7"
                            >
                              Sacombank Imperial
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="main-navigation__box button">
                <FaSearch className="icon" />
                <p className="main-navigation__box-btn">Internet Banking</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
