import { useEffect, useState } from "react";
import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSec from "./blogSec/BlogSec";
import ChatSec from "./chatSec/ChatSec";
import CvSec from "./CvSec/CvSec";
import Header from "./Header";
import "./mainPage.css";
import ProjSec from "./projSec/ProjSec";

export default function MainPage() {
  SwiperCore.use([Keyboard]);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // localStorage.getItem("theme")
       setTheme(localStorage.getItem("theme"))
      // : setTheme("light");
  }, []);

  function themeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }

  return (
    <div className={`main ${theme}`}>
      <Header themeToggle={themeToggle} theme={theme} />
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
        initialSlide={3}
        slideToClickedSlide={true}
        virtualTranslate={true}
      >
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Works</h3>
          <ProjSec />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Blog</h3>
          <BlogSec />
        </SwiperSlide>
        {/* <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Contact</h3>
        </SwiperSlide> */}
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Live chat</h3>
          <ChatSec />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Welcome</h3>
          <CvSec />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
