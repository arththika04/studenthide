import './App.css'
import BookList from "./components/BookList";

function App() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A practical guide to building good habits."
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A story about dreams and destiny."
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Book List
      </h1>

      <BookList books={books} />
    </div>
  );
}

export default App;


 