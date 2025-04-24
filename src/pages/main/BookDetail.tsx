import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GoogleBookItem } from "../../types/googleBooks.types";
import { googleBooksApi } from "../../api/googleBooks.api";
import MainLayout from "../../components/layout/MainLayout";

const BookDetail = () => {
    // path url by id
    const {subject, bookId } = useParams();
    
    // Data book by id
    const [book, setBook] = useState<GoogleBookItem>(null);

    useEffect(() => {
        if (bookId) {
            googleBooksApi.getBookDetail(bookId).then(setBook);
        }
    }, [bookId]);

    console.log(book);

    return (
        <MainLayout>
            {book ? (
                <>
                    <img src={book.volumeInfo.imageLinks?.thumbnail || ''} alt="" />
                    <h1>{book.volumeInfo.title}</h1>
                </>
                ) : (
                <p>Đang tải thông tin sách...</p>
            )}
        </MainLayout>
    )
}

export default BookDetail
