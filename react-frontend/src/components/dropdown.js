import React from 'react';

function MultiSelectDropdown({ onChange }) {
  const handleSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onChange(selectedOptions);
  };

  return (
    <select multiple={true} onChange={handleSelect}>
      <option value="numbers">Numbers</option>
      <option value="alphabets">Alphabets</option>
      <option value="highest_alphabet">Highest Alphabet</option>
    </select>
  );
}

export default MultiSelectDropdown;
