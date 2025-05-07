import MainLayout from '../../components/layout/MainLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { Swiper as SwiperType } from 'swiper';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Contact = () => {
  // Open slider
  const [openSider, setOpenSider] = useState(false);
  
  // Button next, prev slider
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);


  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setCurrentIndex(swiper.realIndex + 1);
    setTotalSlides(swiper.slides.length - (swiper.loopedSlides || 0));

    console.log("Rendering ContactForm");

    // Cập nhật lại khi slide thay đổi
    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      setCurrentIndex(swiper.realIndex + 1);
    });
  };

  // form data contact submit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData, // Giữ nguyên các giá trị cũ
      [e.target.name]: e.target.value, // Cập nhật giá trị mới
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  


  return (
    <MainLayout>
      <div className='w-full h-screen py-16'>
        <div className='relative w-full h-full'>
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
                  <button 
                    onClick={() => setOpenSider(!openSider)}
                    className='px-6 py-4 font-bold text-on-primary bg-primary rounded-full hover:no-underline 
                  hover:bg-primary-shade active:rounded-xl duration-200 transition-all ease-linear cursor-pointer'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Content right */}
          <AnimatePresence>
            {openSider && (
              <motion.div 
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1  }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='absolute -top-10 right-0 max-w-[740px] md:w-1/2 h-full z-[1]'>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  onSwiper={handleSwiper}
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
                    <form 
                      onSubmit={handleSubmit}
                      className='px-8 flex flex-col gap-4'>
                      {/* Your name */}
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Name</label>
                        <input 
                          type="text" 
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none'/>
                      </div>
                      {/* Your email */}
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Email</label>
                        <input 
                          type="email" 
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none'/>
                      </div>
                      {/* Your message */}
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-sm text-on-surface-variant pl-2'>Your Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required 
                          className='w-full p-3 border border-outline rounded-lg text-on-surface outline-none resize-none'></textarea>
                      </div>
                      {/* Submit */}
                      <div className='flex justify-end'>
                        <button 
                          type='submit'
                          className='px-6 py-4 font-bold text-on-primary bg-primary rounded-full hover:no-underline 
                        hover:bg-primary-shade active:rounded-xl duration-200 transition-all ease-linear cursor-pointer'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </SwiperSlide>
                </Swiper>
                {/* Button prev slider */}
                <button
                  disabled={isBeginning} 
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={`absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 cursor-pointer z-[99] 
                  hover:shadow-navigation duration-300 transition-all ease-linear rounded-xl 
                  ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <FiChevronLeft className='text-5xl text-primary'/>
                </button>
                {/* Button next slider */}
                <button 
                  disabled={isEnd}
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 cursor-pointer z-[99] 
                  hover:shadow-navigation duration-300 transition-all ease-linear rounded-xl 
                  ${isEnd? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <FiChevronRight className='text-5xl text-primary'/>
                </button>
                {/* Page silder */}
                <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-[99]'>
                  {Array.from({ length: totalSlides}).map((_, index) => (
                    <button 
                      onClick={() => swiperRef.current?.slideTo(index)}
                      key={index} 
                      className={`w-2 h-2 rounded-full duration-200 transition-all ease-linear cursor-pointer ${index === currentIndex - 1 ? 'bg-primary' : 'bg-on-surface'}`}>
                    </button>
                  ))}
                </div>
              </motion.div> 
            )}
          </AnimatePresence>
        </div>
      </div>       
    </MainLayout>
  )
}

export default Contact
