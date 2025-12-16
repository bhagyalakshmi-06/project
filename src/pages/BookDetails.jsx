import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FALLBACK_IMAGE = "https://covers.openlibrary.org/b/id/10909258-L.jpg";

// Local fallback books data (same as BookList)
const books = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141040349", available: true, image: "https://covers.openlibrary.org/b/isbn/9780141040349-L.jpg" },
  { id: 2, title: "Moby-Dick", author: "Herman Melville", isbn: "9781503280786", available: false, image: "https://covers.openlibrary.org/b/isbn/9781503280786-L.jpg" },
  { id: 3, title: "Jane Eyre", author: "Charlotte Brontë", isbn: "9780141441146", available: true, image: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg" },
  { id: 4, title: "Wuthering Heights", author: "Emily Brontë", isbn: "9781853260018", available: true, image: "https://covers.openlibrary.org/b/isbn/9781853260018-L.jpg" },
  { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", available: false, image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg" },
  { id: 6, title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780486415871", available: true, image: "https://covers.openlibrary.org/b/isbn/9780486415871-L.jpg" },
  { id: 7, title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "9780141442464", available: true, image: "https://covers.openlibrary.org/b/isbn/9780141442464-L.jpg" },
  { id: 8, title: "Dracula", author: "Bram Stoker", isbn: "9780486411095", available: false, image: "https://covers.openlibrary.org/b/isbn/9780486411095-L.jpg" },
  { id: 9, title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011", available: true, image: "https://covers.openlibrary.org/b/isbn/9780147514011-L.jpg" },
  { id: 10, title: "War and Peace", author: "Leo Tolstoy", isbn: "9780199232765", available: true, image: "https://covers.openlibrary.org/b/isbn/9780199232765-L.jpg" },
  { id: 11, title: "The Odyssey", author: "Homer", isbn: "9780140268867", available: false, image: "https://covers.openlibrary.org/b/isbn/9780140268867-L.jpg" },
  { id: 12, title: "Great Expectations", author: "Charles Dickens", isbn: "9780141439563", available: true, image: "https://covers.openlibrary.org/b/isbn/9780141439563-L.jpg" },
  { id: 13, title: "Frankenstein", author: "Mary Shelley", isbn: "9780486282114", available: true, image: "https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg" },
  { id: 14, title: "Emma", author: "Jane Austen", isbn: "9780141439587", available: false, image: "https://covers.openlibrary.org/b/isbn/9780141439587-L.jpg" },
  { id: 15, title: "Sense and Sensibility", author: "Jane Austen", isbn: "9780141439662", available: true, image: "https://covers.openlibrary.org/b/isbn/9780141439662-L.jpg" },
  { id: 16, title: "The Scarlet Letter", author: "Nathaniel Hawthorne", isbn: "9780142437261", available: true, image: "https://covers.openlibrary.org/b/isbn/9780142437261-L.jpg" },
  { id: 17, title: "Anna Karenina", author: "Leo Tolstoy", isbn: "9780140449174", available: false, image: "https://covers.openlibrary.org/b/isbn/9780140449174-L.jpg" },
  { id: 18, title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266", available: true, image: "https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg" },
  { id: 19, title: "Les Misérables", author: "Victor Hugo", isbn: "9780451419439", available: true, image: "https://covers.openlibrary.org/b/isbn/9780451419439-L.jpg" },
  { id: 20, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379", available: false, image: "https://covers.openlibrary.org/b/isbn/9780374528379-L.jpg" },
];

export default function BookDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Try state first
    if (location.state?.book) {
      setBook(location.state.book);
    } else {
      // Fallback: find by ID
      const foundBook = books.find((b) => b.id === Number(id));
      setBook(foundBook);
    }
  }, [id, location.state]);

  if (!book) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        Book not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={book.image || FALLBACK_IMAGE}
        alt={book.title}
        className="w-72 h-96 object-cover mx-auto rounded-xl shadow"
        onError={(e) => (e.target.src = FALLBACK_IMAGE)}
      />

      <h1 className="text-3xl font-bold text-center mt-6">{book.title}</h1>
      <p className="text-center text-gray-600">by {book.author}</p>

      <div className="mt-6 space-y-2 text-lg">
        <p>
          <b>ISBN:</b> {book.isbn}
        </p>
        <p>
          <b>Status:</b>{" "}
          <span className={book.available ? "text-green-600" : "text-red-600"}>
            {book.available ? "Available" : "Rented"}
          </span>
        </p>
      </div>
    </div>
  );
}
