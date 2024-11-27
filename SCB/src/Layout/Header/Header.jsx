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
  TbListCheck,
  TbGift,
  TbCalendarDollar,
} from "react-icons/tb";
import { FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
import { GiTripleBeak } from "react-icons/gi";
import { FiCreditCard, FiHome } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";

import {
  MdAddCard,
  MdLink,
  MdPayment,
  MdGridView,
  MdOutlineShoppingCart,
  MdHealthAndSafety,
  MdOutlineTransferWithinAStation,
  MdOutlineContactPhone,
} from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { BiCreditCardAlt, BiStore } from "react-icons/bi";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsBagPlus, BsBarChart } from "react-icons/bs";
import { PiCar, PiStudent } from "react-icons/pi";
import { LuUserSquare, LuWalletCards } from "react-icons/lu";

const Header = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowIndividual, setIsShowIndividual] = useState(false);
  const [isShowIndividual2, setIsShowIndividual2] = useState(false);

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
          <div
            className="main-navigation"
            onMouseLeave={() => {
              setIsShowPopup(false);
            }}
          >
            <div className="main-navigation__wrapper grid wide">
              <div className="main-navigation__box">
                <div className="main-navigation__box-logo">
                  <a href="#">
                    <img
                      src="https://www.sacombank.com.vn/content/dam/sacombank/images/lien-he/sacombank-logo.svg"
                      alt="logo.img"
                    />
                  </a>
                </div>
                <ul
                  className="main-navigation__box-menu"
                  onMouseEnter={() => setIsShowPopup(true)}
                >
                  <li
                    className="main-navigation__box-menu-item"
                    onMouseEnter={() => {
                      setIsShowIndividual(true);
                      setIsShowIndividual2(false);
                    }}
                  >
                    Cá nhân
                  </li>
                  <li
                    className="main-navigation__box-menu-item"
                    onMouseEnter={() => {
                      setIsShowIndividual2(true);
                      setIsShowIndividual(false);
                    }}
                  >
                    Doanh Nghiệp
                  </li>
                </ul>

                {isShowPopup && (
                  <>
                    <div className="menu__dropdown-popup">
                      <div className="menu__dropdown-popup-item">
                        <div className="menu__dropdown-item--sidebar">
                          {isShowIndividual ? (
                            <ul className="menu__dropdown-sidebar--list">
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="0"
                              >
                                <p>Tài khoản</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="0"
                                >
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
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
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
                                      <MdLink
                                        color="#2a81d0"
                                        className="icon"
                                      />
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
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
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
                                      <TbWorld
                                        color="#2a81d0"
                                        className="icon"
                                      />
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
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
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
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
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
                                      <FiHome
                                        color="#2a81d0"
                                        className="icon"
                                      />
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
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
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
                                <p>Dịch vụ</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <MdOutlineTransferWithinAStation
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ ngoại hối
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <FaMoneyBillTransfer
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ chuyển tiền
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <FaHandHoldingUsd
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ khác
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <RiMoneyDollarCircleLine
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Kiều hối
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="7"
                              >
                                <p>Sacombank Imperial</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbListCheck
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Điều kiện tham gia
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbGift
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Đặc quyền Sacombank Imperial
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <LiaClipboardListSolid
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Sản phẩm dịch vụ
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          ) : isShowIndividual2 ? (
                            <ul className="menu__dropdown-sidebar--list">
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="0"
                              >
                                <p>Tài khoản & dịch vụ</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="0"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <LuUserSquare
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Tài khoản thanh toán
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <LuWalletCards
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ tài khoản
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="1"
                              >
                                <p>Ngân hàng số</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <AiFillBank
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Ngân hàng trực tuyến
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <MdOutlineContactPhone
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Phương thức xác thực
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="3"
                              >
                                <p>Thẻ doanh nghiệp</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <BiCreditCardAlt
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Thẻ tín dụng
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <BiCreditCardAlt
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Thẻ thanh toán
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="4"
                              >
                                <p>Tín dụng</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbCalendarDollar
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Thấu chi doanh nghiệp
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <BsBagPlus
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Vay trung dài hạn
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <BiStore
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Vay trả góp doanh nghiệp vừa và nhỏ
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <PiCar color="#2a81d0" className="icon" />
                                      <p className="sub-menu__dropdown-info-content">
                                        Vay mua ô tô doanh nghiệp
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <FaHandHoldingUsd
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Vay nhanh SMEs
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="5"
                              >
                                <p>Bảo lãnh</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbShieldDollar
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Bảo lãnh ngân hàng
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <MdHealthAndSafety
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Bảo lãnh thuế xuất nhập khâu
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
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="6"
                              >
                                <p>Dịch vụ</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <MdOutlineTransferWithinAStation
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ ngoại hối
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <FaMoneyBillTransfer
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ chuyển tiền
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <FaHandHoldingUsd
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Dịch vụ khác
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <RiMoneyDollarCircleLine
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Kiều hối
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="menu__dropdown-sidebar--item"
                                data-index="7"
                              >
                                <p>Sacombank Imperial</p>
                                <div
                                  className="sub-menu-content"
                                  data-index="1"
                                >
                                  <div className="sub-menu__dropdown-item--content">
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbListCheck
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Điều kiện tham gia
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <TbGift
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Đặc quyền Sacombank Imperial
                                      </p>
                                    </div>
                                    <div className="sub-menu__dropdown-info--item">
                                      <LiaClipboardListSolid
                                        color="#2a81d0"
                                        className="icon"
                                      />
                                      <p className="sub-menu__dropdown-info-content">
                                        Sản phẩm dịch vụ
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          ) : null}
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
