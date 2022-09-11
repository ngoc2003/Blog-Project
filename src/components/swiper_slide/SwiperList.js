// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperItem from "./SwiperItem";

export default function SwiperList({ data, title = "ReactJs" }) {
  return (
    <>
      {title ? <h4 className="text-xl font-semibold title-list">{title}</h4> : ""}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <SwiperSlide>
              <SwiperItem data={item} key={item.id}></SwiperItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
