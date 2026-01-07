// src/components/BookCard.jsx
function BookCard({ title, author, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-blue-50 transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">by {author}</p>
      <p className="text-gray-600 text-sm">{description}</p>
      <button className="mt-4 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
        ♥ Like
      </button>
    </div>
  );
}

export default BookCard;
