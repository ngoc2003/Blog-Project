// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import SwiperItem from "./SwiperItem";
import { useGetCategorize } from "../../hooks/useGetCategorize";
import { useCallback, useRef } from "react";
// import { doc } from "firebase/firestore";
export default function SwiperList({ data = "", className = "" }) {
  const sliderRef = useRef(null);

  const categorize = useGetCategorize();
  function count(name) {
    const item = categorize.find((item) => {
      return item.name === name;
    });
    return item.number;
  }
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.swiper.slideNext();
  }, []);
  SwiperCore.use([Navigation]);
  return (
    <div className={className}>
      {categorize &&
        categorize.length > 0 &&
        categorize.map((categorizeItem) => {
          return categorizeItem && categorizeItem.number != 0 ? (
            <div key={categorizeItem.name} className="overflow-hidden">
              <div className="relative text-xl font-semibold capitalize title-list ">
                {categorizeItem.name}
                <span className="ml-3 text-gray-400">
                  ({count(categorizeItem.name)})
                </span>
                <div className="navi">
                  <div className="prev " onClick={handlePrev}>
                    {"<"}
                  </div>
                  <div className="next " onClick={handleNext}>
                    {">"}
                  </div>
                </div>
              </div>
              <div>
                <Swiper
                  ref={sliderRef}
                  grabCursor="true"
                  watchOverflow=" true"
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  slidesPerView={1}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      
                    },
                    800: {
                      slidesPerView: 3,
                      
                    },
                    1150: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {data &&
                    data.length > 0 &&
                    data
                      .filter((item) => {
                        if (categorizeItem.name === item.categorize) {
                          return item;
                        }
                      })
                      .map((item) => (
                        <SwiperSlide key={item.id}>
                          <SwiperItem data={item}></SwiperItem>
                        </SwiperSlide>
                      ))}
                </Swiper>
              </div>
            </div>
          ) : (
            ""
          );
        })}
    </div>
  );
}
