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
            <div className='absolute -top-6 right-0 max-w-[740px] md:w-1/2 h-full z-[1]'>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-full h-full"
              >
                {/* Card 1 */}
                <SwiperSlide className='py-8 h-full bg-surface-2 rounded-3xl'>
                  {/* Title */}
                  <h1 className='text-5xl text-on-surface text-center font-bold py-10'>Git in Touch</h1>
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
                <SwiperSlide className='py-8 h-full bg-surface-2 rounded-3xl'>
                  {/* Title */}
                  <h1 className='text-5xl text-on-surface text-center font-bold pt-10'>Find Us Here</h1>
                  {/* Description */}
                  <p className='text-sm text-on-surface-variant text-center py-6'>Visit our office or reach out to us through the map below.</p>
                  {/* Google maps */}
                  <div className="px-8">
                    <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.685772993273!2d106.75874497451784!3d10.835341558105318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527ae7b121297%3A0x9fda1a8492c5074d!2zNDgvMy8zQSDEkC4gU-G7kSAzLCBUcsaw4budbmcgVGjhu40sIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1745858378946!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                {/* Card 3 */}
                <SwiperSlide className='py-8 h-full bg-surface-2 rounded-3xl'>
                  <h1 className='text-5xl text-on-surface text-center font-bold py-10'>Send Us a Message</h1>
                  <form action="" className='px-8 flex flex-col gap-4'>
                    {/* Your name */}
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Name</label>
                      <input type="text" className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none'/>
                    </div>
                    {/* Your email */}
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Email</label>
                      <input type="email" className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none'/>
                    </div>
                    {/* Your message */}
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Message</label>
                      <textarea name="" className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none resize-none'></textarea>
                    </div>
                    {/* Submit */}
                    <div className='flex justify-end'>
                      <button className='px-6 py-4 font-bold text-on-primary bg-primary rounded-full hover:no-underline 
                      hover:bg-primary-shade active:rounded-xl duration-200 transition-all ease-linear cursor-pointer'>
                        Submit
                      </button>
                    </div>
                  </form>
                </SwiperSlide>
              </Swiper>
              </div>
            </div>
          </div>       
      </MainLayout>
    )
}

export default Contact
