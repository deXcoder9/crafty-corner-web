import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './banner.css'
import bgImageTwo from '../../assets/wodebnsdfsdfsd.jpg'

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px] bg-[#caabab5e]"
      >
         <SwiperSlide className="flex">
          <div className="w-full h-full relative   first_slider rounded-lg">
            <div className="absolute text-left lg:w-[400px] text-white top-[30%] left-[7%] space-y-3">
              <h1 className="font__merriweather font-bold text-2xl lg:text-4xl text-white">
                 Home Decor
              </h1>
              <p className="text-gray-200 text-sm">
                Wooden home decor brings warmth and natural charm to any space.
                From rustic accents to modern designs, it adds texture and
                character, creating a cozy and inviting atmosphere while
                seamlessly blending with various interior styles.
              </p>
              {/* <button className="btn bg-white text-black border-none hover:text-white hover:bg-black">
                View Details
              </button> */}
                <button className="custom-btn-13 btn-13">Read More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="absolute text-left lg:w-[400px] text-white top-[30%] left-[7%] space-y-3">
              <h1 className="font__merriweather font-bold text-2xl lg:text-4xl text-white">
                 Home Decor
              </h1>
              <p className="text-gray-200 text-sm">
                Wooden home decor brings warmth and natural charm to any space.
                From rustic accents to modern designs, it adds texture and
                character, creating a cozy and inviting atmosphere while
                seamlessly blending with various interior styles.
              </p>
              {/* <button className="btn bg-white text-black border-none hover:text-white hover:bg-black">
                View Details
              </button> */}
                <button className="custom-btn-13 btn-13">Read More</button>
            </div>
              <div>
                <img className="bgImage" src={bgImageTwo}  alt="" />
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-around place-items-center h-[500px] ">
        <div className="w-[500px]">
        <h1 className="font__merriweather font-bold text-2xl lg:text-4xl text-black">
                 Home Decor
              </h1>
              <p className="text-gray-700 text-sm">
                Wooden home decor brings warmth and natural charm to any space.
                From rustic accents to modern designs, it adds texture and
                character, creating a cozy and inviting atmosphere while
                seamlessly blending with various interior styles.
              </p>
              {/* <button className="btn bg-white text-black border-none hover:text-white hover:bg-black">
                View Details
              </button> */}
                <button className="custom-btn-13 btn-13">Read More</button>
        </div>
        <div>
           <img className="w-[500px] h-[440px] rounded-xl" src="https://i.ibb.co/2WcHWT9/photo-1514053026555-49ce8886ae41-q-80-w-1887-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
