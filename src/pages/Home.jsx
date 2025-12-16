import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://covers.openlibrary.org/b/id/10909258-L.jpg";

export default function Home() {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const vintageBooks = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      isbn: "9780141040349",
      available: true,
      image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972",
    },
    {
      id: 2,
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
      isbn: "9781503280786",
      available: false,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 3,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      genre: "Gothic",
      isbn: "9780141441146",
      available: true,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 4,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847,
      genre: "Gothic",
      isbn: "9781853260018",
      available: true,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Tragedy",
      isbn: "9780743273565",
      available: false,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20",
    },
    {
      id: 6,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      genre: "Psychological",
      isbn: "9780486415871",
      available: true,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: 7,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890,
      genre: "Gothic",
      isbn: "9780141442464",
      available: true,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 8,
      title: "Dracula",
      author: "Bram Stoker",
      year: 1897,
      genre: "Horror",
      isbn: "9780486411095",
      available: false,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      id: 9,
      title: "Little Women",
      author: "Louisa May Alcott",
      year: 1868,
      genre: "Fiction",
      isbn: "9780147514011",
      available: true,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 10,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      genre: "Historical",
      isbn: "9780199232765",
      available: true,
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
    },
    {
      id: 11,
      title: "The Odyssey",
      author: "Homer",
      year: -800,
      genre: "Epic",
      isbn: "9780140268867",
      available: false,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 12,
      title: "Great Expectations",
      author: "Charles Dickens",
      year: 1861,
      genre: "Fiction",
      isbn: "9780141439563",
      available: true,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 13,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      year: 1877,
      genre: "Tragedy",
      isbn: "9780140449174",
      available: false,
      image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972",
    },
    {
      id: 14,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      year: 1880,
      genre: "Philosophical",
      isbn: "9780374528379",
      available: true,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: 15,
      title: "Madame Bovary",
      author: "Gustave Flaubert",
      year: 1856,
      genre: "Fiction",
      isbn: "9780140449129",
      available: true,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20",
    },
    {
      id: 16,
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      genre: "Horror",
      isbn: "9780486282114",
      available: false,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      id: 17,
      title: "The Iliad",
      author: "Homer",
      year: -750,
      genre: "Epic",
      isbn: "9780140275360",
      available: true,
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
    },
    {
      id: 18,
      title: "Dr. Jekyll and Mr. Hyde",
      author: "Robert Louis Stevenson",
      year: 1886,
      genre: "Horror",
      isbn: "9780486266886",
      available: false,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 19,
      title: "Sense and Sensibility",
      author: "Jane Austen",
      year: 1811,
      genre: "Romance",
      isbn: "9780141439662",
      available: true,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 20,
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      year: 1844,
      genre: "Adventure",
      isbn: "9780140449266",
      available: true,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
  ];

  useEffect(() => {
    setBooks(vintageBooks);
  }, []);

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const viewBook = (book) => {
    nav(`/books/${book.id}`, { state: { book } });
  };

  return (
    <div className="min-h-screen p-6 bg-[#fff6e3]">
      <h1 className="text-4xl font-serif text-center mb-8 text-[#8b5e3c]">
        FastReach Library
      </h1>

      <div className="max-w-lg mx-auto mb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="w-full p-3 rounded-lg border"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            onClick={() => viewBook(book)}
            className="bg-white p-4 rounded-xl shadow-lg cursor-pointer hover:-translate-y-1 transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover rounded-lg mb-3"
              onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            />
            <h2 className="font-bold">{book.title}</h2>
            <p>{book.author}</p>
            <p
              className={`mt-2 font-semibold ${
                book.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.available ? "Available" : "Rented"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}                                                        