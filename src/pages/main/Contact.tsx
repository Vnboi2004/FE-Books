import MainLayout from '../../components/layout/MainLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Contact = () => {
    return (
      <MainLayout>
        <div className='w-full h-screen py-16'>
          <div className='relative overflow-x-clip w-full h-full'>
            {/* Content left */}
            <div className='absolute top-0 left-0 bg-surface-1 w-full h-auto md:w-[calc(50%+32px)] z-[0] rounded-3xl'>
              <div className='p-12'>
                {/* Logo */}
                <img src="" alt=""  className='w-30 h-30 object-cover rounded-xl'/>
                {/* Text */}
                <div className='flex flex-col gap-4 mt-8'>
                  {/* Title */}
                  <h1 className='text-5xl text-primary font-bold'>ReadingHub</h1>
                  {/* Text content */}
                  <h2 className='text-4xl leading-tight text-primary font-bold'>Read Anytime, Anywhere</h2>
                  {/* Description */}
                  <p className='text-sm text-on-surface-variant'>Your favorite online book reading platform. Discover thousands of books, completely free and convenient!</p>
                  {/* Submit */}
                  <div>
                    <button className='px-6 py-4 font-bold text-on-primary bg-primary rounded-full hover:no-underline 
                    hover:bg-primary-shade active:rounded-xl duration-200 transition-all ease-linear cursor-pointer'>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Content right */}
            <div className='absolute -top-6 right-0 max-w-[740px] md:w-1/2 h-auto bg-surface-2 z-[1] rounded-3xl'>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {/* Card 1 */}
                <SwiperSlide className='py-8'>
                  <h1 className='text-5xl text-on-surface text-center font-bold py-10'>Contact us</h1>
                  <div className='flex flex-col gap-4 px-8 -translate-x-2'>
                    {/* Box 1 */}
                    <div className="flex gap-4">
                      <div className="flex basis-1/2 flex-none items-center gap-2 border px-4 py-10 border-outline-variant rounded-2xl">
                        <FaPhoneVolume className='text-primary text-lg'/>
                        <span className='text-on-surface text-sm'>+84 918 488 431</span>
                      </div>
                      <div className="flex basis-1/2 flex-none items-center gap-2 border px-4 py-10 border-outline-variant rounded-2xl">
                        <MdEmail className='text-primary text-lg'/>
                        <span className='text-on-surface text-sm'>tphung1724@gmail.com</span>
                      </div>
                    </div>
                    {/* Box 2 */}
                    <div className='flex gap-4'>
                      <div className='flex basis-1/2 flex-none items-center  gap-2 border px-4 py-10 border-outline-variant rounded-2xl'>
                        <BiLogoInstagramAlt className='text-primary text-lg'/>
                        <span className='text-on-surface text-sm'>phuochung_4</span>
                      </div>
                      <div className='flex basis-1/2 flex-none items-center  gap-2 border px-4 py-10 border-outline-variant rounded-2xl'>
                        <FaFacebookF className='text-primary text-lg'/>
                        <span className='text-on-surface text-sm'>Trương Phước Hưng</span>
                      </div>
                    </div>
                  </div>
                  {/* Note if spam messages*/}
                  <p className='py-10 text-sm text-center text-on-surface-variant'>Please only contact us if you have a clear purpose. We do not accept spam, advertisements, or unrelated messages</p>
                </SwiperSlide>             
                {/* Card 2 */}
                <SwiperSlide>Google map</SwiperSlide>
                {/* Card 3 */}
                <SwiperSlide>Get started</SwiperSlide>
              </Swiper>
              </div>
            </div>
          </div>       
      </MainLayout>
    )
}

export default Contact
