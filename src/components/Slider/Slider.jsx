import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 
const Slider = () => {
    return (
        <div className='mt-12'>
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
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className="bg-[url('/landscapePainting.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Landscape Painting</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/PortraitDrawing.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col items-end justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#48d6a7]">Portrait Drawing</h1>
        <p className="text-red-600 text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/WatercolourPainting.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Watercolour Painting</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/OilPainting.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-gray-100">Oil Painting</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/CharcoalSketching.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Charcoal Sketching</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/CartoonDrawing.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[600px] bg-cover flex flex-col justify-center bg-center rounded-md">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">Cartoon Drawing</h1>
        <p className="text-white text-base ">
          Your key to finding the perfect nest. We specialize in sales and
          <br /> rentals of residential properties, making your dream home a
          sweet reality
        </p>
        <p></p>
        
      </div>
        </SwiperSlide>
 
      </Swiper>
        </div>
    );
};

export default Slider;