import React, { useState } from 'react';
import ChatBox from './components/ChatBot.jsx';
import AnswerCard from './components/AnswerCard.jsx';
import PDFModal from './components/PDFModal.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showPDF, setShowPDF] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const simulatedResponse = {
        answer:
          'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
        citations: [
          {
            text:
              '“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)',
            source: 'Dani_Devi_v_Pritam_Singh.pdf',
            link:
              'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz',
          },
        ],
      };
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Lexi Legal Assistant</h1>
      <ChatBox
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      {response && (
        <AnswerCard response={response} openPDF={() => setShowPDF(true)} />
      )}
      {showPDF && (
        <PDFModal
          link={response.citations[0].link}
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
}

export default App;
