import React, { useState } from 'react';

export default function SearchBox() {
  const [from, setFrom] = useState('Current location');
  const [to, setTo] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    alert(`Searching from ${from} to ${to}`);
  }

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <div>
        <label>From</label>
        <input value={from} onChange={e => setFrom(e.target.value)} />
      </div>
      <div>
        <label>To</label>
        <input value={to} onChange={e => setTo(e.target.value)} placeholder="Enter destination" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
