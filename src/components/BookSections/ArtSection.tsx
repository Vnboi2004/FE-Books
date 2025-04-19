import { useEffect, useRef, useState } from "react";
import { GoogleBookItem } from "../../types/googleBooks.types";
import { googleBooksApi } from "../../api/googleBooks.api";
import { TiStarFullOutline } from "react-icons/ti";
import { TiPinOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS cơ bản
import 'swiper/css/pagination'; // nếu dùng phân trang
import 'swiper/css/navigation'; // nếu dùng nút điều hướng
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css/grid';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";


interface HistorySectionProps {
    subject?: string;
};

const ArtSection: React.FC<HistorySectionProps> = ({ subject = 'art' }) => {

    const { t } = useTranslation('home');
    
    const [books, setBooks] = useState<GoogleBookItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const swiperRef = useRef<SwiperType>(null);


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
        <div className="py-16">
            <div className="py-10 flex flex-col gap-6">
                {/* Categories */}
                <div className="flex items-center gap-4">
                    <div className="w-2 h-14 bg-primary rounded-md"></div>
                    <h1 className="text-3xl text-inverse-surface font-semibold">{t('categories.art')}</h1>
                </div>
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
                        key={books.length}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerGroup={5}
                        slidesPerView={5}
                        // loop={true}
                        grid={{
                            rows: 2, // gồm 2 dòng
                            fill: 'row', // sắp xếp theo dòng
                        }}
                        spaceBetween={15}
                        modules={[Pagination, Navigation, Grid]}
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
        </div>
    )
}

export default ArtSection
