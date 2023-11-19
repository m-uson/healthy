import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { swiper } from "../constants/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import IconNext from "../assets/image/icon-next.svg";
import IconPrev from "../assets/image/icon-prev.svg";

export const About = () => {
  return (
    <section className="mt-[-220px] sm:mt-0 mos:mt-[-100px] relative z-10">
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="max-w-[1050px] bg-c-25 mt-28 m-auto min-h-[736px] p-[65px] mos:px-[20px]"
        >
          <div className="flex items-center justify-center mb-8">
            <p className="mix-blend-normal text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[80px] mos:text-[70px] mo:text-[60px]">
              About
            </p>
            <p className="absolute text-[30px] text-c-D9 tracking-[0.3em] sm:text-[23px] mos:text-[20px] mos:tracking-[0.2em] mo:text-[16px] mo:tracking-[0.1em]">
              The Basics Of Healthy Food
            </p>
          </div>
          <p className="text-[16px] text-c-A6 max-w-[700px] text-center m-auto mos:text-[14px] mb-14">
            In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint
            ea aliquip aliquip consectetur voluptate est. Eu minim dolore
            laboris enim mollit voluptate irure esse aliquip.
          </p>

          <>
            <Swiper
              cssMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {swiper &&
                swiper.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="w-full h-full bg-cover"
                      src={img}
                      alt="img"
                    />
                  </SwiperSlide>
                ))}

              <div className="swiper-button-next h-16 w-16 sm:hidden">
                <img src={IconNext} alt="next" />
              </div>
              <div className="swiper-button-prev h-16 w-16 sm:hidden">
                <img src={IconPrev} alt="prev" />
              </div>
              <div className="swiper-pagination hidden sm:block"></div>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};
