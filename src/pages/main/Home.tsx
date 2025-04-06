import { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/layout/MainLayout"
import { GoogleBookItem } from "../../types/googleBooks.types";
import { googleBooksApi } from "../../api/googleBooks.api";
import { IoSearchOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { TiPinOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS cơ bản
import 'swiper/css/pagination'; // nếu dùng phân trang
import 'swiper/css/navigation'; // nếu dùng nút điều hướng
import { Swiper as SwiperType } from 'swiper';

import { Pagination, Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface HomeProps {
    subject?: string;
};


const Home: React.FC<HomeProps> = ({subject = 'history'}) => {

    const [books, setBooks] = useState<GoogleBookItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const swiperRef = useRef<SwiperType>();


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await googleBooksApi.getBooksBySubject(subject, 40);
                setBooks(data.items || []);
                console.log(data);
            } catch (error) {
                console.error('Lỗi khi lấy sách: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [subject]);

    if (loading) return <p>Đang tải sách...</p>;
 
    return (
        <MainLayout>
            {/* Search book */}
            <div className="py-10 flex justify-center">
                <div className="relative w-full max-w-xl">
                    <input type="search" placeholder="Search book at here..." className="outline-none bg-slate-100 px-4 py-2.5 rounded-full w-full"/>
                    <button className="absolute p-2 rounded-full top-1/2 -translate-y-1/2 right-2 bg-[#3E92CC] text-white cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out">
                        <IoSearchOutline/>
                    </button>
                </div>
            </div>
            {/* History */}
            <div className="py-10 flex flex-col gap-6">
                {/* Categories */}
                {/* Header */}
                <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="p-2 rounded-full bg-[#3E92CC] cursor-pointer group">
                            <FiChevronLeft className="text-white group-hover:-translate-x-1 duration-300 transition-transform ease-in-out"/>
                        </button>
                        <button 
                            onClick={() => swiperRef.current?.slideNext()}
                            className="p-2 rounded-full bg-[#3E92CC] cursor-pointer group">
                            <FiChevronRight className="text-white group-hover:translate-x-1 duration-300 transition-transform ease-in-out"/>
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className="">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={5}
                        spaceBetween={15}
                        modules={[Pagination, Navigation]}
                        className=""
                        >
                            {books.map((book) => (
                                <SwiperSlide key={book.id}>
                                    <div className="w-full border border-gray-300 rounded-sm bg-[#3E92CC]/15 relative cursor-pointer">
                                        <TiPinOutline className="absolute -top-1 -right-1 text-2xl"/>
                                        <div className="p-4 w-full flex flex-col border-4 border-white">
                                            {/* image */}
                                            <img
                                                src={book.volumeInfo.imageLinks?.thumbnail || ''}   
                                                alt={book.volumeInfo.title}
                                                className="h-56 object-cover rounded-md mb-2"
                                            />
                                            <div className="flex flex-col items-start gap-1">
                                                {/* Title */}
                                                <h3 className="font-semibold line-clamp-1">{book.volumeInfo.title}</h3>
                                                {/* authors */}
                                                <p className="text-sm text-gray-600 line-clamp-1">
                                                    {book.volumeInfo.authors?.join(', ') || 'Tác giả không rõ'}
                                                </p>
                                                {/* published date */}
                                                <p className="text-sm">{book.volumeInfo.publishedDate}</p>
                                                {/* averageRating */}
                                                <div className='flex items-center gap-2'>
                                                    <div className='flex items-center'>
                                                        {[...Array(5)].map((_, index) => (
                                                            <TiStarFullOutline key={index} className={` ${index < book.volumeInfo.averageRating ? "text-yellow-400" : "text-gray-300"}`}/>
                                                        ))}
                                                    </div>
                                                    <span className='text-sm text-gray-600'>({book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </MainLayout>
    )
}

export default Home
