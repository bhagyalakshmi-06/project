import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Vintage books data
  const vintageBooks = [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      isbn: "9780141040349",
      rented: false,
      image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972",
    },
    {
      id: 2,
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
      isbn: "9781503280786",
      rented: true,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 3,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      genre: "Gothic",
      isbn: "9780141441146",
      rented: false,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 4,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847,
      genre: "Gothic",
      isbn: "9781853260018",
      rented: false,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: 5,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Tragedy",
      isbn: "9780743273565",
      rented: true,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20",
    },
    {
      id: 6,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      genre: "Psychological",
      isbn: "9780486415871",
      rented: false,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: 7,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890,
      genre: "Gothic",
      isbn: "9780141442464",
      rented: false,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 8,
      title: "Dracula",
      author: "Bram Stoker",
      year: 1897,
      genre: "Horror",
      isbn: "9780486411095",
      rented: true,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      id: 9,
      title: "Little Women",
      author: "Louisa May Alcott",
      year: 1868,
      genre: "Fiction",
      isbn: "9780147514011",
      rented: false,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 10,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      genre: "Historical",
      isbn: "9780199232765",
      rented: false,
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
    },
    {
      id: 11,
      title: "The Odyssey",
      author: "Homer",
      year: -800,
      genre: "Epic",
      isbn: "9780140268867",
      rented: true,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 12,
      title: "Great Expectations",
      author: "Charles Dickens",
      year: 1861,
      genre: "Fiction",
      isbn: "9780141439563",
      rented: false,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 13,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      year: 1877,
      genre: "Tragedy",
      isbn: "9780140449174",
      rented: true,
      image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972",
    },
    {
      id: 14,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      year: 1880,
      genre: "Philosophical",
      isbn: "9780374528379",
      rented: false,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      id: 15,
      title: "Madame Bovary",
      author: "Gustave Flaubert",
      year: 1856,
      genre: "Fiction",
      isbn: "9780140449129",
      rented: false,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20",
    },
    {
      id: 16,
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      genre: "Horror",
      isbn: "9780486282114",
      rented: true,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      id: 17,
      title: "The Iliad",
      author: "Homer",
      year: -750,
      genre: "Epic",
      isbn: "9780140275360",
      rented: false,
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
    },
    {
      id: 18,
      title: "Dr. Jekyll and Mr. Hyde",
      author: "Robert Louis Stevenson",
      year: 1886,
      genre: "Horror",
      isbn: "9780486266886",
      rented: true,
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337",
    },
    {
      id: 19,
      title: "Sense and Sensibility",
      author: "Jane Austen",
      year: 1811,
      genre: "Romance",
      isbn: "9780141439662",
      rented: false,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: 20,
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      year: 1844,
      genre: "Adventure",
      isbn: "9780140449266",
      rented: false,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
  ];

  useEffect(() => {
    setBooks(vintageBooks);
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const viewBook = (id) => {
    nav(`/book/${id}`);
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-[#fff6e3]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#8b5e3c] text-center mb-8 drop-shadow-md">
          FastReach Library
        </h1>

        {/* Search box */}
        <div className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg border border-[#d4b880] bg-[#fff8f0]/70 text-[#5c3b1f] placeholder-[#a68c66] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-md"
          />
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-[#fff8f0]/90 p-4 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-1 border border-[#e3d4b9]"
              onClick={() => viewBook(book.id)}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover rounded-xl mb-3"
              />
              <h2 className="font-bold text-lg text-[#8b5e3c]">{book.title}</h2>
              <p className="text-[#6b4a2e]">{book.author}</p>
              <p className="text-[#6b4a2e] text-sm mt-1">Genre: {book.genre}</p>
              <p className="text-[#6b4a2e] text-sm">Year: {book.year}</p>
              <p className="text-[#6b4a2e] text-sm">ISBN: {book.isbn}</p>
              <p
                className={`mt-2 font-semibold ${
                  book.rented ? "text-red-600" : "text-green-600"
                }`}
              >
                {book.rented ? "Rented" : "Available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
