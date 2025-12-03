import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks([
            { id: 1, title: "Book A", author: "Author A", available: true },
            { id: 2, title: "Book B", author: "Author B", available: false },
            { id: 3, title: "Book C", author: "Author C", available: true }
        ]);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">All Books</h1>

            <div className="grid grid-cols-4 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
