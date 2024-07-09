import React, { useState, useEffect } from 'react';
import TokenSelector from './components/TokenSelector';
import { getTokens } from './utils/apiClient';

function App() {
  const [tokens, setTokens] = useState([]);
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  useEffect(() => {
    async function fetchTokens() {
      try {
        const response = await getTokens();
        if (response.success) {
          setTokens(response.recommendedTokens);
        } else {
          console.error('Failed to fetch tokens:', response.error);
          setTokens([]);
        }
      } catch (error) {
        console.error('Error fetching tokens:', error);
        setTokens([]);
      }
    }
    fetchTokens();
  }, []);
  
  return (
    <div>
      <h1>Bridge Application</h1>
      <TokenSelector tokens={tokens} setSelectedToken={setSelectedToken} setSelectedChain={setSelectedChain} />
    </div>
  );
}

export default App;
