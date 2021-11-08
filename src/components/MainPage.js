import { useEffect, useState } from "react";
import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChatSec from "./chatSec/ChatSec";
import Header from "./Header";
import "./mainPage.css";
import ProjSec from "./projSec/ProjSec";

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
          <h3 className="swiper-item-title">Blog</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Amir Asadi</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Projects</h3>
          <ProjSec />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Contact</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">online chat</h3>
          <ChatSec />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
