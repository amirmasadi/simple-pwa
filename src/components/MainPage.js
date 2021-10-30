import "./mainPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard } from "swiper";

export default function MainPage() {
  SwiperCore.use([Keyboard]);

  return (
    <div className="main">
      <Swiper
        className="swiper-comtainer"
        direction={window.innerWidth < 1024 ? "vertical" : "horizontal"}
        slidesPerView={6}
        spaceBetween={0}
        keyboard={{ enabled: true }}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={0}
        slideToClickedSlide={true}
        virtualTranslate={true}
      >
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">online chat</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Slide 3</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Slide 4</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Slide 5</h3>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <h3 className="swiper-item-title">Slide 6</h3>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-item main-sidebar">
        <h3 className="swiper-item-title">amirAsadi</h3>
        <a href="https://heroicons.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="35px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p className="">Sign In</p>
        </a>
      </div>
    </div>
  );
}
