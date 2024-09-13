import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
  const images = ["/img1.webp", "/img2.webp", "/img3.webp"];
  
  return (
    <div>
      <h2 className="text-2xl text-center p-1">
        উৎসবে বা জন্মদিনে উপহার পাঠান আমাদের মাধ্যমে।
      </h2>
      <div className="space-y-1 -rotate-45 absolute top-0 -left-96">
        <div className="h-2 w-screen bg-[#780000]" />
        <div className="h-2 w-screen bg-[#780000]" />
      </div>

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

      <div className="max-w-screen-sm mx-auto p-1">
        <p>
          এটি একটি সুন্দর এবং প্রিমিয়াম মানের শাড়ি। এই শাড়িটি ১০০% [সামগ্রী,
          যেমন সিল্ক, কটন, জামদানি ইত্যাদি] দিয়ে তৈরি। সামগ্রীর গুণমান অত্যন্ত
          উন্নত, যা আপনাকে আরামদায়ক এবং স্টাইলিশ অনুভূতি দেবে। শাড়িটির হাতে
          বোনা জটিল নকশা এবং রঙের সমন্বয় অত্যন্ত নিখুঁত, যা আপনার সৌন্দর্যকে
          আরও বর্ণিল করে তুলবে। এই শাড়িটি যে কোনও বিশেষ অনুষ্ঠানের জন্য
          উপযুক্ত।
        </p>
      </div>

      <form className="max-w-screen-sm mx-auto my-10">
        <button type="button" className="bg-[#C1121F] hover:bg-[#C1121F]/80 duration-300 px-4 py-2 text-xl">এখনি কিনুন</button>
      </form>
    </div>
  );
};

export default Product;
