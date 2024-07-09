import React from 'react';

function TokenSelector({ tokens, setSelectedToken, setSelectedChain }) {
  return (
    <div>
      <label>
        Token:
        <select onChange={(e) => setSelectedToken(e.target.value)}>
          <option value="">Select a token</option>
          {Array.isArray(tokens) && tokens.map((token, index) => (
            <option key={index} value={token.symbol}>{token.name}</option>
          ))}
        </select>
      </label>
      <label>
        Chain:
        <select onChange={(e) => setSelectedChain(e.target.value)}>
          <option value="">Select a chain</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Binance Smart Chain">Binance Smart Chain</option>
        </select>
      </label>
    </div>
  );
}

export default TokenSelector;

