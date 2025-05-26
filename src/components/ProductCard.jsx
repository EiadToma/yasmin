import { useState } from 'react';
import { useAppContext } from '../AppContext';

const ProductCard = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);

  const { selectedProduct } = useAppContext();

  const handleAddComment = () => {
    if (name.trim() && newComment.trim()) {
      const commentObj = {
        name: name.trim(),
        comment: newComment.trim(),
        rating,
      };
      setComments((prev) => [...prev, commentObj]);
      setName('');
      setNewComment('');
      setRating(5);
    }
  };

  const starsDisplay = (count) => '⭐'.repeat(count);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">{selectedProduct.title}</h1>
          <p className="text-sm text-gray-500">{selectedProduct.category}</p>
          <p className="text-lg text-green-600 font-semibold">${selectedProduct.price}</p>
          <div className="text-yellow-600 text-sm">
            ⭐ {selectedProduct.rating.rate} ({selectedProduct.rating.count} reviews)
          </div>
          <p className="text-gray-700">{selectedProduct.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-bold">Comments</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Write a comment..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="rating" className="font-semibold">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddComment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Comment
          </button>
        </div>

        {/* Comment List */}
        <div className="space-y-3 pt-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 italic">No comments yet.</p>
          ) : (
            comments.map((c, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{c.name}</span>
                  <span className="text-yellow-600 text-sm">{starsDisplay(c.rating)}</span>
                </div>
                <p className="text-gray-700">{c.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
