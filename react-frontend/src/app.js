import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import ResponseDisplay from './components/ResponseDisplay';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [filters, setFilters] = useState([]);

  const handleApiResponse = (data) => {
    setResponse(data);
  };

  const handleFiltersChange = (selected) => {
    setFilters(selected);
  };

  return (
    <div className="App">
      <h1>API Request and Response</h1>
      <JsonInput onApiResponse={handleApiResponse} />
      {response && (
        <>
          <MultiSelectDropdown onChange={handleFiltersChange} />
          <ResponseDisplay response={response} filters={filters} />
        </>
      )}
    </div>
  );
}

export default App;
