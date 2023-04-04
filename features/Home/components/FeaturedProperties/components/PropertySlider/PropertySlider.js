import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay,Pagination,Navigation } from "swiper";
import PropertyCard from "@/features/common/modules/PropertyCard/PropertyCard";
import "swiper/css";
import "swiper/navigation";
import "swiper/pagination";

const PropertySlider=({featuredProperties})=>{
    return<Swiper
    slidesPerView={3}
    spaceBetween={10}
    loop={true}
    loopFillGroupWithBlank={true}
    centeredSlides={true}
    autoplay={{delay:2000,disableOnInteraction:true}}
    pagination={{dynamicBullets:true}}
    modules={[Autoplay,Pagination]}
    className="mySwiper"
    ></Swiper>
};
export default PropertySlider;