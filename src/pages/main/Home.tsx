import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout"
import { GoogleBookItem } from "../../types/googleBooks.types";
import { googleBooksApi } from "../../api/googleBooks.api";

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
            <h1 className="text-center py-10">Home Page</h1>
            <div className="grid grid-cols-4 gap-6">
                {books.map((book) => (
                    <div key={book.id}>
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail || ''}
                            alt={book.volumeInfo.title}
                            className="mb-2"
                        />
                        <h3 className="font-semibold">{book.volumeInfo.title}</h3>
                        <p className="text-sm text-gray-600">
                            {book.volumeInfo.authors?.join(', ') || 'Tác giả không rõ'}
                        </p>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default Home
