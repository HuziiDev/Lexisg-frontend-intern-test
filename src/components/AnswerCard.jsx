import React from 'react';

const AnswerCard = ({ response, openPDF }) => {
  const citation = response.citations[0];

  return (
    <div className="w-full max-w-xl bg-white p-4 shadow rounded">
      <p className="text-gray-700">{response.answer}</p>
      <div className="mt-4 border-t pt-2">
        <span className="block text-sm text-gray-500">Citation:</span>
        <button
          onClick={openPDF}
          className="text-blue-600 hover:underline mt-1"
        >
          {citation.text}
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;
