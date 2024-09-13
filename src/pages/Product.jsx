import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
  const images = ["/img1.webp", "/img2.webp", "/img3.webp"];
  return (
    <div>
      <h2 className="text-2xl text-center">
        উৎসবে বা জন্মদিনে উপহার পাঠান আমাদের মাধ্যমে।
      </h2>

      <div className="my-10 max-w-screen-sm mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
        //   navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          {images.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center w-full">
              <img className="h-72 w-60 bg-cover" src={el} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
