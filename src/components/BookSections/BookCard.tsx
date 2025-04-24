import { TiStarFullOutline } from "react-icons/ti"
import { GoogleBookItem } from "../../types/googleBooks.types"
import React from "react";

interface BookCardProps {
    book: GoogleBookItem;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className="w-full border border-outline-variant rounded-xl cursor-pointer hover:bg-primary-container hover:no-underline transition-all duration-200 ease-in-out active:rounded-sm">
            <div className="p-4 w-full flex flex-col">
                {/* image */}
                <img
                    src={book.volumeInfo.imageLinks?.thumbnail || ''}   
                    alt={book.volumeInfo.title}
                    className="h-56 object-cover rounded-xl mb-2"
                />
                <div className="flex flex-col items-start gap-1">
                    {/* Title */}
                    <h3 className="font-semibold text-inverse-surface line-clamp-1">{book.volumeInfo.title}</h3>
                    {/* authors */}
                    <p className="text-sm text-on-surface-variant line-clamp-1">
                        {book.volumeInfo.authors?.join(', ') || 'Tác giả không rõ'}
                    </p>
                    {/* published date */}
                    <p className="text-sm text-on-surface-variant">{book.volumeInfo.publishedDate}</p>
                    {/* averageRating */}
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, index) => (
                                <TiStarFullOutline key={index} className={` ${index < book.volumeInfo.averageRating ? "text-yellow-400" : "text-on-surface-variant"}`}/>
                            ))}
                        </div>
                        <span className='text-sm text-on-surface-variant'>({book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 0})</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
