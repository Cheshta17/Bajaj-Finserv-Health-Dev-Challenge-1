import React from 'react';

function ResponseDisplay({ response, filters }) {
  const filteredResponse = {};

  filters.forEach(filter => {
    if (response[filter]) {
      filteredResponse[filter] = response[filter];
    }
  });

  return (
    <div>
      <h2>Response:</h2>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
}

export default ResponseDisplay;
