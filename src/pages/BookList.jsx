import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const vintageBooks = [
      { id: 1, title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141040349", available: true, image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972" },
      { id: 2, title: "Moby Dick", author: "Herman Melville", isbn: "9781503280786", available: false, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 3, title: "Jane Eyre", author: "Charlotte Brontë", isbn: "9780141441146", available: true, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 4, title: "Wuthering Heights", author: "Emily Brontë", isbn: "9781853260018", available: true, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
      { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", available: false, image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20" },
      { id: 6, title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "9780486415871", available: true, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
      { id: 7, title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "9780141442464", available: true, image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337" },
      { id: 8, title: "Dracula", author: "Bram Stoker", isbn: "9780486411095", available: false, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d" },
      { id: 9, title: "Little Women", author: "Louisa May Alcott", isbn: "9780147514011", available: true, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 10, title: "War and Peace", author: "Leo Tolstoy", isbn: "9780199232765", available: true, image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787" },
      { id: 11, title: "The Odyssey", author: "Homer", isbn: "9780140268867", available: false, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 12, title: "Great Expectations", author: "Charles Dickens", isbn: "9780141439563", available: true, image: "https://images.unsplash.com/photo-1589820296156-2454bb8f8337" },
      { id: 13, title: "Frankenstein", author: "Mary Shelley", isbn: "9780486282114", available: true, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
      { id: 14, title: "Emma", author: "Jane Austen", isbn: "9780141439587", available: false, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 15, title: "Sense and Sensibility", author: "Jane Austen", isbn: "9780141439662", available: true, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 16, title: "The Scarlet Letter", author: "Nathaniel Hawthorne", isbn: "9780142437261", available: true, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
      { id: 17, title: "Anna Karenina", author: "Leo Tolstoy", isbn: "9780140449174", available: false, image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787" },
      { id: 18, title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266", available: true, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 19, title: "Les Misérables", author: "Victor Hugo", isbn: "9780451419439", available: true, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
      { id: 20, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379", available: false, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
    ];

    setBooks(vintageBooks);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Vintage Book Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}                                                            