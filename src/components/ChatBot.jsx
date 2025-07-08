import React from 'react';

const ChatBox = ({ query, setQuery, handleSubmit, loading }) => {
  return (
    <div className="w-full max-w-xl mb-4">
      <textarea
        className="w-full p-3 border rounded resize-none"
        rows={4}
        placeholder="Ask your legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default ChatBox;
