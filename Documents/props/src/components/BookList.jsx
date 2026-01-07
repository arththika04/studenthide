import BookCard from './BookCard';

function BookList({ books }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
} 

export default BookList;