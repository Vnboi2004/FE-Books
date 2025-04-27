import MainLayout from '../../components/layout/MainLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
    return (
      <MainLayout>
        <div className='w-full h-screen'>
          <h1 className='py-16 text-5xl text-on-surface text-center font-bold'>Liên hệ với chúng tôi</h1>
          <div className='relative overflow-x-clip w-full h-full'>
            {/* Content left */}
            <div className='absolute top-0 left-0 bg-surface-1 w-full h-auto md:w-[calc(50%+32px)] z-[0]'>
              <div>
                {/* Logo */}
                <img src="" alt="" />
                {/* Text */}
                <div>
                  {/* Title */}
                  <h1>ReadingHub</h1>
                  {/* Text content */}
                  <h2>Read Anytime, Anywhere</h2>
                  {/* Description */}
                  <p>Your favorite online book reading platform. Discover thousands of books, completely free and convenient!</p>
                  {/* Submit */}
                  <button>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            {/* Content right */}
            <div className='absolute top-0 right-0 max-w-[740px] md:w-1/2 h-auto bg-surface-2 z-[1]'>
              <div>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {/* Card 1 */}
                <SwiperSlide>
                  <h1 className='text-5xl text-on-surface text-center font-bold'>Liên hệ với chúng tôi</h1>
                  <div className='flex flex-col gap-4'>
                    {/* Box 1 */}
                    <div className='flex items-center gap-4'>
                      <div className='border border-outline-variant round-xl'>
                        <FaPhoneVolume/>
                        <span>+84 918 488 431</span>
                      </div>
                      <div className='border border-outline-variant round-xl'>
                        <MdEmail/>
                        <span>tphung1724@gmail.com</span>
                      </div>
                    </div>
                    {/* Box 2 */}
                    <div className='flex items-center gap-4'>
                      <div className='border border-outline-variant round-xl'>
                        <IoLocation />
                        <span>48/3/3A Đ. Số 3, Trường Thọ, Thủ Đức, Hồ Chí Minh, Việt Nam</span>
                      </div>
                      <div className='border border-outline-variant round-xl'>
                        <FaFacebookF/>
                        <span>Trương Phước Hưng</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Card 2 */}
                <SwiperSlide>Slide 2</SwiperSlide>
                {/* Card 3 */}
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>

              </div>
            </div>
          </div>
        </div>        
      </MainLayout>
    )
}

export default Contact
