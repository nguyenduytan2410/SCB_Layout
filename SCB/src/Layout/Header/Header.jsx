import { useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import { TbUserDollar, TbTransactionDollar } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiTripleBeak } from "react-icons/gi";
const Header = () => {
  const [isShowIndividual, setIsShowIndividual] = useState(false);
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
              onMouseLeave={() => setIsShowIndividual(false)}
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
                      <div className="menu__dropdown-item--sidebar">
                        <ul className="menu__dropdown-sidebar--list">
                          <li className="menu__dropdown-sidebar--item">
                            Tài khoản
                          </li>
                          <li className="menu__dropdown-sidebar--item">Thẻ</li>
                          <li className="menu__dropdown-sidebar--item">
                            Ngân hàng số
                          </li>
                          <li className="menu__dropdown-sidebar--item">
                            Tiết kiệm
                          </li>
                          <li className="menu__dropdown-sidebar--item">Vay</li>
                          <li className="menu__dropdown-sidebar--item">
                            Bảo hiểm
                          </li>
                          <li className="menu__dropdown-sidebar--item">
                            Dịch vụ
                          </li>
                          <li className="menu__dropdown-sidebar--item">
                            Sacombank Imperial
                          </li>
                        </ul>
                      </div>
                      <div className="sub-menu-content">
                        <div className="sub-menu__dropdown-item--content">
                          <div className="sub-menu__dropdown-info--item">
                            <TbUserDollar color="#2a81d0" />
                            <p>Tài khoản thanh toán</p>
                          </div>
                          <div className="sub-menu__dropdown-info--item">
                            <TbTransactionDollar color="#2a81d0" />
                            <p>Combo đa lợi</p>
                          </div>
                          <div className="sub-menu__dropdown-info--item">
                            <FaHandHoldingHeart color="#2a81d0" />
                            <p>Gói toàn khoản An Sinh Xã Hội</p>
                          </div>
                          <div className="sub-menu__dropdown-info--item">
                            <GiTripleBeak color="#2a81d0" />
                            <p>Combo Hi-Tek</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="main-navigation__box button">
                <FaSearch className="w-6 h-6" />
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
