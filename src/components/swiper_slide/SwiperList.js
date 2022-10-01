// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperItem from "./SwiperItem";
import { useGetCategorize } from "../../hooks/useGetCategorize";
import { doc } from "firebase/firestore";
export default function SwiperList({ data = "" }) {
  const categorize = useGetCategorize();
  return (
    <>
      {categorize &&
        categorize.length > 0 &&
        categorize.map((categorizeItem) => {
          return categorizeItem && categorizeItem.number != 0 ? (
            <div key={categorizeItem.name}>
              <h4 className="text-xl font-semibold capitalize title-list">
                {categorizeItem.name}
              </h4>
              <Swiper spaceBetween={30} slidesPerView={4}>
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
          ) : (
            ""
          );
        })}
    </>
  );
}
