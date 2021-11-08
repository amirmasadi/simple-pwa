import { useEffect, useState } from "react";
import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChatSec from "./chatSec/ChatSec";
import Header from "./Header";
import "./mainPage.css";

export default function MainPage() {
  SwiperCore.use([Keyboard]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("dark")
      ? localStorage.getItem("dark")
      : false;
    setDark(theme);
  }, []);

  function themeToggle() {
    setDark(!dark);
    localStorage.setItem("dark", dark);
  }

  return (
    <div className={`main ${dark && "dark"}`}>
      <Header themeToggle={themeToggle} dark={dark} />
      <Swiper
        touchMoveStopPropagation={false}
        touchRatio={1}
        className="swiper-comtainer"
        direction={window.innerWidth < 1024 ? "vertical" : "horizontal"}
        slidesPerView={6}
        spaceBetween={0}
        keyboard={{ enabled: true }}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={2}
        slideToClickedSlide={true}
        virtualTranslate={true}
      >
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">online chat</h3>
          <ChatSec />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">in process</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">in process</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">in process</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">in process</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
