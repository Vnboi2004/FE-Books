import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout"
import { GoogleBookItem } from "../../types/googleBooks.types";
import { googleBooksApi } from "../../api/googleBooks.api";
import { IoSearchOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
interface HomeProps {
    subject?: string;
};


const Home: React.FC<HomeProps> = ({subject = 'history'}) => {

    const [books, setBooks] = useState<GoogleBookItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


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
            <div className="grid grid-cols-5 gap-8 justify-items-center">
                {books.map((book) => (
                    <div key={book.id} className="w-full border border-gray-300 rounded-sm bg-[#3E92CC]/15">
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
                                            <TiStarFullOutline key={index} className={` ${index < book.volumeInfo.averageRating ? "text-yellow-300" : "text-gray-300"}`}/>
                                        ))}
                                    </div>
                                    <span className='text-sm text-gray-600'>({book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default Home
