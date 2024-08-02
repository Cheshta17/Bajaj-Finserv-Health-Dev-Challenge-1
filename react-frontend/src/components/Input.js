import React, { useState } from 'react';

function JsonInput({ onApiResponse }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = JSON.parse(jsonInput);
      const response = await fetch('https://Dev-Challenge.herokuapp.com/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      onApiResponse(data);
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here, e.g., {"data": ["A", "B", "1"]}'
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default JsonInput;
