import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { banners } from '../../data';




const Banner = () => {

    return (
        <div className="mx-auto py-16"> 
           <h1 className="text-5xl text-on-surface text-center font-bold pb-16">Popular Categories You Might Like</h1>
            <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 0,
                stretch: 60,
                depth: 100,
                modifier: 2.5,
            }}
            className="w-full"
            >
            {banners.map((banner) => (
                <SwiperSlide key={banner.id}>                                                                                                           
                <div className="px-6 py-10 text-center text-xl bg-surface-1 text-on-surface font-semibold border border-outline-variant rounded-xl transition-all duration-300 cursor-pointer">
                    {banner.category}
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            
        </div>
    );
};

export default Banner
