import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import imageHistory from '../../assets/images/History.jpg';
import imageArt from "../../assets/images/Art.jpg";
import imageTechnology from "../../assets/images/Technology.jpg";
import imageBiography from "../../assets/images/Biography.avif"

const books = [
    {
      title: "Lịch sử",
      image: imageHistory,
    },
    {
      title: "Nghệ thuật",
      image: imageArt,
    },
    {
      title: "Công Nghệ",
      image: imageTechnology,
    },
    {
        title: "Tiểu sử",
        image: imageBiography,
    }
];

const Banner = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="w-full max-w-2xl mx-auto py-10 space-y-4">
          {/* Swiper chính (ảnh sách) */}
          <Swiper
            modules={[Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index}>
                <img src={book.image} alt={book.title} className="w-full h-80 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
    
          {/* Swiper thumbs (tên sách/thể loại) */}
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={4}
            watchSlidesProgress={true}
            className="thumb-swiper cursor-pointer"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-2 py-1 bg-indigo-100 text-indigo-800 rounded-xl text-sm hover:bg-indigo-200 transition">
                  {book.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
};

export default Banner
